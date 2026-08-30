export type Locale = "en" | "fr";

export const translations = {
  en: {
    navbar: {
      brandTag: "Freelance",
      cohortBadge: "Cohort 01 Pre-Launch",
      navReality: "The Reality",
      navHowItWorks: "How It Works",
      navPerks: "Founding Perks",
      navFaq: "FAQ",
      ctaJoin: "Join Waitlist",
      cohortActive: "Cohort 01 Pre-Launch Active",
      claimSpot: "Claim Founding Spot",
    },
    hero: {
      badge: "Escrow Infrastructure v2.1 • Tunisia",
      h1Line1: "Get paid, guaranteed.",
      h1Line2: "Never chase an unpaid invoice again.",
      subheadline:
        "Asteria Freelance is built specifically for Tunisian talent. Every contract is secured by milestone escrow, KYC-verified identities, and direct local payouts in TND via Flouci, Konnect, and local banks.",
      milestoneEscrow: "milestone escrow",
      kycIdentities: "KYC-verified identities",
      directPayouts: "direct local payouts in TND",
      ctaPrimary: "Claim Founding Freelancer Spot",
      ctaSecondary: "See how it works",
      foundingIncentive:
        "Cohort 01 members receive a discounted platform fee & Founding Member badge.",
      discountedFee: "discounted platform fee",
      terminalVaultActive: "ESCROW VAULT ACTIVE",
      tndNative: "TND NATIVE",
      milestone1Title: "Milestone 1: Brand & UI Prototype",
      milestone1Approved: "Delivery Approved",
      milestone1Released: "Released to Flouci Wallet",
      milestone2Title: "Milestone 2: Frontend & API Delivery",
      milestone2Locked: "Funds Secured in Vault",
      milestone2Until: "Locked Until You Deliver",
      verifiedClient: "Verified Client: TechLab S.A.R.L",
      kycPass: "KYC PASS",
      taxId: "Tax ID: TN-1849204 // Biometrics Validated",
      localSettlement: "Local Settlement",
    },
    stats: [
      {
        value: "100%",
        label: "Deposit Guaranteed",
        description: "Funds locked into escrow before you start work",
      },
      {
        value: "0 TND",
        label: "FX & Conversion Fees",
        description: "Direct payouts via Flouci, Konnect & local bank accounts",
      },
      {
        value: "12%",
        label: "Transparent Platform Fee",
        description: "Discounted launch rate for Founding Cohort members",
      },
      {
        value: "Dual-KYC",
        label: "Verified Counterparts",
        description: "Zero burner accounts or anonymous non-payers",
      },
    ],
    problem: {
      badge: "The Reality of Freelancing in Tunisia",
      titlePre: "Freelancing shouldn't feel like an ",
      titleHighlight: "unprotected gamble",
      subtitle:
        "Thousands of talented Tunisian designers, developers, writers, and marketers lose time and income every month to broken informal arrangements.",
      cards: [
        {
          code: "INCIDENT_01 // CHAT_DEAL",
          tag: "Ghosting & Non-Payment",
          title: "Deliver the files, get left on 'Seen'",
          description:
            "Informal WhatsApp and Facebook deals leave you completely exposed. You deliver weeks of hard work, only for clients to renegotiate, delay indefinitely, or ghost entirely with zero accountability.",
          badQuote: "\"I sent the source code, but they blocked me on WhatsApp.\"",
          meta: "RISK: 100% UNPROTECTED",
        },
        {
          code: "INCIDENT_02 // NO_CONTRACT",
          tag: "Zero Legal Recourse",
          title: "Gentlemen's agreements without protection",
          description:
            "Without milestone escrow or verified identities, you are forced to gamble your time. If a dispute happens, there is no formal intermediary, no arbitration, and no way to recover your earnings.",
          badQuote: "\"No contract, no deposit, no way to enforce payment.\"",
          meta: "RECOVERY RATE: 0%",
        },
        {
          code: "INCIDENT_03 // FX_LOCKDOWN",
          tag: "Payment Friction & FX",
          title: "Foreign platforms, blocked Tunisian cards",
          description:
            "International platforms take 20%+ in fees, restrict Tunisian bank accounts, or require black-market currency gymnastics. Getting paid in your own country shouldn't require complex workarounds.",
          badQuote: "\"Struggling to withdraw USD earnings into local Tunisian Dinars.\"",
          meta: "FEE LEAKAGE: 20% - 35%",
        },
      ],
    },
    solution: {
      badge: "The Asteria Protocol • Preview",
      titlePre: "How Asteria Protects Your ",
      titleHighlight: "Work & Take-Home Income",
      subtitle:
        "A preview of the mechanics designed to replace informal anxiety with bank-grade payment security and local convenience.",
      steps: [
        {
          stepNumber: "01",
          stepTag: "STAGE // 01",
          title: "Milestone Escrow Deposit",
          description:
            "Before you begin any milestone, the client deposits the agreed payment into Asteria's protected escrow vault. Multi-milestone projects allow you to work in safe, structured increments.",
          badge: "100% Guaranteed Deposit",
          telemetry: "STATUS: FUNDS_LOCKED_UPFRONT",
        },
        {
          stepNumber: "02",
          stepTag: "STAGE // 02",
          title: "KYC-Verified Counterparts",
          description:
            "Real identity verification on both sides eliminates fake profiles, burner clients, and serial non-payers. You know exactly who you're contracting with from day one.",
          badge: "Zero Anonymous Burners",
          telemetry: "AUTH: NATIONAL_TAX_ID_VALIDATED",
        },
        {
          stepNumber: "03",
          stepTag: "STAGE // 03",
          title: "Native TND Payouts (Flouci & Konnect)",
          description:
            "When deliverables are approved, funds release instantly to your account. Withdraw directly in Tunisian Dinar (TND) to your Flouci wallet, Konnect card, or local bank account.",
          badge: "Zero FX Conversion Friction",
          telemetry: "SETTLEMENT: INSTANT_WALLET_DISPATCH",
        },
        {
          stepNumber: "04",
          stepTag: "STAGE // 04",
          title: "Smart Proposal & Scope Assistance",
          description:
            "Need help phrasing a tight project scope or polishing a client pitch? Integrated AI writing assistance helps you draft clear proposals in seconds without tedious back-and-forth.",
          badge: "Intelligent Convenience",
          telemetry: "ASSIST: DRAFT_ACCELERATOR",
        },
      ],
      ledgerBadge: "TRANSPARENT LEDGER",
      ledgerSubtitle: "• NO HIDDEN DEDUCTIONS",
      ledgerTitle: "Honest, Fair Fees — 88% Net Freelancer Take-Home",
      ledgerDesc:
        "A flat 12% standard platform fee covers full escrow bank vaulting, dispute arbitration, and payment gateway routing. You keep 88% of every dinar.",
      cohortSpecial: "Founding Freelancers Cohort:",
      launchRateBadge: "Discounted Launch Rate",
    },
    foundingCohort: {
      badge: "Cohort 01 • Genesis Talent",
      titlePre: "Don't just join at launch. ",
      titleHighlight: "Help build Tunisia's freelance future.",
      description:
        "We are intentionally curating our first cohort of skilled Tunisian freelancers before releasing the platform to clients. Early sign-ups receive genuine platform incentives and early access.",
      scarcityTitle: "Cohort 01 Allocation",
      scarcityText:
        "Founding slots are prioritized for verified Tunisian talent across Development, Design, Content, and Marketing.",
      ctaButton: "Reserve Your Founding Slot",
      perks: [
        {
          code: "PERK_01",
          title: "Discounted Platform Fee",
          description:
            "Founding Freelancers in Cohort 01 lock in a special reduced platform fee throughout our launch phase, keeping more of your hard-earned dinars.",
        },
        {
          code: "PERK_02",
          title: "Founding Member Profile Badge",
          description:
            "Stand out to top clients with a permanent 'Founding Freelancer' badge displayed on your public profile and proposal bids.",
        },
        {
          code: "PERK_03",
          title: "Priority Project Visibility",
          description:
            "When verified clients post jobs, Founding Freelancer proposals receive elevated search placement and early notification pings.",
        },
        {
          code: "PERK_04",
          title: "Direct Influence on Features",
          description:
            "Join a dedicated private feedback channel with our core engineering team to request tools, payout features, and workflow improvements.",
        },
      ],
    },
    waitlist: {
      badge: "Cohort 01 Waitlist Form",
      title: "Join the Founding Freelancers",
      subtitle:
        "Reserve your early onboarding access. No spam, no obligation—just guaranteed payment protection and founding fee benefits when we open.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g. Yassine Ben Salem",
      emailLabel: "Email Address",
      emailPlaceholder: "yassine@example.tn",
      skillLabel: "Primary Skill / Discipline",
      skillPlaceholder: "Select your primary domain",
      referralLabel: "Where did you hear about us?",
      referralOptional: "(optional)",
      referralPlaceholder: "Select a channel",
      submitButton: "Claim Founding Freelancer Spot",
      submittingText: "Securing Your Spot...",
      reassurance:
        "🔒 Zero spam. We only contact you with pre-launch updates and your personal onboarding invite.",
      duplicateTitle: "You are already on the list!",
      duplicateMsg:
        "We have your email recorded for Cohort 01. You will be notified as soon as initial invitations go out.",
      errorGeneric: "Failed to submit. Please try again.",
      errorNetwork: "A network error occurred. Please check your connection.",
      validationName: "Please enter your full name.",
      validationEmail: "Please provide a valid email address.",
      validationSkill: "Please select your primary skill category.",
      successBadge: "Cohort 01 Verified Reservation",
      successTitle: "Welcome aboard",
      successMsgPre: "You have secured your priority spot in the ",
      successMsgCohort: "Founding Freelancer Cohort",
      successMsgPost:
        ". We will send an onboarding invitation code directly to ",
      successMsgEnd: " when launch access begins.",
      passTitle: "Asteria Freelance Pass",
      passGenesis: "GENESIS COHORT 01",
      passFoundingTalent: "FOUNDING TALENT",
      passMemberName: "MEMBER NAME",
      passDiscipline: "DISCIPLINE",
      passStatus: "STATUS: CONFIRMED",
      passFeeBenefit: "DISCOUNTED PLATFORM FEE",
      shareHeading:
        "Know another great Tunisian freelancer? Invite them to Cohort 01:",
      shareWhatsApp: "Share on WhatsApp",
      shareLinkedIn: "Share on LinkedIn",
      shareCopy: "Copy Page Link",
      shareCopied: "Link Copied!",
      shareSocialText:
        "Tunisia's first freelance marketplace with milestone escrow & Flouci/Konnect payouts is launching soon. Join the founding freelancer cohort with me:",
    },
    faq: {
      badge: "Knowledge Base // FAQ",
      title: "Frequently Asked Questions",
      subtitle:
        "Everything you need to know about the Asteria Freelance pre-launch and founding cohort.",
      items: [
        {
          question: "How does milestone escrow work on Asteria?",
          answer:
            "When a client accepts your proposal or orders a gig, they must deposit the milestone payment into Asteria's protected escrow account before you start working. Once you submit the deliverable and the client approves it, the funds are released immediately to your Asteria balance for local withdrawal. If a client goes silent after delivery, our auto-release timer protects you.",
        },
        {
          question: "How do payouts work in Tunisia (Flouci, Konnect, Bank)?",
          answer:
            "Asteria supports native payouts in Tunisian Dinar (TND). You can withdraw your earnings directly to your Flouci mobile wallet, Konnect payment card, or standard Tunisian bank account (RIB transfer) without costly foreign exchange loss or blocked international cards.",
        },
        {
          question: "What is the Founding Freelancer Cohort?",
          answer:
            "Cohort 01 is our exclusive early-access program for the first wave of vetted Tunisian talent. Members receive lower platform fees during the launch phase, a permanent 'Founding Freelancer' verified badge on their public profile, elevated proposal placement, and direct access to our product team.",
        },
        {
          question: "How much does Asteria cost to use?",
          answer:
            "Signing up and submitting proposals is completely free. We charge a simple, transparent standard platform fee of 12% only when you successfully complete a paid milestone (giving you an 88% net take-home). Founding cohort members receive an even lower discounted rate during launch.",
        },
        {
          question: "When is the official platform launching?",
          answer:
            "We are currently in active pre-launch development. Founding Freelancers will receive private invitation codes for early onboarding and profile setup prior to the public client launch. Joining the waitlist secures your early invite.",
        },
        {
          question: "Can international clients hire me on Asteria?",
          answer:
            "Yes! While Asteria is founded in Tunisia with native TND rails, international clients can fund contracts using international credit/debit cards (via Stripe integration). You receive the equivalent payout settled cleanly in TND without currency conversion hassle.",
        },
      ],
    },
    footer: {
      tagline:
        "Tunisia's dedicated freelance marketplace designed to eliminate non-payment and informal risk through milestone escrow, KYC verification, and local TND payouts.",
      tunisiaFirst: "Tunisia First • Expanding to MENA Post-Launch",
      navHeader: "Navigation",
      contactHeader: "Contact & Inquiries",
      contactDesc:
        "Have questions about the founding cohort or platform partnerships?",
      rights: "All rights reserved. Pre-launch development.",
      backToTop: "Back to top",
    },
    categories: [
      "Web & Software Development",
      "UI/UX & Graphic Design",
      "Content Writing & Copywriting",
      "Digital Marketing & SEO",
      "Video Editing & Animation",
      "Translation & Localization",
      "Virtual Assistance & Admin",
      "Other Professional Services",
    ],
    referrals: [
      "LinkedIn",
      "Facebook / Freelance Group",
      "Instagram",
      "Friend / Colleague Recommendation",
      "Google Search",
      "Other",
    ],
  },
  fr: {
    navbar: {
      brandTag: "Freelance",
      cohortBadge: "Cohorte 01 Pré-Lancement",
      navReality: "La Réalité",
      navHowItWorks: "Comment Ça Marche",
      navPerks: "Avantages Fondateurs",
      navFaq: "FAQ",
      ctaJoin: "Rejoindre la Liste",
      cohortActive: "Cohorte 01 Pré-Lancement Ouverte",
      claimSpot: "Réserver Ma Place",
    },
    hero: {
      badge: "Infrastructure Séquestre v2.1 • Tunisie",
      h1Line1: "Soyez payé, garanti.",
      h1Line2: "Ne courez plus jamais après un paiement.",
      subheadline:
        "Asteria Freelance est conçu spécialement pour les talents tunisiens. Chaque contrat est protégé par un séquestre bloqué à l'avance, des identités vérifiées par KYC, et des paiements directs en TND via Flouci, Konnect et virement bancaire local.",
      milestoneEscrow: "séquestre par étape",
      kycIdentities: "identités vérifiées par KYC",
      directPayouts: "paiements directs en TND",
      ctaPrimary: "Rejoindre la Cohorte des Fondateurs",
      ctaSecondary: "Découvrir le fonctionnement",
      foundingIncentive:
        "Les membres de la Cohorte 01 bénéficient de frais réduits et d'un badge Membre Fondateur.",
      discountedFee: "frais réduits",
      terminalVaultActive: "SÉQUESTRE BANCAIRE ACTIF",
      tndNative: "TND NATIF",
      milestone1Title: "Étape 1 : Prototype UI & Charte",
      milestone1Approved: "Livrable Validé",
      milestone1Released: "Débloqué sur Portefeuille Flouci",
      milestone2Title: "Étape 2 : Frontend & API Connectée",
      milestone2Locked: "Fonds Sécurisés sous Séquestre",
      milestone2Until: "Bloqués Jusqu'à Livraison",
      verifiedClient: "Client Vérifié : TechLab S.A.R.L",
      kycPass: "KYC VALIDÉ",
      taxId: "Matricule Fiscal : TN-1849204 // Biométrie Validée",
      localSettlement: "Règlement Local",
    },
    stats: [
      {
        value: "100%",
        label: "Dépôt Garanti",
        description: "Fonds bloqués sous séquestre avant le début du travail",
      },
      {
        value: "0 TND",
        label: "Frais de Change / FX",
        description: "Paiements directs via Flouci, Konnect & comptes bancaires tunisiens",
      },
      {
        value: "12%",
        label: "Frais Transparents",
        description: "Tarif préférentiel de lancement pour la Cohorte Fondatrice",
      },
      {
        value: "Double KYC",
        label: "Profils Vérifiés",
        description: "Zéro faux compte ni mauvais payeur anonyme",
      },
    ],
    problem: {
      badge: "La Réalité du Freelance en Tunisie",
      titlePre: "Le freelance ne devrait pas être une ",
      titleHighlight: "loterie sans protection",
      subtitle:
        "Des milliers de designers, développeurs, rédacteurs et marketeurs tunisiens talentueux perdent du temps et des revenus chaque mois à cause d'accords informels précaires.",
      cards: [
        {
          code: "INCIDENT_01 // CHAT_DEAL",
          tag: "Ghosting & Impayés",
          title: "Fichiers livrés, message laissé en 'Vu'",
          description:
            "Les deals informels sur WhatsApp ou Facebook vous rendent vulnérable. Vous livrez des semaines d'efforts, pour que le client renégocie, retarde le virement ou disparaisse totalement sans aucun recours.",
          badQuote: "\"J'ai envoyé le code source, puis il m'a bloqué sur WhatsApp.\"",
          meta: "RISQUE : 100% SANS PROTECTION",
        },
        {
          code: "INCIDENT_02 // SANS_CONTRAT",
          tag: "Zéro Recours Légal",
          title: "Accords verbaux sans aucune garantie",
          description:
            "Sans séquestre financier ni identités vérifiées, vous pariez votre temps. En cas de litige, aucun intermédiaire n'existe pour arbitrer ou récupérer vos gains légitimes.",
          badQuote: "\"Aucun contrat, aucun acompte, impossible d'exiger le paiement.\"",
          meta: "TAUX DE RÉCUPÉRATION : 0%",
        },
        {
          code: "INCIDENT_03 // BLOCAGE_FX",
          tag: "Friction de Paiement & Devises",
          title: "Plateformes étrangères, cartes tunisiennes bloquées",
          description:
            "Les plateformes internationales prélèvent plus de 20% de commissions, refusent les comptes bancaires tunisiens ou obligent à passer par le marché noir. Être payé dans son pays ne devrait pas être un parcours du combattant.",
          badQuote: "\"Impossible de retirer mes gains en USD vers des Dinars Tunisiens sans complication.\"",
          meta: "PERTE DE COMMISSIONS : 20% - 35%",
        },
      ],
    },
    solution: {
      badge: "Le Protocole Asteria • Aperçu",
      titlePre: "Comment Asteria Protège Votre ",
      titleHighlight: "Travail & Vos Revenus Nets",
      subtitle:
        "Un aperçu des mécanismes conçus pour remplacer l'anxiété informelle par la sécurité bancaire et la simplicité locale.",
      steps: [
        {
          stepNumber: "01",
          stepTag: "ÉTAPE // 01",
          title: "Dépôt sous Séquestre par Étape",
          description:
            "Avant de débuter chaque jalon, le client dépose le montant convenu dans le coffre-fort sécurisé d'Asteria. Les projets multi-étapes vous permettent d'avancer en toute sérénité.",
          badge: "Dépôt 100% Garanti",
          telemetry: "STATUT : FONDS_BLOQUÉS_D'AVANCE",
        },
        {
          stepNumber: "02",
          stepTag: "ÉTAPE // 02",
          title: "Identités Vérifiées par KYC",
          description:
            "La vérification d'identité des deux côtés élimine les faux profils, les comptes temporaires et les mauvais payeurs récurrents. Vous savez exactement avec qui vous contractez.",
          badge: "Zéro Compte Anonyme",
          telemetry: "AUTH : MATRICULE_FISCAL_VALIDÉ",
        },
        {
          stepNumber: "03",
          stepTag: "ÉTAPE // 03",
          title: "Paiements Natifs en TND (Flouci & Konnect)",
          description:
            "Dès que le livrable est validé, les fonds sont immédiatement débloqués. Retirez directement en Dinar Tunisien (TND) sur votre portefeuille Flouci, carte Konnect ou compte bancaire local.",
          badge: "Zéro Friction de Conversion",
          telemetry: "RÈGLEMENT : DÉPÔT_INSTANTANÉ",
        },
        {
          stepNumber: "04",
          stepTag: "ÉTAPE // 04",
          title: "Assistance IA pour Devis & Périmètre",
          description:
            "Besoin d'aide pour rédiger un périmètre de projet clair ou peaufiner une proposition client ? L'assistant IA intégré vous aide à formuler des offres percutantes en quelques secondes.",
          badge: "Confort Intelligent",
          telemetry: "ASSIST : ACCÉLÉRATEUR_RÉDACTION",
        },
      ],
      ledgerBadge: "TRANSPARENCE TOTALE",
      ledgerSubtitle: "• AUCUN FRAIS CACHÉ",
      ledgerTitle: "Tarification Juste — 88% de Revenu Net pour le Freelance",
      ledgerDesc:
        "Une commission unique de 12% couvre l'ensemble du séquestre bancaire, l'arbitrage en cas de litige et les frais des passerelles de paiement. Vous conservez 88% de chaque dinar facturé.",
      cohortSpecial: "Cohorte des Freelances Fondateurs :",
      launchRateBadge: "Tarif Réduit de Lancement",
    },
    foundingCohort: {
      badge: "Cohorte 01 • Talents Pionniers",
      titlePre: "Ne soyez pas un simple utilisateur. ",
      titleHighlight: "Participez à bâtir le futur du freelance en Tunisie.",
      description:
        "Nous sélectionnons rigoureusement notre première cohorte de freelances tunisiens qualifiés avant d'ouvrir la plateforme aux entreprises. Les inscrits bénéficient d'avantages majeurs et d'un accès prioritaire.",
      scarcityTitle: "Capacité Limitée - Cohorte 01",
      scarcityText:
        "Les places fondatrices sont allouées en priorité aux talents vérifiés en Développement, Design, Rédaction, Vidéo et Marketing.",
      ctaButton: "Réserver Votre Place de Fondateur",
      perks: [
        {
          code: "AVANTAGE_01",
          title: "Frais de Plateforme Réduits",
          description:
            "Les Freelances Fondateurs de la Cohorte 01 bloquent une commission réduite pendant toute la phase de lancement, conservant ainsi plus de dinars.",
        },
        {
          code: "AVANTAGE_02",
          title: "Badge de Profil Fondateur",
          description:
            "Démarquez-vous auprès des meilleurs clients avec un badge officiel 'Freelance Fondateur' affiché de manière permanente sur votre profil et vos propositions.",
        },
        {
          code: "AVANTAGE_03",
          title: "Visibilité Prioritaire sur les Projets",
          description:
            "Dès qu'un client vérifié publie une offre, les propositions des Freelances Fondateurs apparaissent en tête des recherches avec notifications prioritaires.",
        },
        {
          code: "AVANTAGE_04",
          title: "Influence Directe sur les Fonctionnalités",
          description:
            "Participez à un canal d'échange privé avec notre équipe d'ingénieurs pour demander des outils, des options de retrait et des améliorations sur mesure.",
        },
      ],
    },
    waitlist: {
      badge: "Formulaire Cohorte 01",
      title: "Rejoindre les Freelances Fondateurs",
      subtitle:
        "Réservez votre accès prioritaire. Zéro spam, aucun engagement — juste la garantie d'être payé en toute sécurité et des avantages exclusifs dès l'ouverture.",
      fullNameLabel: "Nom & Prénom",
      fullNamePlaceholder: "ex. Yassine Ben Salem",
      emailLabel: "Adresse Email",
      emailPlaceholder: "yassine@exemple.tn",
      skillLabel: "Discipline / Compétence Principale",
      skillPlaceholder: "Sélectionnez votre domaine",
      referralLabel: "Comment avez-vous entendu parler de nous ?",
      referralOptional: "(optionnel)",
      referralPlaceholder: "Sélectionnez un canal",
      submitButton: "Réserver Ma Place de Fondateur",
      submittingText: "Sécurisation de votre place...",
      reassurance:
        "🔒 Zéro spam. Nous vous contacterons uniquement pour les actualités de pré-lancement et votre invitation personnelle.",
      duplicateTitle: "Vous êtes déjà inscrit !",
      duplicateMsg:
        "Votre email est déjà enregistré pour la Cohorte 01. Vous recevrez une notification dès l'envoi des premières invitations.",
      errorGeneric: "Échec de l'envoi. Veuillez réessayer.",
      errorNetwork: "Une erreur réseau est survenue. Vérifiez votre connexion.",
      validationName: "Veuillez saisir votre nom complet.",
      validationEmail: "Veuillez renseigner une adresse email valide.",
      validationSkill: "Veuillez sélectionner votre domaine principal.",
      successBadge: "Réservation Cohorte 01 Confirmée",
      successTitle: "Bienvenue à bord",
      successMsgPre: "Vous avez réservé avec succès votre place dans la ",
      successMsgCohort: "Cohorte des Freelances Fondateurs",
      successMsgPost:
        ". Nous enverrons votre code d'accès personnel directement à ",
      successMsgEnd: " lors de l'ouverture des accès.",
      passTitle: "Pass Asteria Freelance",
      passGenesis: "COHORTE 01 GENESIS",
      passFoundingTalent: "TALENT FONDATEUR",
      passMemberName: "MEMBRE",
      passDiscipline: "DISCIPLINE",
      passStatus: "STATUT : CONFIRMÉ",
      passFeeBenefit: "COMMISSION RÉDUITE",
      shareHeading:
        "Vous connaissez un autre excellent freelance tunisien ? Invitez-le dans la Cohorte 01 :",
      shareWhatsApp: "Partager sur WhatsApp",
      shareLinkedIn: "Partager sur LinkedIn",
      shareCopy: "Copier le Lien",
      shareCopied: "Lien Copié !",
      shareSocialText:
        "La 1ère plateforme de freelance en Tunisie avec séquestre garanti & paiements Flouci/Konnect arrive. Rejoins la cohorte fondatrice avec moi :",
    },
    faq: {
      badge: "Centre d'Aide // FAQ",
      title: "Questions Fréquentes",
      subtitle:
        "Tout ce que vous devez savoir sur le pré-lancement d'Asteria Freelance et la cohorte fondatrice.",
      items: [
        {
          question: "Comment fonctionne le séquestre par étape sur Asteria ?",
          answer:
            "Lorsqu'un client accepte votre proposition ou commande une prestation, il doit obligatoirement déposer les fonds sur le compte séquestre sécurisé d'Asteria avant que vous ne commenciez à travailler. Une fois le travail livré et validé par le client, les fonds sont instantanément libérés sur votre solde Asteria pour un retrait local. Si un client ne répond plus après livraison, notre mécanisme de déblocage automatique vous protège.",
        },
        {
          question: "Comment fonctionnent les retraits en Tunisie (Flouci, Konnect, Banque) ?",
          answer:
            "Asteria intègre nativement les retraits en Dinar Tunisien (TND). Vous pouvez transférer vos gains directement vers votre portefeuille Flouci, votre carte Konnect ou votre compte bancaire tunisien (virement RIB) sans frais de change abusifs ni blocage de cartes bancaires.",
        },
        {
          question: "Qu'est-ce que la Cohorte des Freelances Fondateurs ?",
          answer:
            "La Cohorte 01 est notre programme d'accès anticipé réservé aux premiers talents tunisiens qualifiés. Les membres bénéficient de commissions réduites lors du lancement, d'un badge officiel permanent 'Freelance Fondateur' sur leur profil, d'une visibilité accrue sur leurs offres et d'un contact direct avec nos équipes produit.",
        },
        {
          question: "Combien coûte l'utilisation d'Asteria ?",
          answer:
            "L'inscription et la soumission d'offres sont 100% gratuites. Nous appliquons une commission claire de 12% uniquement lorsqu'une mission est menée à bien et payée (vous recevez 88% net). Les membres de la cohorte fondatrice bénéficient d'un tarif encore plus bas pendant le lancement.",
        },
        {
          question: "Quand aura lieu le lancement officiel ?",
          answer:
            "Nous sommes actuellement en phase active de développement pré-lancement. Les Freelances Fondateurs recevront des invitations privées pour finaliser leur profil avant l'ouverture publique aux clients. L'inscription sur la liste d'attente garantit votre invitation prioritaire.",
        },
        {
          question: "Des clients internationaux peuvent-ils m'engager sur Asteria ?",
          answer:
            "Oui ! Même si Asteria est ancré en Tunisie avec des rails en TND, les clients internationaux peuvent financer leurs contrats par carte bancaire internationale (via notre intégration Stripe). Vous recevez le paiement équivalent en TND sans complications de change.",
        },
      ],
    },
    footer: {
      tagline:
        "La marketplace tunisienne dédiée aux freelances, conçue pour éliminer les impayés et le risque informel grâce au séquestre financier, au KYC et aux paiements locaux en TND.",
      tunisiaFirst: "Tunisie d'abord • Expansion vers la région MENA après lancement",
      navHeader: "Navigation",
      contactHeader: "Contact & Informations",
      contactDesc:
        "Des questions sur la cohorte fondatrice ou les partenariats ?",
      rights: "Tous droits réservés. Développement pré-lancement.",
      backToTop: "Haut de page",
    },
    categories: [
      "Développement Web & Logiciel",
      "Design UI/UX & Graphisme",
      "Rédaction de Contenu & Copywriting",
      "Marketing Digital & SEO",
      "Montage Vidéo & Animation",
      "Traduction & Localisation",
      "Assistance Virtuelle & Gestion",
      "Autres Services Professionnels",
    ],
    referrals: [
      "LinkedIn",
      "Facebook / Groupes Freelance",
      "Instagram",
      "Recommandation d'un ami / collègue",
      "Recherche Google",
      "Autre",
    ],
  },
};
