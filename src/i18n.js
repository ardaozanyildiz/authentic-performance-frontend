import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        products: 'Produits',
        contact: 'Contact',
        rendezVous: 'Rendez-vous',
      },
      hero: {
        title: "Le savoir-faire textile québécois depuis 1996.",
        subtitle: "Une qualité inégalée et une ponctualité exemplaire. Nous transformons vos besoins en produits finis d'une précision chirurgicale.",
        button: 'CONTACTEZ-NOUS',
      },
      expertise: {
        title: "NOTRE SAVOIR-FAIRE",
        coutureTitle: "Couture de Précision",
        coutureDesc: "Expertise en production sur mesure et de petite série. Un soin minutieux est apporté à chaque point de couture pour garantir la durabilité.",
        presseTitle: "Presse et Finition",
        presseDesc: "Un repassage industriel et professionnel pour une finition impeccable. Chaque vêtement est traité pour retrouver sa tenue parfaite.",
        emballageTitle: "Emballage et Logistique",
        emballageDesc: "Des solutions d'emballage élégantes et une préparation rigoureuse pour l'expédition. Vos produits sont prêts à livrés à vos clients.",
      },
      homeAbout: {
        title: "30 Ans d'Excellence et de Maîtrise Textile au Québec",
        text1: "Depuis trois décennies, Authentic Performance Production transforme le textile avec une précision inégalée. Notre force réside dans l'alliance entre un savoir-faire artisanal rigoureux et une capacité de production moderne.",
        text2: "Nous bâtissons notre réputation sur la ponctualité absolue, la finesse technique et une intégrité sans faille dans chaque point de couture. Votre succès est notre priorité ; nous accompagnons chaque client avec dévouement.",
        button: 'PRENDRE UN RENDEZ-VOUS',
      },
      // --- NOUVELLES TRADUCTIONS PRODUITS (FR) ---
      products: {
        mainTitle: "Nos Capacités de Production",
        mainSubtitle: "Découvrez notre gamme d'expertise textile. Nous fabriquons vos produits en petite et grande série avec une précision chirurgicale.",
        catClothing: "Vêtements & Mode",
        catLinens: "Literie & Maison",
        catWorkwear: "Uniformes & Vêtement de travail",
        ctaText: "Vous avez un projet de production ? Veuillez nous contacter ou prendre un rendez-vous pour en discuter avec nos experts.",
        btnContact: "NOUS CONTACTER",
        btnMeeting: "PRENDRE RENDEZ-VOUS"
      },
      // --- NOUVELLES TRADUCTIONS ITEMS (FR) ---
      items: {
        tshirt: "T-shirt",
        short: "Short",
        skirt: "Jupe",
        dress: "Robe",
        pants: "Pantalon",
        longSleeve: "Chandail manches longues",
        hoodie: "Coton ouaté (Hoodie)",
        camisole: "Camisole",
        mattressCover: "Couvre-matelas",
        bedSheet: "Drap de lit",
        towel: "Serviette",
        apronKitchen: "Tablier de cuisine",
        apronMedical: "Tablier médical (Médecin / Infirmier)"
      },
      services: {
        custom: "Couture sur mesure",
        alterations: "Retouches",
        consultation: "Consultation Design"
      },
      meeting: {
        title: 'Prendre un rendez-vous',
        subtitle: 'Vous avez un projet de production sérieux ? Planifiez une rencontre à notre atelier pour discuter avec nos experts. Nos consultations se font uniquement les vendredis entre 12h00 et 17h00.',
        dateLabel: 'Date sélectionnée :',
        timeLabel: 'Heure du rendez-vous',
        fullDay: 'Désolé, cette journée est complète !',
        name: 'Nom complet',
        email: 'Email',
        service: 'Type de service',
        confirm: 'Confirmer la réservation',
        statusWait: 'Réservation en cours...',
        statusSuccess: 'Félicitations ! Votre rendez-vous est confirmé.',
        selectTime: 'Veuillez sélectionner une heure.'
      },
      contact: {
        title: 'Contactez-nous',
        subtitle: "Vous avez des questions générales ou besoin de plus d'informations ? Écrivez-nous et notre équipe vous répondra rapidement.",
        helpText: 'Pour toute question précise, n’hésitez pas à nous contacter.',
        name: 'Nom complet',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message',
        infoTitle: "Informations de l'entreprise",
        address: 'Adresse',
        phone: 'Téléphone',
        hours: "Heures d'ouverture",
        hoursValue: 'Lundi - Vendredi: 7h00 - 16h00',
        meetingCTA: 'Ou',
        meetingLink: 'prenez un rendez-vous avec nous',
      },
      login: {
        title: 'Connexion',
        subtitle: 'Accédez à votre espace client.',
        email: 'Email',
        password: 'Mot de passe',
        button: 'Se connecter',
        noAccount: "Vous n'avez pas de compte ?",
        createAccount: 'Créer un compte'
      },
      signup: {
        title: 'Créer un compte',
        subtitle: 'Rejoignez-nous pour gérer vos commandes.',
        fullName: 'Nom complet',
        email: 'Email',
        password: 'Mot de passe',
        button: "S'inscrire"
      }
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        contact: 'Contact',
        rendezVous: 'Appointment',
      },
      hero: {
        title: "Quebec textile know-how since 1996.",
        subtitle: "Unmatched quality and exemplary punctuality. We turn your needs into finished products with surgical precision.",
        button: 'CONTACT US',
      },
      expertise: {
        title: "OUR EXPERTISE",
        coutureTitle: "Precision Sewing",
        coutureDesc: "Expertise in custom and small series production. Meticulous care is given to every stitch to guarantee durability.",
        presseTitle: "Pressing & Finishing",
        presseDesc: "Professional industrial pressing for a flawless finish. Each garment is treated to regain its perfect shape.",
        emballageTitle: "Packaging & Logistics",
        emballageDesc: "Elegant packaging solutions and rigorous preparation for shipping. Your products are ready for your customers.",
      },
      homeAbout: {
        title: "30 Years of Excellence and Textile Mastery in Quebec",
        text1: "For three decades, Authentic Performance Production has been transforming textiles with unmatched precision. Our strength lies in the alliance between rigorous craftsmanship and modern production capacity.",
        text2: "We build our reputation on absolute punctuality, technical finesse, and flawless integrity in every stitch. Your success is our priority; we support every client with dedication.",
        button: 'BOOK AN APPOINTMENT',
      },
      // --- NOUVELLES TRADUCTIONS PRODUITS (EN) ---
      products: {
        mainTitle: "Our Production Capabilities",
        mainSubtitle: "Discover our range of textile expertise. We manufacture your products in small and large series with surgical precision.",
        catClothing: "Apparel & Fashion",
        catLinens: "Linens & Home",
        catWorkwear: "Uniforms & Workwear",
        ctaText: "Do you have a production project? Please contact us or book an appointment to discuss it with our experts.",
        btnContact: "CONTACT US",
        btnMeeting: "BOOK AN APPOINTMENT"
      },
      // --- NOUVELLES TRADUCTIONS ITEMS (EN) ---
      items: {
        tshirt: "T-shirt",
        short: "Shorts",
        skirt: "Skirt",
        dress: "Dress",
        pants: "Pants",
        longSleeve: "Long sleeve shirt",
        hoodie: "Hoodie",
        camisole: "Camisole",
        mattressCover: "Mattress cover",
        bedSheet: "Bed sheet",
        towel: "Towel",
        apronKitchen: "Kitchen apron",
        apronMedical: "Medical apron (Doctor / Nurse)"
      },
      services: {
        custom: "Custom Sewing",
        alterations: "Alterations",
        consultation: "Design Consultation"
      },
      meeting: {
        title: 'Book an appointment',
        subtitle: 'Ready to start a serious production project? Schedule a workshop meeting with our experts. Consultations are held on Fridays between 12:00 PM and 5:00 PM.',
        dateLabel: 'Selected date:',
        timeLabel: 'Appointment time',
        fullDay: 'Sorry, this day is fully booked!',
        name: 'Full Name',
        email: 'Email',
        service: 'Service Type',
        confirm: 'Confirm Booking',
        statusWait: 'Booking in progress...',
        statusSuccess: 'Congratulations! Your appointment is confirmed.',
        selectTime: 'Please select a time.'
      },
      contact: {
        title: 'Contact Us',
        subtitle: "Have general questions or need more information? Write to us and our team will get back to you promptly.",
        helpText: 'For any specific questions, please do not hesitate to contact us.',
        name: 'Full Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        infoTitle: 'Company Information',
        address: 'Address',
        phone: 'Phone',
        hours: 'Business Hours',
        hoursValue: 'Monday - Friday: 7:00 AM - 4:00 PM',
        meetingCTA: 'Or',
        meetingLink: 'book an appointment with us',
      },
      login: {
        title: 'Login',
        subtitle: 'Access your customer account.',
        email: 'Email',
        password: 'Password',
        button: 'Login',
        noAccount: "Don't have an account?",
        createAccount: 'Create an account'
      },
      signup: {
        title: 'Create an Account',
        subtitle: 'Join us to manage your orders.',
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        button: 'Sign Up'
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
});

export default i18n;