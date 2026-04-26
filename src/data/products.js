const products = [
  // ==========================================
  // CATÉGORIE 1 : VÊTEMENTS DE BASE
  // ==========================================
  {
    id: 1,
    category: 'clothing',
    image: '/images/ImageProduit/tshirtColRond.png',
    popularity: 100, 
    complexity: 2,   
    fr: {
      name: 'T-Shirt (Col rond)',
      description: 'Assemblage à grande échelle de t-shirts classiques. Nos experts travaillent avec les tissus (coton, polyester, etc.) que vous nous fournissez pour garantir une qualité de couture constante.',
      features: ['Couture sur vos tissus fournis', 'Finition de col impeccable', 'Presse industrielle', 'Emballage selon vos standards'],
    },
    en: {
      name: 'Crewneck T-Shirt',
      description: 'Large-scale assembly of classic t-shirts. Our experts work with the fabrics (cotton, polyester, etc.) you provide to ensure consistent sewing quality.',
      features: ['Sewing on your provided fabrics', 'Flawless collar finish', 'Industrial pressing', 'Packaging to your standards'],
    },
  },
  {
    id: 2,
    category: 'clothing',
    image: '/images/ImageProduit/tshirtColV.png',
    popularity: 85,
    complexity: 3, 
    fr: {
      name: 'T-Shirt (Col V)',
      description: 'Montage précis de t-shirts à col en V. Manipulation experte de vos tricots pour un tombé parfait au niveau de l\'encolure, suivi d\'un pressage professionnel.',
      features: ['Assemblage de vos tricots', 'Montage de col en V centré', 'Contrôle par nos experts', 'Emballage prêt pour l\'expédition'],
    },
    en: {
      name: 'V-Neck T-Shirt',
      description: 'Precise assembly of V-neck t-shirts. Expert handling of your knits for a perfect drape at the neckline, followed by professional pressing.',
      features: ['Assembly of your knits', 'Centered V-neck construction', 'Quality control by our experts', 'Ready-to-ship packaging'],
    },
  },
  {
    id: 3,
    category: 'clothing',
    image: '/images/ImageProduit/chandailMancheLongue.png',
    popularity: 75,
    complexity: 2,
    fr: {
      name: 'Chandail manches longues',
      description: 'Confection de chandails à manches longues. Alignement parfait des coutures d\'épaules et finition des poignets sur vos matériaux.',
      features: ['Couture de vos matériaux', 'Alignement de précision', 'Finition des ouurlets', 'Presse et emballage'],
    },
    en: {
      name: 'Long Sleeve Shirt',
      description: 'Production of long sleeve shirts. Perfect alignment of shoulder seams and cuff finishing on your materials.',
      features: ['Sewing of your materials', 'Precision alignment', 'Hem finishing', 'Pressing and packaging'],
    },
  },
  {
    id: 4,
    category: 'clothing',
    image: '/images/ImageProduit/cotonOuateCrewneck.png',
    popularity: 90,
    complexity: 3,
    fr: {
      name: 'Coton ouaté (Crewneck)',
      description: 'Assemblage robuste de molletons. Nos experts gèrent vos tissus épais pour créer des finitions durables aux poignets et à la taille.',
      features: ['Manipulation de vos tissus épais', 'Pose de bord-côte (rib)', 'Coutures renforcées', 'Pliage et emballage'],
    },
    en: {
      name: 'Crewneck Sweatshirt',
      description: 'Robust assembly of fleece. Our experts handle your thick fabrics to create durable finishes at the cuffs and waist.',
      features: ['Handling of your thick fabrics', 'Ribbed cuff application', 'Reinforced seams', 'Folding and packaging'],
    },
  },
  {
    id: 5,
    category: 'clothing',
    image: '/images/ImageProduit/contonOuateHoodie.png',
    popularity: 95,
    complexity: 4, 
    fr: {
      name: 'Coton ouaté à capuchon (Hoodie)',
      description: 'Confection complexe de hoodies à partir de vos molletons. Montage soigné des capuches doublées et des poches kangourou.',
      features: ['Assemblage de vos molletons', 'Montage de capuche par nos experts', 'Pose d\'œillets et cordons', 'Presse industrielle'],
    },
    en: {
      name: 'Hoodie',
      description: 'Complex production of hoodies from your fleece. Careful assembly of lined hoods and kangaroo pockets.',
      features: ['Assembly of your fleece', 'Hood construction by our experts', 'Eyelet and drawstring placement', 'Industrial pressing'],
    },
  },
  {
    id: 6,
    category: 'clothing',
    image: '/images/ImageProduit/jogging.png',
    popularity: 80,
    complexity: 3,
    fr: {
      name: 'Pantalon de jogging (Sweatpants)',
      description: 'Montage de pantalons de jogging. Couture extensible et pose de ceintures élastiques sur les tissus que vous fournissez.',
      features: ['Couture sur vos tissus extensibles', 'Pose de ceinture élastique', 'Assemblage de poches', 'Emballage rigoureux'],
    },
    en: {
      name: 'Sweatpants',
      description: 'Assembly of sweatpants. Stretch stitching and elastic waistband application on the fabrics you provide.',
      features: ['Sewing on your stretch fabrics', 'Elastic waistband application', 'Pocket assembly', 'Rigorous packaging'],
    },
  },
  {
    id: 7,
    category: 'clothing',
    image: '/images/ImageProduit/short.jpg.webp',
    popularity: 70,
    complexity: 2,
    fr: {
      name: 'Short décontracté',
      description: 'Production rapide et efficace de shorts de détente. Assemblage de vos toiles ou tricots avec une finition propre et durable.',
      features: ['Couture de vos toiles/tricots', 'Finition des ourlets', 'Assemblage par nos experts', 'Presse finale'],
    },
    en: {
      name: 'Casual Shorts',
      description: 'Fast and efficient production of lounge shorts. Assembly of your canvas or knits with a clean and durable finish.',
      features: ['Sewing of your canvas/knits', 'Hem finishing', 'Assembly by our experts', 'Final pressing'],
    },
  },
  {
    id: 8,
    category: 'clothing',
    image: '/images/ImageProduit/pantalonChico.webp',
    popularity: 65,
    complexity: 5, 
    fr: {
      name: 'Pantalon Chino',
      description: 'Montage rigoureux de pantalons sur vos sergés de coton. Finition professionnelle des poches, braguettes et passants par nos experts.',
      features: ['Couture sur vos sergés', 'Montage de braguette', 'Finition des poches', 'Repassage impeccable'],
    },
    en: {
      name: 'Chino Pants',
      description: 'Rigorous pants assembly on your cotton twill. Professional finishing of pockets, flies, and loops by our experts.',
      features: ['Sewing on your twill', 'Fly construction', 'Pocket finishing', 'Flawless ironing'],
    },
  },
  {
    id: 9,
    category: 'clothing',
    image: '/images/ImageProduit/jupe.jpg',
    popularity: 55,
    complexity: 4, 
    fr: {
      name: 'Jupe trapèze',
      description: 'Couture de précision pour jupes. Pose de fermetures éclair invisibles et ourlets réguliers sur les tissus fournis par vos soins.',
      features: ['Assemblage de vos tissus', 'Pose de fermeture invisible', 'Ourlets soignés', 'Presse et emballage'],
    },
    en: {
      name: 'A-Line Skirt',
      description: 'Precision sewing for skirts. Invisible zipper installation and even hems on the fabrics provided by you.',
      features: ['Assembly of your fabrics', 'Invisible zipper installation', 'Neat hems', 'Pressing and packaging'],
    },
  },
  {
    id: 10,
    category: 'clothing',
    image: '/images/ImageProduit/robeLegere.jpg.webp',
    popularity: 60,
    complexity: 3,
    fr: {
      name: 'Robe d\'été légère',
      description: 'Manipulation experte de vos tissus fluides et délicats. Nos experts assurent un tombé parfait grâce à une presse de haute qualité.',
      features: ['Couture sur vos tissus fluides', 'Ourlets délicats', 'Pressage professionnel', 'Emballage sur cintre ou plié'],
    },
    en: {
      name: 'Light Summer Dress',
      description: 'Expert handling of your flowing and delicate fabrics. Our experts ensure a perfect drape with high-quality pressing.',
      features: ['Sewing on your flowing fabrics', 'Delicate hems', 'Professional pressing', 'Packaged folded or on hangers'],
    },
  },
  {
    id: 11,
    category: 'clothing',
    image: '/images/ImageProduit/camisole.jpg.webp',
    popularity: 88,
    complexity: 2,
    fr: {
      name: 'Camisole / Débardeur',
      description: 'Assemblage de hauts sans manches. Finition au biais ou ourlets étroits sur vos tricots légers, suivi d\'un emballage en lot.',
      features: ['Couture de vos tricots', 'Pose de biais de finition', 'Production à grand volume', 'Emballage en lots'],
    },
    en: {
      name: 'Camisole / Tank Top',
      description: 'Assembly of sleeveless tops. Bias binding or narrow hems on your lightweight knits, followed by batch packaging.',
      features: ['Sewing of your knits', 'Bias binding application', 'High volume production', 'Batch packaging'],
    },
  },
  {
    id: 12,
    category: 'clothing',
    image: '/images/ImageProduit/vesteCoupeVent.jpg',
    popularity: 70,
    complexity: 4,
    fr: {
      name: 'Veste légère (Zip-up)',
      description: 'Montage de vestes légères. Nos experts maîtrisent l\'insertion de fermetures éclair séparables sur les textiles que vous nous confiez.',
      features: ['Pose de fermeture éclair', 'Assemblage de vos textiles', 'Finition de col', 'Presse et inspection'],
    },
    en: {
      name: 'Light Zip-Up Jacket',
      description: 'Assembly of light jackets. Our experts master the insertion of separating zippers on the textiles you entrust to us.',
      features: ['Zipper installation', 'Assembly of your textiles', 'Collar finishing', 'Pressing and inspection'],
    },
  },
  {
    id: 13,
    category: 'clothing',
    image: '/images/ImageProduit/poloClassique.jpg.webp',
    popularity: 75,
    complexity: 5, 
    fr: {
      name: 'Polo classique',
      description: 'Confection de polos avec vos mailles piquées. Montage précis de la patte de boutonnage et du col par nos experts de l\'assemblage.',
      features: ['Couture sur vos mailles', 'Montage de patte de boutonnage', 'Réalisation de boutonnières', 'Emballage individuel'],
    },
    en: {
      name: 'Classic Polo',
      description: 'Production of polos with your pique knits. Precise assembly of the placket and collar by our assembly experts.',
      features: ['Sewing on your knits', 'Placket assembly', 'Buttonhole creation', 'Individual packaging'],
    },
  },

  // ==========================================
  // CATÉGORIE 2 : VÊTEMENTS DE SPORT
  // ==========================================
  {
    id: 14,
    category: 'clothing',
    image: '/images/ImageProduit/leggingSport.jpeg',
    popularity: 92,
    complexity: 2, 
    fr: {
      name: 'Legging de sport classique',
      description: 'Utilisation de coutures extensibles (flatlock) sur vos tissus athlétiques (Spandex/Lycra) pour garantir confort et durabilité.',
      features: ['Coutures flatlock sur vos tissus', 'Gestion de l\'élasticité', 'Presse professionnelle', 'Emballage soigné'],
    },
    en: {
      name: 'Classic Sports Leggings',
      description: 'Use of stretch seams (flatlock) on your athletic fabrics (Spandex/Lycra) to ensure comfort and durability.',
      features: ['Flatlock seams on your fabrics', 'Elasticity management', 'Professional pressing', 'Neat packaging'],
    },
  },
  {
    id: 15,
    category: 'clothing',
    image: '/images/ImageProduit/leggingPoche.jpg.webp',
    popularity: 85,
    complexity: 3,
    fr: {
      name: 'Legging de sport avec poches',
      description: 'Assemblage technique incluant le montage de poches latérales sur vos tissus de compression fournis par le client.',
      features: ['Couture de poches sur tissu extensible', 'Assemblage par nos experts', 'Coutures renforcées', 'Emballage prêt-à-livrer'],
    },
    en: {
      name: 'Sports Leggings with Pockets',
      description: 'Technical assembly including side pocket construction on your client-provided compression fabrics.',
      features: ['Pocket sewing on stretch fabric', 'Assembly by our experts', 'Reinforced seams', 'Ready-to-deliver packaging'],
    },
  },
  {
    id: 16,
    category: 'clothing',
    image: '/images/ImageProduit/brassiereSport.jpg',
    popularity: 78,
    complexity: 4, 
    fr: {
      name: 'Brassière de sport (Sports bra)',
      description: 'Confection d\'équipements de maintien. Insertion d\'élastiques et de doublures sur les tissus techniques que vous fournissez.',
      features: ['Assemblage de vos tissus techniques', 'Insertion d\'élastiques de maintien', 'Coutures anti-frottement', 'Presse et emballage'],
    },
    en: {
      name: 'Sports Bra',
      description: 'Production of support equipment. Insertion of elastics and linings on the technical fabrics you provide.',
      features: ['Assembly of your technical fabrics', 'Support elastic insertion', 'Anti-chafe seams', 'Pressing and packaging'],
    },
  },
  {
    id: 17,
    category: 'clothing',
    image: '/images/ImageProduit/shortCycliste.jpg',
    popularity: 80,
    complexity: 3,
    fr: {
      name: 'Short cycliste (Biker short)',
      description: 'Montage de shorts ajustés. Nos experts appliquent des techniques de couture spécialisées sur vos matériaux athlétiques.',
      features: ['Couture sur vos matériaux', 'Montage de gousset', 'Finition des cuisses', 'Presse de finition'],
    },
    en: {
      name: 'Biker Shorts',
      description: 'Assembly of fitted shorts. Our experts apply specialized sewing techniques to your athletic materials.',
      features: ['Sewing on your materials', 'Gusset assembly', 'Thigh finishing', 'Finishing press'],
    },
  },
  {
    id: 18,
    category: 'clothing',
    image: '/images/ImageProduit/tshirtRespirant.jpg',
    popularity: 90,
    complexity: 2,
    fr: {
      name: 'T-shirt respirant (Dry-fit)',
      description: 'Assemblage délicat de t-shirts d\'entraînement. Nous travaillons avec vos mailles fines pour éviter tout accroc durant la confection.',
      features: ['Manipulation de vos mailles fines', 'Coutures légères', 'Presse à température contrôlée', 'Emballage rapide'],
    },
    en: {
      name: 'Breathable T-Shirt (Dry-fit)',
      description: 'Delicate assembly of workout shirts. We work with your fine mesh to avoid any snags during production.',
      features: ['Handling of your fine mesh', 'Lightweight seams', 'Temperature-controlled pressing', 'Fast packaging'],
    },
  },
  {
    id: 19,
    category: 'clothing',
    image: '/images/ImageProduit/joggingEntrainement.jpeg.webp',
    popularity: 75,
    complexity: 4,
    fr: {
      name: 'Jogging technique d\'entraînement',
      description: 'Fabrication de pantalons de sport haute performance. Pose de fermetures éclair aux chevilles et poches sur vos tissus synthétiques.',
      features: ['Assemblage de vos tissus synthétiques', 'Pose de zips aux chevilles', 'Coutures robustes', 'Finition par nos experts'],
    },
    en: {
      name: 'Technical Training Joggers',
      description: 'Manufacturing of high-performance sports pants. Ankle zipper and pocket installation on your synthetic fabrics.',
      features: ['Assembly of your synthetic fabrics', 'Ankle zip installation', 'Robust seams', 'Finishing by our experts'],
    },
  },
  {
    id: 20,
    category: 'clothing',
    image: '/images/ImageProduit/vesteCoupeVent.jpg',
    popularity: 65,
    complexity: 5, 
    fr: {
      name: 'Veste coupe-vent',
      description: 'Montage de vestes de sport sur vos toiles de nylon ou polyester. Finition imperméable des coutures par nos experts.',
      features: ['Couture sur vos toiles techniques', 'Pose de doublure filet', 'Finition des poignets élastiques', 'Emballage soigné'],
    },
    en: {
      name: 'Windbreaker Jacket',
      description: 'Assembly of sports jackets on your nylon or polyester canvas. Waterproof seam finishing by our experts.',
      features: ['Sewing on your technical canvas', 'Mesh lining installation', 'Elastic cuff finishing', 'Neat packaging'],
    },
  },

  // ==========================================
  // CATÉGORIE 3 : UNIFORMES MÉDICAUX
  // ==========================================
  {
    id: 21,
    category: 'workwear',
    image: '/images/ImageProduit/blouseInfermier.png',
    popularity: 98, // Énorme volume en médical
    complexity: 2,
    fr: {
      name: 'Blouse d\'infirmier/médecin (Scrub top)',
      description: 'Confection de hauts médicaux. Assemblage de précision de l\'encolure en V et des poches plaquées sur les tissus techniques que vous nous fournissez.',
      features: ['Assemblage sur vos tissus médicaux', 'Finition de col en V', 'Couture de poches', 'Presse industrielle'],
    },
    en: {
      name: 'Medical Scrub Top (V-Neck)',
      description: 'Production of medical tops. Precision assembly of the V-neck and patch pockets on the technical fabrics you provide to us.',
      features: ['Assembly on your medical fabrics', 'V-neck finishing', 'Pocket sewing', 'Industrial pressing'],
    },
  },
  {
    id: 22,
    category: 'workwear',
    image: '/images/ImageProduit/pantalonMedical.jpg.webp',
    popularity: 95,
    complexity: 3, 
    fr: {
      name: 'Pantalon médical (Cargo Scrub)',
      description: 'Fabrication de pantalons utilitaires médicaux. Nos experts assurent un montage solide des poches cargo multiples sur vos textiles.',
      features: ['Couture sur vos textiles', 'Montage de poches cargo', 'Taille élastique ajustable', 'Emballage en grand volume'],
    },
    en: {
      name: 'Medical Scrub Pants (Cargo)',
      description: 'Manufacturing of medical utility pants. Our experts ensure a solid construction of multiple cargo pockets on your textiles.',
      features: ['Sewing on your textiles', 'Cargo pocket assembly', 'Adjustable elastic waist', 'High-volume packaging'],
    },
  },
  {
    id: 23,
    category: 'workwear',
    image: '/images/ImageProduit/blouseIsolation.jpg',
    popularity: 90,
    complexity: 2,
    fr: {
      name: 'Blouse d\'isolation',
      description: 'Assemblage sécurisé de blouses de protection. Couture de renfort sur vos textiles barrières avec pose de poignets élastiques.',
      features: ['Couture de vos textiles barrières', 'Pose de poignets tricotés', 'Attaches dorsales solides', 'Presse et pliage sanitaires'],
    },
    en: {
      name: 'Isolation Gown',
      description: 'Secure assembly of protective gowns. Reinforcement sewing on your barrier textiles with elastic cuff installation.',
      features: ['Sewing of your barrier textiles', 'Knitted cuff installation', 'Solid back ties', 'Sanitary pressing and folding'],
    },
  },
  {
    id: 24,
    category: 'workwear',
    image: '/images/ImageProduit/blouseChirurgicale.jpg',
    popularity: 85,
    complexity: 4,
    fr: {
      name: 'Blouse chirurgicale (Niveau 1 et 2)',
      description: 'Confection rigoureuse respectant les standards médicaux. Nos experts assemblent vos tissus techniques de haute performance.',
      features: ['Assemblage de vos tissus techniques', 'Coutures scellées ou renforcées', 'Contrôle qualité strict', 'Emballage médical'],
    },
    en: {
      name: 'Surgical Gown (Level 1 & 2)',
      description: 'Rigorous production respecting medical standards. Our experts assemble your high-performance technical fabrics.',
      features: ['Assembly of your technical fabrics', 'Sealed or reinforced seams', 'Strict quality control', 'Medical packaging'],
    },
  },
  {
    id: 25,
    category: 'workwear',
    image: '/images/ImageProduit/blousePatient.jpeg',
    popularity: 88,
    complexity: 1,
    fr: {
      name: 'Blouse de patient (Fermeture au dos)',
      description: 'Production institutionnelle à grand volume. Assemblage rapide et solide des attaches sur les tissus confortables que vous fournissez.',
      features: ['Couture de vos tissus confort', 'Montage d\'attaches solides', 'Ourlets industriels', 'Emballage en lots'],
    },
    en: {
      name: 'Patient Gown (Back Closure)',
      description: 'High-volume institutional production. Fast and solid assembly of ties on the comfortable fabrics you provide.',
      features: ['Sewing of your comfort fabrics', 'Solid tie construction', 'Industrial hems', 'Batch packaging'],
    },
  },
  {
    id: 26,
    category: 'workwear',
    image: '/images/ImageProduit/sarrauLaboratoire.png',
    popularity: 80,
    complexity: 4, 
    fr: {
      name: 'Sarrau de laboratoire',
      description: 'Montage classique de sarraus professionnels. Pose de boutons pression ou réguliers, et finition des fentes d\'aisance sur vos tissus.',
      features: ['Assemblage de vos tissus fournis', 'Pose de quincaillerie', 'Finition de col structuré', 'Repassage professionnel'],
    },
    en: {
      name: 'Laboratory Coat',
      description: 'Classic assembly of professional lab coats. Installation of snap or regular buttons, and vent finishing on your fabrics.',
      features: ['Assembly of your provided fabrics', 'Hardware installation', 'Structured collar finishing', 'Professional ironing'],
    },
  },

  // ==========================================
  // CATÉGORIE 4 : UNIFORMES CORPORATIFS
  // ==========================================
  {
    id: 27,
    category: 'workwear',
    image: '/images/ImageProduit/chemiseCorporativeHomme.jpg',
    popularity: 65,
    complexity: 5, // Très complexe
    fr: {
      name: 'Chemise boutonnée corporative (Homme)',
      description: 'Couture de précision pour chemises d\'uniforme. Finition impeccable des cols et poignets par nos experts sur vos tissus.',
      features: ['Couture sur vos tissus', 'Réalisation de boutonnières', 'Montage de col rigide', 'Emballage individuel'],
    },
    en: {
      name: 'Corporate Button-Down Shirt (Men)',
      description: 'Precision sewing for uniform shirts. Flawless finishing of collars and cuffs by our experts on your fabrics.',
      features: ['Sewing on your fabrics', 'Buttonhole creation', 'Rigid collar assembly', 'Individual packaging'],
    },
  },
  {
    id: 28,
    category: 'workwear',
    image: '/images/ImageProduit/chemiseCorporativeFemme.jpg',
    popularity: 60,
    complexity: 5, 
    fr: {
      name: 'Chemise boutonnée corporative (Femme)',
      description: 'Assemblage de chemisiers ajustés. Montage des pinces de taille et finitions soignées sur les matériaux que vous confiez à notre atelier.',
      features: ['Assemblage de vos matériaux', 'Couture de pinces', 'Boutonnage de précision', 'Presse de finition'],
    },
    en: {
      name: 'Corporate Button-Down Shirt (Women)',
      description: 'Assembly of fitted blouses. Waist dart construction and neat finishes on the materials you entrust to our workshop.',
      features: ['Assembly of your materials', 'Dart sewing', 'Precision buttoning', 'Finishing press'],
    },
  },
  {
    id: 29,
    category: 'workwear',
    image: '/images/ImageProduit/pantalonTravail.jpg.webp',
    popularity: 82,
    complexity: 4, 
    fr: {
      name: 'Pantalon de travail (Workwear)',
      description: 'Confection de pantalons ultra-résistants. Coutures rabattues industrielles et renforts (bartacks) appliqués sur vos toiles épaisses.',
      features: ['Couture sur vos toiles épaisses', 'Points de renfort (Bartacks)', 'Montage de braguette robuste', 'Emballage lourd'],
    },
    en: {
      name: 'Workwear Pants',
      description: 'Production of ultra-resistant pants. Industrial felled seams and reinforcements (bartacks) applied to your heavy canvas.',
      features: ['Sewing on your heavy canvas', 'Reinforcement points (Bartacks)', 'Robust fly construction', 'Heavy packaging'],
    },
  },
  {
    id: 30,
    category: 'workwear',
    image: '/images/ImageProduit/vesteCuisinier.png.webp',
    popularity: 75,
    complexity: 5, 
    fr: {
      name: 'Veste de cuisinier / Chef',
      description: 'Montage de vestes de restauration. Double boutonnage croisé et finitions professionnelles réalisées par nos experts sur vos tissus.',
      features: ['Assemblage de vos tissus', 'Double boutonnage croisé', 'Montage de col officier', 'Presse impeccable'],
    },
    en: {
      name: 'Chef Coat',
      description: 'Assembly of restaurant jackets. Double-breasted crossover and professional finishes done by our experts on your fabrics.',
      features: ['Assembly of your fabrics', 'Double-breasted crossover', 'Mandarin collar assembly', 'Flawless pressing'],
    },
  },
  {
    id: 31,
    category: 'workwear',
    image: '/images/ImageProduit/tablierBavet.jpg',
    popularity: 90,
    complexity: 2,
    fr: {
      name: 'Tablier à bavette (Cuisine)',
      description: 'Fabrication de tabliers protecteurs. Fixation solide des sangles et quincailleries sur les textiles résistants fournis par vos soins.',
      features: ['Couture sur vos textiles résistants', 'Fixation de quincaillerie', 'Renfort des points de tension', 'Emballage par lot'],
    },
    en: {
      name: 'Bib Apron (Kitchen)',
      description: 'Manufacturing of protective aprons. Solid attachment of straps and hardware on the resistant textiles provided by you.',
      features: ['Sewing on your resistant textiles', 'Hardware attachment', 'Reinforcement of stress points', 'Batch packaging'],
    },
  },
  {
    id: 32,
    category: 'workwear',
    image: '/images/ImageProduit/tablierTaille.webp',
    popularity: 85,
    complexity: 2,
    fr: {
      name: 'Tablier de taille (Bistro)',
      description: 'Couture rapide et de qualité pour tabliers de service. Montage de multiples poches utilitaires sur vos tissus corporatifs.',
      features: ['Assemblage de vos tissus corporatifs', 'Montage de poches', 'Ourlets de propreté', 'Presse et mise en boîte'],
    },
    en: {
      name: 'Waist Apron (Bistro)',
      description: 'Fast and high-quality sewing for service aprons. Construction of multiple utility pockets on your corporate fabrics.',
      features: ['Assembly of your corporate fabrics', 'Pocket construction', 'Clean hems', 'Pressing and boxing'],
    },
  },
  {
    id: 33,
    category: 'workwear',
    image: '/images/ImageProduit/poloCorporatif.jpg.avif',
    popularity: 70,
    complexity: 5,
    fr: {
      name: 'Polo corporatif',
      description: 'Assemblage complet de polos pour entreprise. Finition des fentes latérales et montage de col sur vos mailles piquées.',
      features: ['Couture sur vos mailles piquées', 'Finition des fentes latérales', 'Montage de col', 'Emballage prêt-à-livrer'],
    },
    en: {
      name: 'Corporate Polo',
      description: 'Complete assembly of corporate polos. Side slit finishing and collar assembly on your pique knits.',
      features: ['Sewing on your pique knits', 'Side slit finishing', 'Collar assembly', 'Ready-to-deliver packaging'],
    },
  },

  // ==========================================
  // CATÉGORIE 5 : LITERIE & INSTITUTIONNEL
  // ==========================================
  {
    id: 34,
    category: 'linens',
    image: '/images/ImageProduit/drapPlat.jpg.webp',
    popularity: 100, 
    complexity: 1, 
    fr: {
      name: 'Drap plat (Toutes tailles)',
      description: 'Production industrielle de literie. Nos experts gèrent la coupe de précision et l\'ourlet sur vos larges rouleaux de tissus.',
      features: ['Coupe sur vos rouleaux', 'Ourlets industriels', 'Pliage automatisé', 'Emballage institutionnel'],
    },
    en: {
      name: 'Flat Sheet (All sizes)',
      description: 'Industrial bedding production. Our experts manage precision cutting and hemming on your wide fabric rolls.',
      features: ['Cutting on your rolls', 'Industrial hems', 'Automated folding', 'Institutional packaging'],
    },
  },
  {
    id: 35,
    category: 'linens',
    image: '/images/ImageProduit/drapContour.jpg',
    popularity: 95,
    complexity: 2, 
    fr: {
      name: 'Drap contour (Avec élastiques)',
      description: 'Assemblage de draps-housses avec coins renforcés. Pose d\'élastiques en continu sur les textiles que vous fournissez.',
      features: ['Pose d\'élastiques sur vos textiles', 'Renfort des coins', 'Production à grand volume', 'Presse et emballage'],
    },
    en: {
      name: 'Fitted Sheet',
      description: 'Assembly of fitted sheets with reinforced corners. Continuous elastic application on the textiles you provide.',
      features: ['Elastic application on your textiles', 'Corner reinforcement', 'High-volume production', 'Pressing and packaging'],
    },
  },
  {
    id: 36,
    category: 'linens',
    image: '/images/ImageProduit/housseCouette.jpg',
    popularity: 90,
    complexity: 3, 
    fr: {
      name: 'Housse de couette',
      description: 'Montage de housses de grande dimension. Création de fermetures à rabat ou boutonnées sur vos tissus hôteliers.',
      features: ['Assemblage de vos tissus hôteliers', 'Coutures de grande largeur', 'Finition des ouvertures', 'Emballage rigoureux'],
    },
    en: {
      name: 'Duvet Cover',
      description: 'Large-scale cover assembly. Creation of flap or button closures on your hotel fabrics.',
      features: ['Assembly of your hotel fabrics', 'Wide-width seams', 'Opening finishing', 'Rigorous packaging'],
    },
  },
  {
    id: 37,
    category: 'linens',
    image: '/images/ImageProduit/tailleOreiller.jpg.avif',
    popularity: 98,
    complexity: 1,
    fr: {
      name: 'Taie d\'oreiller standard',
      description: 'Confection en série de taies d\'oreiller. Ourlets et rabats intérieurs parfaitement exécutés par nos experts sur vos tissus.',
      features: ['Couture sur vos tissus fournis', 'Finition de rabat intérieur', 'Production très rapide', 'Pliage professionnel'],
    },
    en: {
      name: 'Standard Pillowcase',
      description: 'Mass production of pillowcases. Hems and inner flaps perfectly executed by our experts on your fabrics.',
      features: ['Sewing on your provided fabrics', 'Inner flap finishing', 'Very fast production', 'Professional folding'],
    },
  },
  {
    id: 38,
    category: 'linens',
    image: '/images/ImageProduit/tailleOreiller.jpg.avif',
    popularity: 80,
    complexity: 1,
    fr: {
      name: 'Taie d\'oreiller format King',
      description: 'Production adaptée aux formats larges. Finitions de type hôtelier avec points de renfort sur le textile que vous nous confiez.',
      features: ['Assemblage de format large', 'Ourlets hôteliers', 'Couture sur votre textile', 'Emballage par paquets'],
    },
    en: {
      name: 'King Size Pillowcase',
      description: 'Production adapted to large formats. Hotel-style finishes with reinforcement stitches on the textile you entrust to us.',
      features: ['Large format assembly', 'Hotel hems', 'Sewing on your textile', 'Package wrapping'],
    },
  },
  {
    id: 39,
    category: 'linens',
    image: '/images/ImageProduit/couvreMatela.webp',
    popularity: 85,
    complexity: 3, 
    fr: {
      name: 'Couvre-matelas protecteur',
      description: 'Assemblage de protecteurs matelassés. Couture sur vos tissus barrières ou imperméables, avec finition des bords élastiques.',
      features: ['Couture sur vos tissus imperméables', 'Matelassage et bordure', 'Pose d\'élastique de maintien', 'Presse adaptée'],
    },
    en: {
      name: 'Protective Mattress Pad',
      description: 'Assembly of quilted protectors. Sewing on your barrier or waterproof fabrics, with elastic edge finishing.',
      features: ['Sewing on your waterproof fabrics', 'Quilting and binding', 'Support elastic installation', 'Adapted pressing'],
    },
  },
  {
    id: 40,
    category: 'linens',
    image: '/images/ImageProduit/bavoirAdulte.jpg',
    popularity: 90,
    complexity: 2,
    fr: {
      name: 'Bavoir pour adulte / institutionnel',
      description: 'Fabrication de protections institutionnelles. Nos experts appliquent des finitions au biais sur vos matériaux absorbants.',
      features: ['Finition au biais sur vos matériaux', 'Pose d\'attaches solides', 'Coutures ultra-durables', 'Emballage en grand volume'],
    },
    en: {
      name: 'Adult / Institutional Bib',
      description: 'Manufacturing of institutional protections. Our experts apply bias binding finishes to your absorbent materials.',
      features: ['Bias finishing on your materials', 'Solid tie installation', 'Ultra-durable seams', 'High-volume packaging'],
    },
  },
  {
    id: 41,
    category: 'linens',
    image: '/images/ImageProduit/servietteBain.jpg.webp',
    popularity: 95,
    complexity: 1, 
    fr: {
      name: 'Serviette de bain (Finition des ourlets)',
      description: 'Service de finition pour la literie de bain. Nous réalisons les ourlets industriels de chaque côté de vos rouleaux d\'éponge.',
      features: ['Ourlets sur vos rouleaux d\'éponge', 'Coutures droites industrielles', 'Finition anti-effilochage', 'Pliage et mise en boîte'],
    },
    en: {
      name: 'Bath Towel (Hem Finishing)',
      description: 'Finishing service for bath linens. We perform industrial hems on each side of your terry cloth rolls.',
      features: ['Hems on your terry rolls', 'Industrial straight seams', 'Anti-fray finishing', 'Folding and boxing'],
    },
  },
  {
    id: 42,
    category: 'linens',
    image: '/images/ImageProduit/debarbouillette.jpeg',
    popularity: 92,
    complexity: 1,
    fr: {
      name: 'Débarbouillette',
      description: 'Production à très grand volume. Coupe et ourlets rapides réalisés par nos experts sur les tissus éponges de nos clients.',
      features: ['Coupe et couture de vos tissus', 'Ourlets aux 4 côtés', 'Rapidité d\'exécution', 'Emballage par dizaines'],
    },
    en: {
      name: 'Washcloth',
      description: 'Very high-volume production. Fast cutting and hemming performed by our experts on our clients\' terry cloths.',
      features: ['Cutting and sewing of your fabrics', 'Hems on all 4 sides', 'Speed of execution', 'Packaged by the dozens'],
    },
  },
  {
    id: 43,
    category: 'linens',
    image: '/images/ImageProduit/nape.jpg',
    popularity: 70,
    complexity: 1,
    fr: {
      name: 'Nappe de restaurant',
      description: 'Couture de grandes surfaces pour la restauration. Finition des bordures sur les tissus antitaches que vous fournissez.',
      features: ['Couture sur vos tissus antitaches', 'Ourlets droits de grande longueur', 'Coupe à l\'équerre', 'Presse à plat impeccable'],
    },
    en: {
      name: 'Restaurant Tablecloth',
      description: 'Large surface sewing for the restaurant industry. Border finishing on the stain-resistant fabrics you provide.',
      features: ['Sewing on your stain-resistant fabrics', 'Long straight hems', 'Square cutting', 'Flawless flat pressing'],
    },
  },
  {
    id: 44,
    category: 'linens',
    image: '/images/ImageProduit/servietteTable.jpg.webp',
    popularity: 75,
    complexity: 2, 
    fr: {
      name: 'Serviette de table en tissu',
      description: 'Finition de petites pièces de linge de table. Réalisation d\'ourlets fins de type point bourdon ou droit sur vos textiles.',
      features: ['Ourlets sur vos textiles', 'Coins en onglet possibles', 'Contrôle de qualité', 'Presse et pliage soigné'],
    },
    en: {
      name: 'Cloth Napkin',
      description: 'Finishing of small pieces of table linen. Execution of fine satin stitch or straight hems on your textiles.',
      features: ['Hems on your textiles', 'Mitered corners possible', 'Quality control', 'Careful pressing and folding'],
    },
  }
];

export default products;