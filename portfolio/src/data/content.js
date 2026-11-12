import cvPdf from '@/assets/CV.pdf';
import memoryMapLogo from '@/assets/projets/memorymap/logo.png';
import memoryMapMap from '@/assets/projets/memorymap/map.jpg';
import memoryMapApi from '@/assets/projets/memorymap/api.png';
import memoryMapFriends from '@/assets/projets/memorymap/friends.png';
import carsatLogo from '@/assets/projets/webpart_sharepoint/logo_carsat.png';
import carsatFinal from '@/assets/projets/webpart_sharepoint/final.png';
import carsatWorkbench from '@/assets/projets/webpart_sharepoint/workbench.png';
import scienceQuestSchema from '@/assets/projets/sae_34/1.jpeg';
import scienceQuestHome from '@/assets/projets/sae_34/2.png';
import scienceQuestGame from '@/assets/projets/sae_34/3.png';
import compositionServices from '@/assets/projets/composition_services/1.png';
import admissionsColor from '@/assets/projets/admissions_iut/2.jpeg';
import admissionsWide from '@/assets/projets/admissions_iut/3.jpeg';
import admissionsOther from '@/assets/projets/admissions_iut/1.jpeg';
import recueilDocument from '@/assets/projets/recueil_besoins/1.png';
import recueilWide from '@/assets/projets/recueil_besoins/2.png';

export const profile = {
  name: 'Alix JEUDI',
  firstName: 'Alix',
  role: 'Ingénieur Logiciels & Systèmes d’Information',
  tagline:
    'En alternance chez 3DS OUTSCALE, je conçois des applications et des infrastructures cloud fiables, sécurisées et agréables à utiliser.',
  school: 'EFREI Paris — majeure LSI',
  company: '3DS OUTSCALE',
  location: 'Paris, France',
  email: 'alix.jeudi@icloud.com',
  linkedin: 'https://linkedin.alix-jdlm.fr',
  github: 'https://github.com/JdAlix/',
  website: 'https://alix-jdlm.fr',
  cv: cvPdf,
};

export const highlights = [
  {
    value: '3 ans',
    label: 'd’alternance',
    detail: 'CARSAT Auvergne puis 3DS OUTSCALE',
  },
  {
    value: 'BUT',
    label: 'Informatique',
    detail: 'IUT Clermont-Ferrand, diplômé',
  },
  {
    value: 'EFREI',
    label: 'Paris',
    detail: 'Ingénieur LSI en alternance',
  },
];

