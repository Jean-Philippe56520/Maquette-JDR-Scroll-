import React, { useState, useMemo } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, Cell
} from 'recharts';
import { TrendingUp, TrendingDown, Users, Clock, BookOpen, ChevronDown, BarChart3, Layers, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUser } from '../context/UserContext';

// ─── Rich mock data ───────────────────────────────────────────────────────────

const MONTHS = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];

interface BookStat {
  id: string;
  title: string;
  category: 'Aides de jeu' | 'Secrets' | 'Scénarios';
  monthly: number[]; // 12 months, minutes
  readers: number[];
}

interface GameStat {
  id: string;
  name: string;
  cover: string;
  books: BookStat[];
}

const publisherGames: GameStat[] = [
  {
    id: 'dd5',
    name: 'Donjons & Dragons 5e',
    cover: 'https://images.pexels.com/photos/6333840/pexels-photo-6333840.jpeg?auto=compress&cs=tinysrgb&w=400',
    books: [
      {
        id: 'dnd-players-guide',
        title: 'Guide des Joueurs pour Débuter',
        category: 'Aides de jeu',
        monthly: [18200, 17400, 19800, 21000, 23400, 22100, 24300, 26500, 25800, 27200, 28900, 31000],
        readers:  [420,   390,   450,   480,   530,   510,   560,   610,   590,   630,   670,   720],
      },
      {
        id: 'dnd-combat',
        title: 'Tactiques de Combat',
        category: 'Aides de jeu',
        monthly: [9800, 10200, 9600, 11400, 12100, 11800, 13200, 14500, 13800, 15100, 16200, 17400],
        readers:  [210,   220,   205,  245,   260,   255,   285,   315,   300,   330,   355,   380],
      },
      {
        id: 'dnd-secrets',
        title: 'Secrets des Royaumes Oubliés',
        category: 'Secrets',
        monthly: [14500, 13800, 15600, 16200, 17800, 18400, 19200, 20800, 21500, 22300, 23600, 24900],
        readers:  [310,   295,   335,   348,   382,   395,   412,   447,   462,   479,   507,   535],
      },
      {
        id: 'dnd-scenario',
        title: 'Scénario : Le Butin du Dragon',
        category: 'Scénarios',
        monthly: [11200, 12600, 13400, 14800, 15200, 16800, 17400, 18200, 19600, 20400, 21800, 23200],
        readers:  [240,   270,   288,   318,   326,   361,   374,   391,   421,   438,   469,   498],
      },
    ],
  },
  {
    id: 'cthulhu',
    name: "L'Appel de Cthulhu",
    cover: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=400',
    books: [
      {
        id: 'cthulhu-investigation',
        title: 'Guide des Investigations Terrifiantes',
        category: 'Aides de jeu',
        monthly: [7200, 7600, 8100, 8800, 9400, 9100, 10200, 11400, 11100, 12300, 13100, 14200],
        readers:  [155,  163,  174,  189,  202,  196,  219,   245,   238,   264,   281,   305],
      },
      {
        id: 'cthulhu-secrets',
        title: 'Secrets du Mythe de Cthulhu',
        category: 'Secrets',
        monthly: [5400, 5800, 6200, 7100, 7600, 8200, 8900, 9600, 10200, 10800, 11500, 12400],
        readers:  [116,  125,  133,  152,  163,  176,  191,   206,   219,   232,   247,   266],
      },
      {
        id: 'cthulhu-scenario',
        title: 'Scénario : La Cité Perdue de Khothoga',
        category: 'Scénarios',
        monthly: [6100, 6500, 7000, 7800, 8200, 9000, 9800, 10600, 11200, 12000, 12800, 13800],
        readers:  [131,  140,  150,  167,  176,  193,  210,   228,   241,   258,   275,   296],
      },
    ],
  },
  {
    id: 'vampire',
    name: "Vampire : L'Âge des Ténèbres",
    cover: 'https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&w=400',
    books: [
      {
        id: 'vampire-storytelling',
        title: "L'Art du Storytelling Urbain",
        category: 'Aides de jeu',
        monthly: [4200, 4600, 5100, 5600, 6000, 5800, 6500, 7100, 6900, 7500, 8200, 8900],
        readers:  [90,   99,   110,  120,  129,  125,  140,   153,   148,   161,   176,   191],
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const COLORS = ['#F26A2E', '#F2B441', '#4ABDE8', '#66BB6A', '#AB47BC', '#EF5350'];

function sumMonthly(books: BookStat[], monthIndex: number) {
  return books.reduce((s, b) => s + b.monthly[monthIndex], 0);
}

function totalForBook(b: BookStat) {
  return b.monthly.reduce((s, v) => s + v, 0);
}

function pct(current: number, previous: number) {
  if (previous === 0) return 0;
  return Math.round(((current - previous) / previous) * 100);
}

const fmtH = (min: number) => {
  const h = Math.round(min / 60);
  return h >= 1000 ? `${(h / 1000).toFixed(1)}k h` : `${h}h`;
};

// ─── Custom tooltip ───────────────────────────────────────────────────────────

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="border rounded-xl px-4 py-3 shadow-xl min-w-[160px]" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
      <p className="text-xs font-bold mb-2" style={{ color: 'var(--text-muted)' }}>{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center justify-between gap-4 text-xs mb-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
            <span className="truncate max-w-[120px]" style={{ color: 'var(--text-muted)' }}>{p.name}</span>
          </span>
          <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{fmtH(p.value)}</span>
        </div>
      ))}
    </div>
  );
};

