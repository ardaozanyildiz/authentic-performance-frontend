//Ici il cest mieu de rester en anglais car les etiquettes de i18n sont en anglais
//comme le "resources", "translation" etc...
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        products: 'Produits',
        contact: 'Contact',
      },
      hero: {
        button: 'CONTACTEZ-NOUS',
        // J'ai vu que pour les slides faut cree une liste donc c'est sa que jai fait
        slides: [
          {
            image: '/images/slide-1.jpg',
            title: "L'excellence textile au service de votre industrie.",
            description:
              'Performance, protection et durabilite. Depuis 1996, nous concevons des solutions textiles sur mesure pour repondre aux exigences les plus strictes.',
          },
          {
            image: '/images/slide-2.jpg',
            title: 'Le savoir-faire textile quebecois depuis 1996.',
            description:
              "Une qualite inegalee et une ponctualite exemplaire. Nous transformons vos besoins en produits finis d'une precision chirurgicale.",
          },
          {
            image: '/images/slide-3.jpg',
            title: 'Votre partenaire de confiance en solutions textiles.',
            description:
              "Allier tradition et innovation pour des produits qui durent. Authentic Performance Productions : l'engagement de la qualite a chaque point de couture.",
          },
        ],
      },
      homeAbout: {
        title: "30 Ans d'Excellence et de Maitrise Textile au Quebec",
        text1:
          "Depuis trois decennies, Authentic Performance Productions transforme le textile avec une precision inegalee. Notre force reside dans l'alliance entre un savoir-faire artisanal rigoureux et une capacite de production moderne.",
        text2:
          "Nous batissons notre reputation sur la ponctualite absolue, la finesse technique et une integrite sans faille dans chaque point de couture. Votre succes est notre priorite; nous accompagnons chaque client avec devouement pour offrir le meilleur resultat possible.",
        button: 'CONTACTEZ-NOUS',
      },
      products: {
        title: 'Nos Produits',
        subtitle: 'Decouvrez notre gamme de produits textiles de haute qualite.',
        backButton: 'Retour aux produits',
        description: 'Description',
        features: 'Caracteristiques',
        addToCart: 'Ajouter au panier',
      },
      contact: {
        title: 'Contactez-nous',
        subtitle: 'Entrez en contact avec notre equipe.',
        name: 'Nom complet',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message',
        infoTitle: "Informations de l'entreprise",
        address: 'Adresse',
        phone: 'Telephone',
        hours: "Heures d'ouverture",
        hoursValue: 'Lundi - Vendredi: 7h00 - 16h00',
      },
      login: {
        title: 'Connexion',
        subtitle: 'Connectez-vous a votre compte.',
        email: 'Email',
        password: 'Mot de passe',
        button: 'Se connecter',
        noAccount: "Vous n'avez pas de compte ?",
        createAccount: 'Veuillez creer votre compte',
      },
      signup: {
        title: 'Inscription',
        subtitle: 'Creez votre compte rapidement.',
        fullName: 'Nom complet',
        email: 'Email',
        password: 'Mot de passe',
        button: "S'inscrire",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        contact: 'Contact',
      },
      hero: {
        button: 'CONTACT US',
        slides: [
          {
            image: '/images/slide-1.jpg',
            title: 'Textile excellence serving your industry.',
            description:
              'Performance, protection and durability. Since 1996, we have designed custom textile solutions to meet the most demanding standards.',
          },
          {
            image: '/images/slide-2.jpg',
            title: 'Quebec textile know-how since 1996.',
            description:
              'Unmatched quality and exemplary punctuality. We turn your needs into finished products with surgical precision.',
          },
          {
            image: '/images/slide-3.jpg',
            title: 'Your trusted partner in textile solutions.',
            description:
              'Combining tradition and innovation for products that last. Authentic Performance Productions: a commitment to quality in every stitch.',
          },
        ],
      },
      homeAbout: {
        title: '30 Years of Excellence and Textile Mastery in Quebec',
        text1:
          'For three decades, Authentic Performance Productions has been transforming textiles with unmatched precision. Our strength lies in the alliance between rigorous craftsmanship and modern production capacity.',
        text2:
          'We build our reputation on absolute punctuality, technical finesse, and flawless integrity in every stitch. Your success is our priority; we support every client with dedication to provide the best possible results.',
        button: 'CONTACT US',
      },
      products: {
        title: 'Our Products',
        subtitle: 'Discover our range of high-quality textile products.',
        backButton: 'Back to products',
        description: 'Description',
        features: 'Features',
        addToCart: 'Add to cart',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our team.',
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
      },
      login: {
        title: 'Login',
        subtitle: 'Sign in to your account.',
        email: 'Email',
        password: 'Password',
        button: 'Sign in',
        noAccount: "Don't have an account?",
        createAccount: 'Create your account',
      },
      signup: {
        title: 'Sign Up',
        subtitle: 'Create your account quickly.',
        fullName: 'Full Name',
        email: 'Email',
        password: 'Password',
        button: 'Sign up',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;