export const skillGroups = [
  {
    title: 'Langages',
    items: ['Java', 'Python', 'C', 'PHP', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web & frameworks',
    items: ['Vue.js', 'React', 'Spring Boot', 'FastAPI', 'Laravel', 'SPFx'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'CI/CD Drone', 'Linux', 'Nginx', 'Traefik', 'Git'],
  },
  {
    title: 'Données & systèmes',
    items: ['PostgreSQL', 'SharePoint', 'Microsoft 365', 'PowerShell'],
  },
];

export const timeline = [
  {
    period: '2026 — aujourd’hui',
    title: 'Ingénieur LSI en alternance',
    org: '3DS OUTSCALE · EFREI Paris',
    description:
      'Cloud souverain, infrastructures et services cloud. Approfondissement des systèmes d’information, de l’intégration cloud et des méthodes DevOps sur des projets concrets.',
    tags: ['Cloud', 'DevOps', 'Systèmes'],
  },
  {
    period: '2024 — 2026',
    title: 'Alternance informatique',
    org: 'CARSAT Auvergne',
    description:
      'Développement et maintien d’applications critiques, travail sur les serveurs internes, PowerShell, React, Laravel et l’environnement Microsoft 365.',
    tags: ['React', 'Laravel', 'PowerShell'],
  },
  {
    period: '2022 — 2025',
    title: 'BUT Informatique',
    org: 'IUT Clermont-Ferrand',
    description:
      'Formation par projets : développement web et mobile, API REST, bases de données, gestion de projet et travail en équipe.',
    tags: ['Java', 'Python', 'Web'],
  },
];

export const projects = [
  {
    id: 'memorymap',
    year: '3',
    title: 'MemoryMap',
    subtitle: 'Carte de souvenirs en ligne',
    logo: memoryMapLogo,
    image: memoryMapMap,
    objective:
      'Développer une plateforme en ligne permettant de stocker et de partager des souvenirs marquants sur une carte interactive mondiale.',
    description:
      'Projet principal de 3ᵉ année mené en simulation d’entreprise. J’ai principalement été en charge de l’API REST en Python FastAPI, de sa documentation OpenAPI, du déploiement de l’API, de la base de données et du site web sur un serveur universitaire, avec une CI/CD Drone.',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Drone CI'],
    gallery: [memoryMapApi, memoryMapFriends],
    links: [
      {label: 'Voir le site', href: 'https://memorymap.fr'},
      {label: 'Documentation API', href: 'https://api.memorymap.fr/docs'},
      {label: 'Code API', href: 'https://github.com/JdAlix/MemoryMap-api'},
      {label: 'Code front', href: 'https://github.com/JdAlix/MemoryMap-front'},
    ],
  },
  {
    id: 'sharepoint',
    year: '3',
    title: 'WebPart SharePoint',
    subtitle: 'CARSAT Auvergne',
    logo: carsatLogo,
    image: carsatFinal,
    objective:
      'Développer une extension WebPart pour un site SharePoint Online utilisant les données d’une liste SharePoint à travers une API REST.',
    description:
      'Dans le cadre de la migration de SharePoint 2010 vers SharePoint Online, j’ai reproduit une fonctionnalité « Tableau » en SPFx avec React et Material UI : filtres, prévisualisation des documents et récupération des données via l’API REST SharePoint. La WebPart est aujourd’hui utilisée par le département retraite de la CARSAT et par une autre caisse.',
    tech: ['SPFx', 'React', 'Material UI', 'SharePoint REST'],
    gallery: [carsatWorkbench],
    confidential: true,
    links: [],
  },
  {
    id: 'sciencequest',
    year: '2',
    title: 'ScienceQuest',
    subtitle: 'Mini-jeux en ligne',
    logo: null,
    image: scienceQuestSchema,
    objective:
      'Développer un site web et une application Android ludiques avec un système de quizz mettant en avant des personnalités scientifiques féminines.',
    description:
      'Projet principal de 2ᵉ année. J’ai été en charge de l’API REST respectant HATEOAS avec Spring Boot, ainsi que du déploiement de l’API, de la base de données et du site web sur un serveur universitaire via Drone.',
    tech: ['Spring Boot', 'Java', 'Android', 'Drone CI'],
    gallery: [scienceQuestHome, scienceQuestGame],
    links: [{label: 'Voir le projet', href: 'https://github.com/JdAlix/ScienceQuest'}],
  },
  {
    id: 'composition',
    year: '2',
    title: 'Composition de services',
    subtitle: 'Gestion de prêts',
    logo: null,
    image: compositionServices,
    objective:
      'Développer une composition de services web pour la gestion de demandes de prêt, avec contrôle des erreurs de bout en bout.',
    description:
      'Projet mené à deux : services AccManager et AppManager en Java avec Spring Boot, et service LoanApproval en PHP Slim avec Guzzle. J’ai implémenté le service d’approbation, la communication entre services via le proxy universitaire et la propagation des erreurs jusqu’au client final.',
    tech: ['Spring Boot', 'PHP Slim', 'Guzzle', 'Postman'],
    gallery: [],
    links: [
      {
        label: 'Voir le projet',
        href: 'https://github.com/JdAlix/CompositionServicesSalva',
      },
    ],
  },
  {
    id: 'admissions',
    year: '1',
    title: 'Admissions IUT',
    subtitle: 'Gestionnaire de recrutement',
    logo: null,
    image: admissionsColor,
    objective:
      'Créer une application permettant le recrutement d’élèves pour les IUT de France, en binôme.',
    description:
      'Premier projet collaboratif : mise en place d’un workflow de travail à deux, gestion des conflits de fichiers et développement en C d’un programme fonctionnel et esthétique respectant un cahier des charges précis.',
    tech: ['C', 'Git'],
    gallery: [admissionsWide, admissionsOther],
    links: [
      {
        label: 'Voir le projet',
        href: 'https://github.com/JdAlix/SAE102_2022_GOIGOUX_JEUDI',
      },
    ],
  },
  {
    id: 'besoins',
    year: '1',
    title: 'Recueil de besoins',
    subtitle: 'Répondre à un besoin client',
    logo: null,
    image: recueilDocument,
    imagePosition: 'top',
    objective:
      'Recueillir un besoin client et y répondre au sein d’un groupe de trois étudiants.',
    description:
      'Réunion de cadrage avec un professeur jouant le rôle de client, analyse du besoin, rédaction d’un devis détaillé et conception de maquettes. Le client a validé la proposition et nous avons livré une documentation complète.',
    tech: ['Analyse', 'Devis', 'Maquettage'],
    gallery: [recueilWide],
    links: [
      {
        label: 'Voir le projet',
        href: 'https://github.com/JdAlix/SAE105_2022_JOURDAIN_PACZKOWSKI_JEUDI',
      },
    ],
  },
];

export const yearLabels = {
  '3': '3ᵉ année',
  '2': '2ᵉ année',
  '1': '1ʳᵉ année',
};
