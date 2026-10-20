import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, X, BookOpen, Crown, Zap, CreditCard, Lock, CheckCircle2, ChevronRight, ChevronDown, Dice6 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useUser } from '../context/UserContext';

type PlanId = 'player' | 'gm';

interface PlanDef {
  id: PlanId;
  name: string;
  icon: React.ReactNode;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: { label: string; included: boolean }[];
}

const Pricing: React.FC = () => {
  const { user, setPlan } = useUser();
  const navigate = useNavigate();
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<PlanDef | null>(null);
  const [subscriptionAction, setSubscriptionAction] = useState<'new' | 'change'>('new');
  const [previousPlan, setPreviousPlan] = useState<PlanId | null>(null);
  const [step, setStep] = useState<'idle' | 'form' | 'processing' | 'success'>('idle');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardName, setCardName] = useState('');

  const plans: PlanDef[] = [
    {
      id: 'player',
      name: 'PJ',
      icon: <BookOpen className="w-6 h-6" />,
      description: "Pour jouer, découvrir et progresser sans révélation majeure.",
      monthlyPrice: 5.99,
      annualPrice: 59.90,
      features: [
        { label: 'Accès complet au catalogue', included: true },
        { label: 'Fiches jeux & fiches livres', included: true },
        { label: 'Aides de jeu (tous jeux)', included: true },
        { label: 'Favoris (également disponibles sans abonnement)', included: true },
        { label: 'Reprise de lecture synchronisée', included: true },
        { label: 'Secrets & notes de MJ', included: false },
        { label: 'Scénarios complets', included: false },
      ],
    },
    {
      id: 'gm',
      name: 'MJ',
      icon: <Crown className="w-6 h-6" />,
      description: "Pour préparer, animer ou anticiper vos futures parties.",
      monthlyPrice: 7.99,
      annualPrice: 79.90,
      features: [
        { label: 'Accès complet au catalogue', included: true },
        { label: 'Fiches jeux & fiches livres', included: true },
        { label: 'Aides de jeu (tous jeux)', included: true },
        { label: 'Favoris (également disponibles sans abonnement)', included: true },
        { label: 'Reprise de lecture synchronisée', included: true },
        { label: 'Secrets & notes de MJ', included: true },
        { label: 'Scénarios complets', included: true },
      ],
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Comment fonctionne la période d'essai de 7 jours ?", a: "Les nouveaux abonnés bénéficient de 7 jours d'essai gratuit. Le paiement intervient à la fin de la période d'essai, sauf annulation avant son échéance." },
    { q: 'Quelle est la différence entre PJ et MJ ?', a: "L'offre PJ donne accès aux aides de jeu, pensées pour jouer et découvrir sans révélation majeure. L'offre MJ ajoute les secrets et scénarios complets, utiles pour préparer ou animer une partie. Si vous êtes parfois joueur et parfois MJ, l'accès MJ peut convenir : il suffit d'éviter les contenus sensibles des jeux que vous souhaitez découvrir comme joueur." },
    { q: 'Puis-je annuler mon abonnement à tout moment ?', a: "Oui, vous pouvez annuler à tout moment depuis votre compte, sans frais ni engagement. L'accès reste actif jusqu'à la fin de la période payée." },
    { q: 'Comment fonctionne la rémunération des éditeurs ?', a: 'Les éditeurs sont rémunérés au prorata du temps de lecture de leurs contenus. Plus vos ouvrages sont lus, plus vous percevez de revenus.' },
  ];

  const currentPlan = user.plan === 'player' || user.plan === 'gm' ? user.plan : null;
  const isCurrentPlan = (planId: PlanId) => currentPlan === planId;
  const getPlanLabel = (planId: PlanId | null) => planId === 'gm' ? 'MJ' : planId === 'player' ? 'PJ' : null;

  const openModal = (plan: PlanDef) => {
    setSelectedPlan(plan);
    setSubscriptionAction(currentPlan ? 'change' : 'new');
    setPreviousPlan(currentPlan);
    setStep('form');
    setCardNumber(''); setCardExpiry(''); setCardCvc(''); setCardName('');
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setSubscriptionAction('new');
    setPreviousPlan(null);
    setStep('idle');
  };

  const formatCardNumber = (val: string) => val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  const formatExpiry = (val: string) => { const d = val.replace(/\D/g, '').slice(0, 4); return d.length >= 3 ? d.slice(0, 2) + '/' + d.slice(2) : d; };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;
    setStep('processing');
    setTimeout(() => { setPlan(selectedPlan.id); setStep('success'); }, 1800);
  };

  const formatPrice = (value: number) =>
    value.toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const formatMonthlyPrice = (value: number) =>
    value.toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const getAnnualMonthlyEquivalent = (annualPrice: number) => annualPrice / 12;

  const price = selectedPlan
    ? billing === 'monthly'
      ? `${formatPrice(selectedPlan.monthlyPrice)} €/mois`
      : `${formatPrice(selectedPlan.annualPrice)} €/an`
    : '';

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-base)' }}>
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#F26A2E] border-opacity-30 rounded-full text-[#F26A2E] text-xs font-semibold mb-5" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
              <Zap className="w-3 h-3" />
              7 jours d'essai gratuit
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Choisissez votre abonnement
            </h1>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Choisissez l'accès qui correspond à votre rôle autour de la table : joueur, MJ, ou parfois les deux.
            </p>
            {currentPlan && (
              <p className="mt-4 text-sm text-[#F2B441] font-semibold">
                Abonnement actuel : {currentPlan === 'player' ? 'PJ' : 'MJ'}
              </p>
            )}
          </div>
        </section>

        {/* Glossaire widget */}
        <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-3">
          <div className="max-w-3xl mx-auto">
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-5 py-5 border rounded-xl"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-lg flex items-center justify-center text-[#0D0D0F]">
                  <Dice6 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                    Quel accès correspond à votre rôle ?
                  </p>
                  <p className="text-sm font-semibold text-[#F26A2E]">Joueur, MJ, ou parfois les deux ?</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    Le glossaire vous aide à choisir sans révéler inutilement des{' '}
                    <Link to="/glossaire" className="text-[#F26A2E] hover:text-[#F2B441] transition-colors underline underline-offset-2">
                      contenus sensibles.
                    </Link>
                  </p>
                </div>
              </div>
              <Link
                to="/glossaire"
                className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95 hover:-translate-y-0.5"
              >
                Comprendre les accès <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Billing toggle */}
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center border rounded-xl p-1" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
              <button
                onClick={() => setBilling('monthly')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all active:scale-95 ${billing === 'monthly' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                style={billing !== 'monthly' ? { color: 'var(--text-muted)' } : {}}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all active:scale-95 flex items-center gap-2 ${billing === 'annual' ? 'bg-[#F26A2E] text-[#0D0D0F]' : ''}`}
                style={billing !== 'annual' ? { color: 'var(--text-muted)' } : {}}
              >
                Annuel
              </button>
            </div>
            {billing === 'annual' && (
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                <span className="text-[#F2B441] font-semibold">(Réduction annuelle - 2 mois offerts)</span>
              </p>
            )}
          </div>
        </section>

        {/* Plan cards */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {plans.map(plan => {
              const isCurrent = isCurrentPlan(plan.id);
              const isUpgrade = plan.id === 'gm' && currentPlan === 'player';
              const isDowngrade = plan.id === 'player' && currentPlan === 'gm';
              return (
                <div
                  key={plan.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 border"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: isCurrent ? '#F2B441' : 'var(--border-copper)',
                    borderWidth: isCurrent ? '2px' : '1px',
                  }}
                >
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-xl flex items-center justify-center text-[#0D0D0F]">
                        {plan.icon}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>Abonnement</div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{plan.name}</span>
                          {isCurrent && (
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-[#F2B441] text-[#0D0D0F] rounded-full">Actuel</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{plan.description}</p>

                    <div className="mb-1">
                      {billing === 'monthly' ? (
                        <div className="flex items-end gap-1.5">
                          <span className="text-4xl font-bold text-[#F2B441]">{formatPrice(plan.monthlyPrice)} €</span>
                          <span className="text-sm pb-1" style={{ color: 'var(--text-muted)' }}>/mois</span>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-end gap-1.5">
                            <span className="text-4xl font-bold text-[#F2B441]">{formatPrice(plan.annualPrice)} €</span>
                            <span className="text-sm pb-1 whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>/an</span>
                            <span className="text-sm pb-1 line-through whitespace-nowrap" style={{ color: 'var(--text-muted)', opacity: 0.55 }}>au lieu de {formatPrice(plan.monthlyPrice * 12)} €</span>
                          </div>
                          <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                            soit <span className="text-[#F26A2E] font-semibold">{formatMonthlyPrice(getAnnualMonthlyEquivalent(plan.annualPrice))} €/mois</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => !isCurrent && openModal(plan)}
                      disabled={isCurrent}
                      className={`block w-full py-3 text-center rounded-lg font-bold text-sm transition-all mb-7 border ${
                        isCurrent
                          ? 'cursor-default'
                          : isDowngrade
                          ? 'hover:bg-[#F26A2E]/10 active:scale-95'
                          : 'bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] hover:shadow-lg hover:shadow-[#F26A2E]/20 hover:-translate-y-0.5 active:scale-95'
                      }`}
                      style={
                        isCurrent
                          ? { backgroundColor: 'var(--bg-surface-alt)', color: 'var(--text-muted)', borderColor: 'transparent' }
                          : isDowngrade
                          ? { borderColor: 'var(--border-copper-hover)', color: 'var(--text-primary)' }
                          : { border: 'none' }
                      }
                    >
                      {isCurrent ? 'Votre abonnement actuel' : isUpgrade ? 'Passer à l’offre MJ' : isDowngrade ? 'Passer à l’offre PJ' : `Offre ${plan.name}, gratuit 7 jours*`}
                    </button>

                    <div className="space-y-3">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                          {f.included ? (
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 opacity-30 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                          )}
                          <span className={`text-sm ${f.included ? '' : 'opacity-50'}`} style={{ color: f.included ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                            {f.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="max-w-3xl mx-auto mt-4 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            *Uniquement pour les nouveaux abonnés.
          </p>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 py-10 border-t" style={{ borderColor: 'var(--border-copper)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>Questions fréquentes</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#F26A2E]/5"
                  >
                    <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{faq.q}</span>
                    {openFaq === i
                      ? <ChevronDown className="w-4 h-4 flex-shrink-0 text-[#F26A2E]" />
                      : <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 border-t" style={{ borderColor: 'var(--border-copper)' }}>
                      <p className="text-sm leading-relaxed pt-4" style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Payment modal */}
      {selectedPlan && step !== 'idle' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={step === 'form' ? closeModal : undefined} />
          <div className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-copper)' }}>

            {step === 'form' && (
              <>
                <div className="px-7 pt-7 pb-5 border-b" style={{ borderColor: 'var(--border-copper)' }}>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-lg flex items-center justify-center text-[#0D0D0F]">
                      {selectedPlan.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide font-semibold" style={{ color: 'var(--text-muted)' }}>
                        {subscriptionAction === 'change' ? 'Changement d’abonnement' : `Abonnement ${selectedPlan.name}`}
                      </div>
                      <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {subscriptionAction === 'change' ? `Passer à l’offre ${selectedPlan.name}` : price}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                    {subscriptionAction === 'change'
                      ? `Votre abonnement actuel ${getPlanLabel(previousPlan) ?? ''} sera remplacé par l’offre ${selectedPlan.name}.`
                      : "7 jours d'essai gratuit — paiement à la fin de votre période d'essai"}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
                  {subscriptionAction === 'change' ? (
                    <div className="rounded-xl border p-4 text-sm space-y-3" style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)', color: 'var(--text-muted)' }}>
                      <div className="flex items-center justify-between gap-4">
                        <span>Abonnement actuel</span>
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Offre {getPlanLabel(previousPlan)}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Nouvel abonnement</span>
                        <span className="font-semibold text-[#F2B441]">Offre {selectedPlan.name}</span>
                      </div>
                      <div className="pt-3 border-t text-xs leading-relaxed" style={{ borderColor: 'var(--border-copper)' }}>
                        Cette action simule le changement d’abonnement dans la maquette. La période d’essai gratuit est réservée aux nouveaux abonnés.
                      </div>
                    </div>
                  ) : (
                    <>
                      {[
                        { label: 'Titulaire de la carte', type: 'text', value: cardName, onChange: (v: string) => setCardName(v), placeholder: 'Jean Dupont', icon: null, max: undefined },
                      ].map(field => (
                        <div key={field.label}>
                          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{field.label}</label>
                          <input
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={e => field.onChange(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#F26A2E] transition-colors"
                            style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
                          />
                        </div>
                      ))}

                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Numéro de carte</label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-2.5 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                          <input
                            type="text"
                            required
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={e => setCardNumber(formatCardNumber(e.target.value))}
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#F26A2E] transition-colors"
                            style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
                            maxLength={19}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>Expiration</label>
                          <input
                            type="text"
                            required
                            placeholder="MM/AA"
                            value={cardExpiry}
                            onChange={e => setCardExpiry(formatExpiry(e.target.value))}
                            className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#F26A2E] transition-colors"
                            style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>CVC</label>
                          <input
                            type="text"
                            required
                            placeholder="123"
                            value={cardCvc}
                            onChange={e => setCardCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                            className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:border-[#F26A2E] transition-colors"
                            style={{ backgroundColor: 'var(--bg-base)', borderColor: 'var(--border-copper)', color: 'var(--text-primary)' }}
                            maxLength={3}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex items-center gap-2 text-xs pt-1" style={{ color: 'var(--text-muted)' }}>
                    <Lock className="w-3 h-3 flex-shrink-0" />
                    {subscriptionAction === 'change'
                      ? 'Modification d’abonnement simulée — aucune vraie transaction effectuée'
                      : 'Paiement simulé — aucune vraie transaction effectuée'}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 py-3 rounded-lg font-semibold text-sm border transition-all active:scale-95"
                      style={{ borderColor: 'var(--border-copper)', color: 'var(--text-muted)' }}
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95"
                    >
                      {subscriptionAction === 'change' ? 'Confirmer le changement' : 'Démarrer mon essai'}
                    </button>
                  </div>
                </form>
              </>
            )}

            {step === 'processing' && (
              <div className="px-7 py-14 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 border-4 border-[#F26A2E] border-t-transparent rounded-full animate-spin mb-6" />
                <p className="font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>Traitement en cours…</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {subscriptionAction === 'change' ? 'Mise à jour de votre abonnement' : `Activation de votre abonnement ${selectedPlan.name}`}
                </p>
              </div>
            )}

            {step === 'success' && (
              <div className="px-7 py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F26A2E] to-[#F2B441] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#0D0D0F]" />
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {subscriptionAction === 'change' ? 'Abonnement mis à jour !' : 'Abonnement activé !'}
                </h2>
                <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
                  {subscriptionAction === 'change' ? (
                    <>Votre abonnement passe maintenant à l’offre <span className="text-[#F2B441] font-semibold">{selectedPlan.name}</span>.</>
                  ) : (
                    <>Bienvenue en tant que <span className="text-[#F2B441] font-semibold">{selectedPlan.name}</span>. Votre essai gratuit de 7 jours commence maintenant.</>
                  )}
                </p>
                <button
                  onClick={() => { closeModal(); navigate('/home'); }}
                  className="px-8 py-3 bg-gradient-to-r from-[#F26A2E] to-[#F2B441] text-[#0D0D0F] rounded-lg font-bold hover:shadow-lg hover:shadow-[#F26A2E]/20 transition-all active:scale-95"
                >
                  {subscriptionAction === 'change' ? 'Retour à mon espace' : 'Accéder à mon espace'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
