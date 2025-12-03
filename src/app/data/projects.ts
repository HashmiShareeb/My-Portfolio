import { ProjectData } from '../interfaces/projects.interface'

const Data: ProjectData[] = [
  {
    id: 'digital-patient-twin',
    title: 'Digital Patient Twin',
    label: 'Industry Project',
    image: 'Digital_Patient_Twin',
    tags: ['Azure', 'CosmosDB', 'Dapr', 'Microservices', 'Nuxt', 'TypeScript'],
    githubUrl: 'https://github.com/JarneDel/digital-patient-twin-frontend',
    folderUrl: '/FA02.pdf',
    otherFile: '/technical_components.pdf',
    featured: true,
    sections: [
      {
        title: 'Project Presentation',
        image: 'digitalpatienttwin',
        text: 'Me and my team had the honour to present this project at the Delaware HQ in Ghent, where we showcased the Digital Patient Twin to a large audience. The project was well-received, and we received positive feedback for our work.',
      },
    ],
  },
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    label: 'Frontend Development',
    image: 'My_portfolio-lightmode',
    tags: [
      'Cloudinary',
      'Framer Motion',
      'MDX',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Vercel',
    ],
    githubUrl: 'https://github.com/HashmiShareeb/my_portfolio_24',
    gallery: ['my_portfolio_dm_display', 'my_portfolio_lm'],
  },
  {
    id: 'blitx',
    title: 'Blitx',
    image: 'Bachelor_Proef',
    label: 'Research Project',
    // alphabetically align the tags
    tags: [
      'Axios',
      'Hexagonal Architecture',
      'JPA',
      'Mapbox',
      'Maven',
      'Pinia',
      'PostgreSQL',
      'REST API',
      'Spring Boot',
      'Spring Security',
      'Vue.js',
    ],
    sections: [
      {
        title: 'Hexagonal Architecture',
        image: '/images/hexagonal_architecture.png',
        text: 'Hexagonal architecture, also known as "Ports and Adapters", is a software architecture aimed at isolating the core of the application (domain logic) from external systems such as databases, frameworks, user interfaces, and container technologies like Docker. This architecture establishes a clear separation between internal domains and external components by using well-defined interfaces (Ports) and implementations of these interfaces to interact with external systems like the frontend for example (Adapters).',
      },
      {
        title: 'User Roles',
        text: 'This project uses two roles: ADMIN and USER. Admin can manage the vehicles and see the rides, while User can request rides and look at their rides history. These roles are enforced through Spring Security to ensure secure access control.',
      },
      {
        title: 'Frontend',
        text: 'Built with Vue 3 and Vite, using Pinia and LocalStorage for state management and Axios for API communication. The dashboard features secure navigation via Vue Router guards, responsive CRUD views for vehicles andrides, and a clear separation between the user roles. The user can request rides and the route backend fetches the coordinates with the mapbox map and draws the routes.',
      },
      {
        title: 'Backend',
        text: 'Powered by Spring Boot with JPA and PostgreSQL, the backend follows a hexagonal architecture with distinct domain, application, and infrastructure layers. Data Transfer Objects (DTOs) protect sensitive fields, while WebConfig ensures secure CORS communication with the frontend. Authentication and authorization are handled via Spring Security.',
      },
      {
        title: 'Research & Learning',
        text: 'During the project, I explored different architectural approaches (MVC, layered, clean architecture) and compared them with hexagonal architecture. Community feedback (e.g. Spring and other communities on Reddit and forums) influenced pragmatic decisions such as combining JPA annotations with a domain-driven model. The project demonstrates my ability to research, evaluate, and implement complex fullstack architectures.',
      },
    ],
    githubUrl: 'https://github.com/HashmiShareeb/researchproject_backend',
    gallery: ['routesummary', 'vehicle_list', 'ridehistory_dm'],

    featured: true,
  },
  {
    id: 'harmony-energy',
    title: 'Harmony Energy',
    label: 'Internship',
    image: 'My_Harmony_Energy',

    sections: [],

    tags: [
      'API Integration',
      'Docker',
      'Golang',
      'Grafana',
      'I18n',
      'SQL',
      'Svelte',
      'Svelte Stores',
      'Tailwind CSS',
      'TypeScript',
    ],

    otherFile: '/Harmony Brochure.pdf',
    liveUrl: 'https://harmony.energy/',
    featured: true,
    gallery: [
      'marketingsite_harmony',
      'graphprices_iai6af_ipzat2',
      'kpichart_r5fdnn_nhgcbn',
    ],
  },
  {
    id: 'nexus-fm',
    title: 'Nexus FM',
    label: 'Full-stack development ',
    image: 'NexusFM_eqeu7k',
    // alphabetically align the tags
    tags: [
      'Docker',
      'GraphQL',
      'MongoDB',
      'NestJS',
      'Monorepo',
      'TailwindCSS',
      'TypeScript',
      'Vue.js',
      'Vue-Charts',
    ],
    githubUrl: 'https://github.com/HashmiShareeb/shareeb_afsd_fm2025',
    featured: true,
    gallery: [
      'building_page_admin',
      'nexus_fm_manageprop',
      'nexus_fm_asignrounds',
    ],
  },
  {
    id: 'timetable-app',
    title: 'TimeTable App',
    label: 'SmartApp Development',
    image: 'Time_Table_App',
    videoUrl:
      'https://drive.google.com/file/d/1X1Y6rSPLK4fZPHOgxgoZLFMUVkJNk4iM/view',
    githubUrl: 'https://github.com/HashmiShareeb/smartapp_project24',
    tags: ['Dart', 'Firebase', 'Firestore', 'Flutter'],
  },
  {
    id: 'deborah-lintermans',
    title: 'Hondencoach Deborah Lintermans',
    image: 'Deborah_Lintermans',
    label: 'Internship',
    tags: ['BEM', 'Bootstrap', 'PHP', 'ProccesWire', 'SCSS', 'UIkit', 'Vue.js'],
    liveUrl: 'https://deborahlintermans.be/',
  },
  {
    id: 'michael-naessens',
    title: 'Michael Naessens',
    label: 'Internship',
    image: 'MNaesens',
    tags: ['BEM', 'Bootstrap', 'PHP', 'ProccesWire', 'SCSS', 'UIkit', 'Vue.js'],
    liveUrl: 'https://michaelnaessens.be/',
  },
  {
    id: 'movie-app',
    title: 'The Movie App',
    label: 'Interaction Design',
    image: 'movieapp',
    githubUrl: 'https://github.com/HashmiShareeb/movieapp',
    liveUrl: 'https://hashmishareeb.github.io/movieapp/',
    tags: ['CSS', 'HTML', 'JavaScript', 'TheMovieDB API'],
    // externalLink: 'https://www.themoviedb.org/',
    //ExtraImages: ['projects/themovieapp_rbjdme'],
  },
]

export default Data