// ─── Component ────────────────────────────────────────────────────────────────

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [selectedGameId, setSelectedGameId] = useState<string>('all');
  const [period, setPeriod] = useState<'3m' | '6m' | '12m'>('6m');
  const [view, setView] = useState<'overview' | 'books'>('overview');
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  const periodMonths = period === '3m' ? 3 : period === '6m' ? 6 : 12;
  const monthSlice = MONTHS.slice(12 - periodMonths);

  const activeGames = selectedGameId === 'all' ? publisherGames : publisherGames.filter(g => g.id === selectedGameId);
  const allActiveBooks = activeGames.flatMap(g => g.books);

  const focusedBooks = selectedBookId ? allActiveBooks.filter(b => b.id === selectedBookId) : allActiveBooks;

  const lastMonthIdx = 11;
  const prevMonthIdx = 10;

  const totalLastMonth = allActiveBooks.reduce((s, b) => s + b.monthly[lastMonthIdx], 0);
  const totalPrevMonth = allActiveBooks.reduce((s, b) => s + b.monthly[prevMonthIdx], 0);
  const totalReaders = allActiveBooks.reduce((s, b) => s + b.readers[lastMonthIdx], 0);
  const prevReaders = allActiveBooks.reduce((s, b) => s + b.readers[prevMonthIdx], 0);
  const totalAllTime = allActiveBooks.reduce((s, b) => s + totalForBook(b), 0);
  const bookCount = allActiveBooks.length;

  const relativeShare = useMemo(() => {
    const globalTotal = 693200;
    return ((totalAllTime / globalTotal) * 100).toFixed(1);
  }, [totalAllTime]);


  if (user.role === 'visitor') {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
        <p style={{ color: 'var(--text-muted)' }}>Connexion requise</p>
      </div>
    );
  }

  const chartData = monthSlice.map((month, i) => {
    const idx = 12 - periodMonths + i;
    const row: Record<string, number | string> = { month };
    focusedBooks.forEach(b => {
      row[b.title.length > 28 ? b.title.slice(0, 28) + '…' : b.title] = b.monthly[idx];
    });
    if (focusedBooks.length > 1) {
      row['Total'] = focusedBooks.reduce((s, b) => s + b.monthly[idx], 0);
    }
    return row;
  });

  const seriesKeys = focusedBooks.map(b => b.title.length > 28 ? b.title.slice(0, 28) + '…' : b.title);
  if (focusedBooks.length > 1) seriesKeys.push('Total');

  const gameCompData = publisherGames.map(g => ({
    name: g.name.length > 22 ? g.name.slice(0, 22) + '…' : g.name,
    value: g.books.reduce((s, b) => {
      const start = 12 - periodMonths;
      return s + b.monthly.slice(start).reduce((a, v) => a + v, 0);
    }, 0),
  }));

  const kpis = [
    {
      label: 'Temps lu (ce mois)',
      value: fmtH(totalLastMonth),
      change: pct(totalLastMonth, totalPrevMonth),
      icon: <Clock className="w-4 h-4" />,
    },
    {
      label: 'Lecteurs actifs',
      value: totalReaders.toLocaleString(),
      change: pct(totalReaders, prevReaders),
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: 'Part de lecture',
      value: `${relativeShare}%`,
      change: 0.9,
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      label: 'Ouvrages actifs',
      value: bookCount.toString(),
      change: 0,
      icon: <BookOpen className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20">

        {/* Page header */}
        <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-6 border-b" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Dashboard Éditeur</h1>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Éditions D&D Premium · Données de lecture en temps réel</p>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Period */}
              <div className="flex border rounded-lg p-0.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                {(['3m', '6m', '12m'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all active:scale-95 ${
                      period === p ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''
                    }`}
                    style={period !== p ? { color: 'var(--text-muted)' } : {}}
                  >
                    {p === '3m' ? '3 mois' : p === '6m' ? '6 mois' : '12 mois'}
                  </button>
                ))}
              </div>

              {/* View */}
              <div className="flex border rounded-lg p-0.5" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <button
                  onClick={() => setView('overview')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all active:scale-95 ${view === 'overview' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                  style={view !== 'overview' ? { color: 'var(--text-muted)' } : {}}
                >
                  <BarChart3 className="w-3.5 h-3.5" /> Vue jeux
                </button>
                <button
                  onClick={() => setView('books')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md transition-all active:scale-95 ${view === 'books' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                  style={view !== 'books' ? { color: 'var(--text-muted)' } : {}}
                >
                  <Layers className="w-3.5 h-3.5" /> Vue livres
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Game filter pills */}
        <section className="px-4 sm:px-6 lg:px-8 pt-5 pb-2">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold mr-1" style={{ color: 'var(--text-muted)' }}>Filtrer :</span>
              <button
                onClick={() => { setSelectedGameId('all'); setSelectedBookId(null); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
                  selectedGameId === 'all'
                    ? 'bg-[#F26A2E] border-[#F26A2E] text-[#0D0D0F]'
                    : ''
                }`}
                style={selectedGameId !== 'all' ? { borderColor: 'var(--border-copper-hover)', color: 'var(--text-muted)' } : {}}
              >
                Tous les jeux
              </button>
              {publisherGames.map(g => (
                <button
                  key={g.id}
                  onClick={() => { setSelectedGameId(g.id); setSelectedBookId(null); }}
                  className={`flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
                    selectedGameId === g.id
                      ? 'border-[#F26A2E]'
                      : ''
                  }`}
                  style={
                    selectedGameId === g.id
                      ? { backgroundColor: 'var(--bg-surface-alt)', color: 'var(--text-primary)' }
                      : { borderColor: 'var(--border-copper-hover)', color: 'var(--text-muted)' }
                  }
                >
                  <img src={g.cover} alt="" className="w-5 h-5 rounded-full object-cover" />
                  {g.name.length > 20 ? g.name.slice(0, 20) + '…' : g.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* KPI Cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => (
              <div key={i} className="border rounded-xl p-5 hover:border-[#F26A2E] hover:border-opacity-40 transition-all" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{kpi.label}</span>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#F26A2E]" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                    {kpi.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{kpi.value}</p>
                {kpi.change !== 0 ? (
                  <div className={`flex items-center gap-1 text-xs font-semibold ${kpi.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {kpi.change > 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                    {kpi.change > 0 ? '+' : ''}{kpi.change}% vs mois précédent
                  </div>
                ) : (
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>stables ce mois</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {view === 'overview' && (
          <>
            {/* Game comparison bar chart */}
            <section className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 border rounded-xl p-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                  <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Comparaison par jeu</h3>
                  <p className="text-xs mb-5" style={{ color: 'var(--text-muted)' }}>Temps total lu sur {period}</p>
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={gameCompData} layout="vertical" barSize={16}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#B87333" strokeOpacity={0.08} horizontal={false} />
                      <XAxis type="number" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} tickFormatter={v => fmtH(v)} />
                      <YAxis type="category" dataKey="name" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} width={100} />
                      <Tooltip
                        contentStyle={{ backgroundColor: 'var(--bg-surface)', border: '1px solid #B87333', borderRadius: 8 }}
                        formatter={(v: number) => [fmtH(v), 'Temps lu']}
                        labelStyle={{ fontSize: 11 }}
                      />
                      <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                        {gameCompData.map((_, i) => (
                          <Cell key={i} fill={selectedGameId !== 'all' && publisherGames[i].id !== selectedGameId ? 'var(--bg-surface-alt)' : COLORS[i % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="lg:col-span-2 border rounded-xl p-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Évolution par jeu</h3>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Tendance mensuelle sur {period}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ResponsiveContainer width="100%" height={260}>
                      <LineChart data={monthSlice.map((month, i) => {
                        const idx = 12 - periodMonths + i;
                        const row: Record<string, number | string> = { month };
                        publisherGames.forEach(g => {
                          row[g.name.length > 18 ? g.name.slice(0, 18) + '…' : g.name] = sumMonthly(g.books, idx);
                        });
                        return row;
                      })}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#B87333" strokeOpacity={0.08} />
                        <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
                        <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 10 }} tickFormatter={v => fmtH(v)} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: 10 }} />
                        {publisherGames.map((g, i) => (
                          <Line
                            key={g.id}
                            type="monotone"
                            dataKey={g.name.length > 18 ? g.name.slice(0, 18) + '…' : g.name}
                            stroke={COLORS[i % COLORS.length]}
                            strokeWidth={selectedGameId === 'all' || selectedGameId === g.id ? 2.5 : 1}
                            strokeOpacity={selectedGameId === 'all' || selectedGameId === g.id ? 1 : 0.25}
                            dot={false}
                            activeDot={{ r: 4 }}
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </section>

            {/* Category split per game */}
            <section className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeGames.map(game => {
                    const totals = { 'Aides de jeu': 0, Secrets: 0, Scénarios: 0 };
                    const start = 12 - periodMonths;
                    game.books.forEach(b => {
                      const key = b.category === 'Aides de jeu' ? 'Aides de jeu' : b.category === 'Secrets' ? 'Secrets' : 'Scénarios';
                      totals[key as keyof typeof totals] += b.monthly.slice(start).reduce((s, v) => s + v, 0);
                    });
                    const grandTotal = Object.values(totals).reduce((s, v) => s + v, 0);
                    const cats = Object.entries(totals).filter(([, v]) => v > 0);
                    return (
                      <div key={game.id} className="border rounded-xl p-5 hover:border-[#F26A2E] hover:border-opacity-40 transition-all" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                        <div className="flex items-center gap-3 mb-4">
                          <img src={game.cover} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-bold truncate" style={{ color: 'var(--text-primary)' }}>{game.name}</p>
                            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{game.books.length} ouvrages · {fmtH(grandTotal)}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {cats.map(([cat, val]) => {
                            const pctVal = Math.round((val / grandTotal) * 100);
                            const barColor = cat === 'Aides de jeu' ? '#4ABDE8' : cat === 'Secrets' ? '#EF5350' : '#66BB6A';
                            return (
                              <div key={cat}>
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span style={{ color: 'var(--text-muted)' }}>{cat}</span>
                                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{pctVal}%</span>
                                </div>
                                <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pctVal}%`, background: barColor }} />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'books' && (
          <>
            {/* Book selector + chart */}
            <section className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="max-w-7xl mx-auto border rounded-xl p-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Évolution par livre</h3>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Cliquez sur un livre dans le tableau pour l'isoler</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex border rounded-lg p-0.5" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)' }}>
                      <button
                        onClick={() => setChartType('line')}
                        className={`px-3 py-1 text-xs font-bold rounded-md transition-all active:scale-95 ${chartType === 'line' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                        style={chartType !== 'line' ? { color: 'var(--text-muted)' } : {}}
                      >
                        Ligne
                      </button>
                      <button
                        onClick={() => setChartType('bar')}
                        className={`px-3 py-1 text-xs font-bold rounded-md transition-all active:scale-95 ${chartType === 'bar' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                        style={chartType !== 'bar' ? { color: 'var(--text-muted)' } : {}}
                      >
                        Barres
                      </button>
                    </div>
                    {selectedBookId && (
                      <button
                        onClick={() => setSelectedBookId(null)}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#F26A2E] border border-[#F26A2E] border-opacity-40 rounded-lg transition-all active:scale-95"
                        style={{ '--hover-bg': 'var(--bg-surface-alt)' } as React.CSSProperties}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface-alt)')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
                      >
                        Tout afficher
                      </button>
                    )}
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                  {chartType === 'line' ? (
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#B87333" strokeOpacity={0.08} />
                      <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
                      <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 10 }} tickFormatter={v => fmtH(v)} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 10 }} />
                      {seriesKeys.map((key, i) => (
                        <Line
                          key={key}
                          type="monotone"
                          dataKey={key}
                          stroke={key === 'Total' ? '#F4F1E8' : COLORS[i % COLORS.length]}
                          strokeWidth={2}
                          strokeDasharray={key === 'Total' ? '5 3' : undefined}
                          dot={false}
                          activeDot={{ r: 4 }}
                        />
                      ))}
                    </LineChart>
                  ) : (
                    <BarChart data={chartData} barSize={Math.max(6, 32 / seriesKeys.length)}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#B87333" strokeOpacity={0.08} />
                      <XAxis dataKey="month" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
                      <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 10 }} tickFormatter={v => fmtH(v)} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 10 }} />
                      {seriesKeys.filter(k => k !== 'Total').map((key, i) => (
                        <Bar key={key} dataKey={key} fill={COLORS[i % COLORS.length]} radius={[3, 3, 0, 0]} />
                      ))}
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </section>

            {/* Per-book table */}
            <section className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="max-w-7xl mx-auto border rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border-copper)' }}>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Détail par livre</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b" style={{ borderColor: 'var(--border-copper)' }}>
                        <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Ouvrage</th>
                        <th className="text-left px-3 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Jeu</th>
                        <th className="text-left px-3 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Catégorie</th>
                        <th className="text-right px-3 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Ce mois</th>
                        <th className="text-right px-3 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Var M-1</th>
                        <th className="text-right px-3 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Lecteurs</th>
                        <th className="text-right px-6 py-3 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Total {period}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeGames.flatMap(game =>
                        game.books.map(book => {
                          const thisMonth = book.monthly[11];
                          const prevMonth = book.monthly[10];
                          const change = pct(thisMonth, prevMonth);
                          const start = 12 - periodMonths;
                          const periodTotal = book.monthly.slice(start).reduce((s, v) => s + v, 0);
                          const isSelected = selectedBookId === book.id;

                          return (
                            <tr
                              key={book.id}
                              onClick={() => setSelectedBookId(isSelected ? null : book.id)}
                              className={`border-b cursor-pointer transition-all ${
                                isSelected ? 'border-l-2 border-l-[#F26A2E]' : ''
                              }`}
                              style={{
                                borderColor: 'var(--border-copper)',
                                backgroundColor: isSelected ? 'var(--bg-surface-alt)' : undefined,
                                opacity: selectedBookId && !isSelected ? 0.4 : 1,
                              }}
                              onMouseEnter={e => { if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--bg-surface-alt)'; }}
                              onMouseLeave={e => { if (!isSelected) e.currentTarget.style.backgroundColor = ''; }}
                            >
                              <td className="px-6 py-4">
                                <div className="font-semibold text-xs max-w-[200px] leading-snug" style={{ color: 'var(--text-primary)' }}>{book.title}</div>
                              </td>
                              <td className="px-3 py-4">
                                <div className="flex items-center gap-2">
                                  <img src={game.cover} alt="" className="w-6 h-6 rounded object-cover flex-shrink-0" />
                                  <span className="text-xs hidden sm:block truncate max-w-[100px]" style={{ color: 'var(--text-muted)' }}>{game.name}</span>
                                </div>
                              </td>
                              <td className="px-3 py-4">
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                  book.category === 'Aides de jeu' ? 'bg-blue-500/10 text-blue-500' :
                                  book.category === 'Secrets' ? 'bg-red-500/10 text-red-500' :
                                  'bg-green-500/10 text-green-500'
                                }`}>
                                  {book.category}
                                </span>
                              </td>
                              <td className="px-3 py-4 text-right font-semibold text-xs" style={{ color: 'var(--text-primary)' }}>{fmtH(thisMonth)}</td>
                              <td className="px-3 py-4 text-right">
                                <span className={`text-xs font-bold flex items-center justify-end gap-0.5 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                  {change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                  {change >= 0 ? '+' : ''}{change}%
                                </span>
                              </td>
                              <td className="px-3 py-4 text-right text-xs" style={{ color: 'var(--text-muted)' }}>{book.readers[11].toLocaleString()}</td>
                              <td className="px-6 py-4 text-right font-semibold text-xs text-[#F2B441]">{fmtH(periodTotal)}</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                    <tfoot>
                      <tr style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
                        <td colSpan={3} className="px-6 py-3 text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Total</td>
                        <td className="px-3 py-3 text-right text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{fmtH(totalLastMonth)}</td>
                        <td className="px-3 py-3 text-right">
                          <span className={`text-xs font-bold ${pct(totalLastMonth, totalPrevMonth) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {pct(totalLastMonth, totalPrevMonth) >= 0 ? '+' : ''}{pct(totalLastMonth, totalPrevMonth)}%
                          </span>
                        </td>
                        <td className="px-3 py-3 text-right text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{totalReaders.toLocaleString()}</td>
                        <td className="px-6 py-3 text-right text-xs font-bold text-[#F2B441]">{fmtH(allActiveBooks.reduce((s, b) => { const start = 12 - periodMonths; return s + b.monthly.slice(start).reduce((a, v) => a + v, 0); }, 0))}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Hidden import suppressor */}
        <span className="hidden"><ChevronDown /></span>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
