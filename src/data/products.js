const products = [
{
    id: 1,
    category: 'clothing',
    image: '/images/tshirt.jpg',
    fr: {
      name: 'T-Shirt',
      description: 'Assemblage de t-shirts selon vos spécifications et vos exigences. Expertise de couture sur tous vos types de tissus (coton, polyester, mélanges, etc.). Finitions impeccables au col et aux manches.',
      features: ['Confection sur vos tissus', 'Coutures renforcées', 'Pose de col côtelé', 'Respect strict de vos critères'],
    },
    en: {
      name: 'T-Shirt',
      description: 'Assembly of t-shirts according to your specifications and requirements. Sewing expertise on all your fabric types (cotton, polyester, blends, etc.). Flawless collar and sleeve finishes.',
      features: ['Sewing on your fabrics', 'Reinforced seams', 'Ribbed collar application', 'Strict compliance with your criteria'],
    },
  },
  {
    id: 2,
    category: 'clothing',
    image: '/images/hoodie2.jpg',
    fr: {
      name: 'Hoodie Coton Ouaté',
      description: 'Confection de hoodies à partir de vos tissus épais. Maîtrise de l\'assemblage du molleton, pose de capuches doublées et montage soigné des poches kangourou.',
      features: ['Manipulation de tissus épais', 'Montage de capuche', 'Pose de cordons et œillets', 'Finition des poignets côtelés'],
    },
    en: {
      name: 'Hoodie',
      description: 'Production of hoodies from your thick fabrics. Mastery of fleece assembly, lined hood attachment, and careful kangaroo pocket construction.',
      features: ['Handling of thick fabrics', 'Hood construction', 'Drawstring and eyelet placement', 'Ribbed cuff finishing'],
    },
  },
  {
    id: 3,
    category: 'clothing',
    image: '/images/robe.jpg.webp',
    fr: {
      name: 'Robe Été Légère',
      description: 'Couture de précision pour robes estivales. Manipulation experte de vos tissus fluides, délicats ou synthétiques pour un tombé parfait.',
      features: ['Couture sur tissus fluides', 'Ourlets délicats', 'Pose de fermetures invisibles', 'Ajustement précis'],
    },
    en: {
      name: 'Light Summer Dress',
      description: 'Precision sewing for summer dresses. Expert handling of your flowing, delicate, or synthetic fabrics for a perfect drape.',
      features: ['Sewing on flowing fabrics', 'Delicate hems', 'Invisible zipper placement', 'Precise tailoring'],
    },
  },
  {
    id: 4,
    category: 'clothing',
    image: '/images/pantalon.jpg',
    fr: {
      name: 'Pantalon Chino',
      description: 'Montage rigoureux de pantalons. Capacité à coudre vos sergés de coton, tissus stretch ou polyester. Finition professionnelle des poches et braguettes.',
      features: ['Couture robuste', 'Montage de braguette', 'Finition des poches', 'Pose de boutons et passants'],
    },
    en: {
      name: 'Chino Pants',
      description: 'Rigorous pants assembly. Ability to sew your cotton twill, stretch, or polyester fabrics. Professional finishing of pockets and flies.',
      features: ['Robust stitching', 'Fly construction', 'Pocket finishing', 'Button and loop placement'],
    },
  },
  {
    id: 5,
    category: 'linens',
    image: '/images/ensembleDrap.jpg.webp',
    fr: {
      name: 'Ensemble Draps de Lit',
      description: 'Production de literie à grande échelle. Coupe et ourlets de précision sur vos rouleaux de coton, percale, polycoton ou satin pour le secteur hôtelier.',
      features: ['Coupe sur mesure', 'Ourlets industriels', 'Pose d\'élastiques (drap-housse)', 'Haute capacité de production'],
    },
    en: {
      name: 'Bed Sheet Set',
      description: 'Large-scale bedding production. Precision cutting and hemming on your rolls of cotton, percale, polycotton, or sateen for the hospitality sector.',
      features: ['Custom cutting', 'Industrial hemming', 'Elastic placement (fitted sheets)', 'High production capacity'],
    },
  },
  {
    id: 6,
    category: 'linens',
    image: '/images/couvreOreiller.jpg.avif', 
    fr: {
      name: 'Taie d\'Oreiller Hôtelière',
      description: 'Confection en série de taies d\'oreiller. Ourlets de qualité supérieure et finition soignée adaptés à vos tissus à haute ou basse densité de fils.',
      features: ['Finition hôtelière', 'Ourlets renforcés', 'Rabat intérieur', 'Production rapide'],
    },
    en: {
      name: 'Hotel Pillowcase',
      description: 'Mass production of pillowcases. Premium hemming and neat finishing adapted to your high or low thread count fabrics.',
      features: ['Hotel-grade finishing', 'Reinforced hems', 'Envelope closure', 'Fast production turnaround'],
    },
  },
  {
    id: 7,
    category: 'linens',
    image: '/images/couvreMatelas.webp',
    fr: {
      name: 'Couvre-Matelas Protecteur',
      description: 'Assemblage de couvre-matelas pour le secteur de la santé. Expertise dans la manipulation et la couture de vos tissus imperméables et techniques.',
      features: ['Couture sur tissu imperméable', 'Maintien des propriétés barrières', 'Pose d\'élastiques robustes', 'Finition durable'],
    },
    en: {
      name: 'Protective Mattress Cover',
      description: 'Assembly of mattress covers for the healthcare sector. Expertise in handling and sewing your waterproof and technical fabrics.',
      features: ['Sewing on waterproof fabric', 'Maintaining barrier properties', 'Sturdy elastic attachment', 'Durable finishing'],
    },
  },
  {
    id: 8,
    category: 'workwear',
    image: '/images/tablierCuisine.jpg',
    fr: {
      name: 'Tablier Professionnel',
      description: 'Couture de tabliers résistants. Fixation solide des sangles et poches utilitaires sur vos toiles épaisses, denim, coton ou mélanges synthétiques.',
      features: ['Couture sur toiles épaisses', 'Points de renfort (bartacks)', 'Fixation de quincaillerie', 'Montage de poches'],
    },
    en: {
      name: 'Professional Apron',
      description: 'Sewing of durable aprons. Solid attachment of straps and utility pockets on your heavy canvas, denim, cotton, or synthetic blends.',
      features: ['Sewing on heavy canvas', 'Reinforcement stitching (bartacks)', 'Hardware attachment', 'Pocket assembly'],
    },
  },
  {
    id: 9,
    category: 'workwear',
    image: '/images/blouseMedical.jpg',
    fr: {
      name: 'Blouse Médicale (Scrub)',
      description: 'Confection de blouses pour le personnel soignant. Assemblage de précision sur vos tissus techniques (antibactériens, stretch, poly-coton).',
      features: ['Couture sur tissus techniques', 'Montage de col en V', 'Finition de poches plaquées', 'Résistance aux lavages industriels'],
    },
    en: {
      name: 'Medical Scrub Top',
      description: 'Production of scrub tops for healthcare staff. Precision assembly on your technical fabrics (antibacterial, stretch, poly-cotton).',
      features: ['Sewing on technical fabrics', 'V-neck construction', 'Patch pocket finishing', 'Industrial wash resistance'],
    },
  },
  {
    id: 10,
    category: 'workwear',
    image: '/images/manquant_polo_corporate.jpg', 
    fr: {
      name: 'Polo Corporate',
      description: 'Assemblage de polos corporatifs. Maîtrise des finitions complexes comme le montage du col, de la patte de boutonnage et des fentes latérales sur vos tissus.',
      features: ['Montage de col et patte', 'Réalisation de boutonnières', 'Couture sur maille piquée', 'Finitions haut de gamme'],
    },
    en: {
      name: 'Corporate Polo',
      description: 'Assembly of corporate polos. Mastery of complex finishes like collar construction, placket assembly, and side slits on your fabrics.',
      features: ['Collar and placket assembly', 'Buttonhole creation', 'Sewing on pique knit', 'High-end finishing'],
    },
  },
  {
    id: 11,
    category: 'clothing',
    image: '/images/short.jpg.webp',
    fr: {
      name: 'Short Sport Performance',
      description: 'Production de shorts sportifs. Utilisation de coutures spécialisées (surjet, coutures plates) adaptées à vos tissus techniques extensibles et légers.',
      features: ['Coutures extensibles', 'Pose de ceinture élastique', 'Ajustement de cordons', 'Manipulation de tissus légers'],
    },
    en: {
      name: 'Performance Sports Shorts',
      description: 'Production of sports shorts. Use of specialized stitching (overlock, flat seams) adapted to your stretchy and lightweight technical fabrics.',
      features: ['Stretch stitching', 'Elastic waistband installation', 'Drawstring adjustment', 'Handling of lightweight fabrics'],
    },
  },
  {
    id: 12,
    category: 'clothing',
    image: '/images/jupe.jpg',
    fr: {
      name: 'Jupe Professionnelle',
      description: 'Montage minutieux de jupes. Pose de fermetures éclair invisibles, pinces d\'ajustement et doublures sur vos tissus corporatifs.',
      features: ['Pose de fermeture invisible', 'Montage de doublure', 'Couture de pinces', 'Ourlets soignés'],
    },
    en: {
      name: 'Professional Skirt',
      description: 'Meticulous skirt assembly. Installation of invisible zippers, adjustment darts, and linings on your corporate fabrics.',
      features: ['Invisible zipper installation', 'Lining assembly', 'Dart sewing', 'Neat hems'],
    },
  },
  {
    id: 13,
    category: 'workwear',
    image: '/images/blouse-Disolation.jpg.webp',
    fr: {
      name: 'Blouse d\'Isolation',
      description: 'Fabrication de blouses d\'isolation hospitalières. Couture sécurisée et adaptée à vos textiles de protection (réutilisables ou tissés).',
      features: ['Couture de sécurité', 'Pose de poignets élastiques', 'Montage d\'attaches solides', 'Adapté aux lavages intensifs'],
    },
    en: {
      name: 'Isolation Gown',
      description: 'Manufacturing of hospital isolation gowns. Secure sewing adapted to your protective textiles (reusable or woven).',
      features: ['Safety stitching', 'Elastic cuff installation', 'Solid tie assembly', 'Adapted for intensive washing'],
    },
  },
  {
    id: 14,
    category: 'linens',
    image: '/images/bavoirAdulte.jpg',
    fr: {
      name: 'Bavoir Institutionnel',
      description: 'Confection de bavoirs pour CHSLD et hôpitaux. Couture de bordures robustes (biais) sur vos matériaux imperméables ou absorbants.',
      features: ['Pose de biais de finition', 'Couture sur matériaux enduits', 'Fixation d\'attaches (boutons pression/velcro)', 'Haute durabilité'],
    },
    en: {
      name: 'Institutional Bib',
      description: 'Production of bibs for long-term care facilities and hospitals. Sturdy binding (bias) sewing on your waterproof or absorbent materials.',
      features: ['Bias binding application', 'Sewing on coated materials', 'Fastener attachment (snaps/velcro)', 'High durability'],
    },
  },
  {
    id: 15,
    category: 'clothing',
    image: '/images/chemise.jpg',
    fr: {
      name: 'Chemise Sur Mesure',
      description: 'Couture de précision pour chemises classiques. Finition haut de gamme des cols, poignets et boutonnières sur les tissus fournis par vos soins.',
      features: ['Montage de col structuré', 'Réalisation de boutonnières fines', 'Couture rabattue', 'Détails de précision'],
    },
    en: {
      name: 'Tailored Shirt',
      description: 'Precision sewing for classic shirts. High-end finishing of collars, cuffs, and buttonholes on the fabrics you provide.',
      features: ['Structured collar assembly', 'Fine buttonhole creation', 'Felled seams', 'Precision details'],
    },
  },
  {
    id: 16,
    category: 'linens',
    image: '/images/servietteCuisine.jpg.webp',
    fr: {
      name: 'Serviette de Restauration',
      description: 'Finition et ourlets industriels pour vos rouleaux de tissus éponge, coton ou lin destinés au milieu de la restauration.',
      features: ['Coupe droite de précision', 'Ourlets industriels solides', 'Couture anti-effilochage', 'Grand volume de production'],
    },
    en: {
      name: 'Restaurant Towel',
      description: 'Finishing and industrial hemming for your rolls of terry cloth, cotton, or linen intended for the restaurant industry.',
      features: ['Precision straight cutting', 'Solid industrial hems', 'Anti-fray stitching', 'High volume production'],
    },
  },
  {
    id: 17,
    category: 'workwear',
    image: '/images/blousePatientMedical.jpeg',
    fr: {
      name: 'Blouse de Patient',
      description: 'Assemblage de blouses d\'hôpital. Couture des attaches croisées et finitions durables sur vos tissus confortables pour patients.',
      features: ['Montage d\'attaches croisées', 'Coutures non-irritantes', 'Ourlets renforcés', 'Production en série'],
    },
    en: {
      name: 'Patient Gown',
      description: 'Assembly of hospital gowns. Sewing of cross-back ties and durable finishes on your comfortable fabrics for patients.',
      features: ['Cross-tie assembly', 'Non-irritating seams', 'Reinforced hems', 'Mass production'],
    },
  },
  {
    id: 18,
    category: 'workwear',
    image: '/images/blouseChirurgicalL2.jpg',
    fr: {
      name: 'Blouse Chirurgicale Niveau 2',
      description: 'Confection rigoureuse de blouses L2. Respect strict des normes d\'assemblage sur vos tissus barrières pour garantir la protection en milieu chirurgical.',
      features: ['Respect des standards L2', 'Couture sur tissus barrières', 'Montage de poignets en tricot', 'Processus de couture contrôlé'],
    },
    en: {
      name: 'Level 2 Surgical Gown',
      description: 'Rigorous production of L2 gowns. Strict compliance with assembly standards on your barrier fabrics to ensure protection in surgical environments.',
      features: ['Compliance with L2 standards', 'Sewing on barrier fabrics', 'Knit cuff assembly', 'Controlled sewing process'],
    },
  }
];

export default products;