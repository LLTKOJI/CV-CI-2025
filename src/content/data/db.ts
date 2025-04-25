import type { SocialProps, CardIndexProps, ItemProps, Skills } from '../../interface/Interface';



export const socials: SocialProps[] = [
    
    {
      name: 'GitHub',
      url: 'https://github.com/cristopherdev',
      icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504...'
    }
];


export const cards: CardIndexProps[] = [
    {
      title: 'Sobre Mí',
      title_en: '',
      description: `💻 Desarrollador apasionado con enfoque en tecnologías modernas. 
      Experiencia en frontend, backend y bases de datos.
      Actualmente estudiante de ingeniería en informática, siempre buscando mejorar mis habilidades y aprender nuevas tecnologías.`,
      description_en: ''
    },
    {
      title: 'Entusiasta de los Juegos',
      title_en: '',
      description: `🎮 "Siempre que encuentro un juego tanto competitivo o casual, doy lo mejor de mí para disfrutar
      cualquiera de las dos experiencias al máximo."`,
      description_en: ''
    }
];


export const skills: Skills = {
    Frontend: [
        { name: "JavaScript", level: 40 },
        { name: "React", level: 40 },
        { name: "Astro.js", level: 40 },
        { name: "Next.js", level: 40 },
    ],
    Backend: [
        { name: "Python", level: 40 },
        { name: "Spring Boot", level: 40 },
        { name: "Node.js", level: 40 },
        { name: "Express.js", level: 40 },
    ],
    Databases: [
      { name: "MSSQL", level: 40 },
      { name: "MySQL", level: 40 },
      { name: "PostgreSQL", level: 40 },
      { name: "MongoDB", level: 40 },
    ]
};

export const navItems: ItemProps[] = [
    { titleEs: 'Sobre Mí', titleEn: '', href: '/' },
    {
      titleEs: 'Proyectos', 
      titleEn: '',
      href: '/projects',
      subitems: [
        { titleEs: 'ETL con Node.js', titleEn: '', href: '/projects/etl' },
      ]
    }
];


