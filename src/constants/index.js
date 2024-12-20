export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'James Cooper',
    position: 'Principal Software Engineer at AOS',
    img: 'assets/james-copper.jpeg',
    review:
      'Daniel is an outstanding full-stack developer with expertise in both frontend development using React and backend development with Node.js. He consistently delivers high-quality results, meeting or exceeding expectations. Beyond his technical skills, Daniel has a positive attitude and works seamlessly with team members, fostering a collaborative and productive work environment.',
  },
  {
    id: 2,
    name: 'James Gregory',
    position: 'Robotics Researcher at Boeing Research & Technology',
    img: 'assets/james-gregory.jpeg',
    review:
      "It was great working with Daniel on a cutting-edge defense project. His front-end expertise was key to delivering high-quality results for the client. Daniel was reliable, collaborative, and quick to adapt to change requests, often going the extra mile to meet tight deadlines. His dependable contributions were essential to the project's success, and he was a fantastic teammate throughout.",
  },
  {
    id: 3,
    name: 'Chung Sing Leung',
    position: 'Lead Robotics and Aerospace Engineer at AOS',
    img: 'assets/chung-leung.png',
    review:
      'Daniel’s ability to address complex challenges with innovative solutions and his attention to detail consistently elevated the quality of our products. He also worked exceptionally well in a team environment, fostering strong collaboration across multiple disciplines.',
  },
  {
    id: 4,
    name: 'Lily You',
    position: 'Software Product Manager at Sunny Australia Lighting',
    img: 'assets/lily.jpeg',
    review:
      'Daniel has shown strong performance in software testing, consistently delivering high-quality results and demonstrating a keen attention to detail. Additionally, Daniel has integrated well into the company culture, building positive relationships with colleagues and embodying the core values of the organization.',
  },
];

export const myProjects = [
  {
    title: 'IWD - Intelligent Watch Dog: Multi-Vehicle Tasking System',
    desc: 'IWD is a cutting-edge multi-vehicle tasking system that facilitates human-machine teaming. It enables operators to assign high-level missions to autonomous vehicles, which independently perform tasks like waypoint navigation, path-following, and area coverage.',
    subdesc:
      'Powered by Django REST APIs, React, MUI, Leaflet, TypeScript, and SQLite, IWD supports use task automation to enhance efficiency and scalability.',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoBgColorClassName: 'bg-white-700',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MUI',
        path: 'assets/mui.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'Django',
        path: '/assets/django.png',
      },
      {
        id: 5,
        name: 'Leaflet',
        path: '/assets/leaflet.png',
      },
    ],
  },
  {
    title: 'C-BDI Editor - AI Agent Modeling Tool',
    desc: 'C-BDI Editor is an advanced tool designed to create models for the Certifiable-BDI (C-BDI) product. It provides an intuitive interface for defining agents, plans, goals, and beliefs, enabling the development of intelligent decision-making systems for safety-critical environments.',
    subdesc:
      'Built with React, Electron, Node.js, MUI, WebSocket, and TypeScript, focusing on real-time data visualization and a user-friendly interface.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'MUI',
        path: 'assets/mui.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node-js.png',
      },
      {
        id: 5,
        name: 'react-flow',
        path: '/assets/reactflow.png',
      },
    ],
  },
  {
    title: 'Issue Tracker - Modern Issue Management Application',
    desc: 'Issue-Tracker is a cutting-edge application designed for seamless task tracking and resolution. With a focus on enhancing user experience, it offers robust features for managing issues efficiently and reliably.',
    subdesc:
      'Developed with Next.js, Tailwind CSS, PostgreSQL, and Radix UI, emphasizing secure authentication, responsive design, and real-time error monitoring.',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoBgColorClassName: 'bg-gray-700',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'Next.js',
        path: '/assets/next-js.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'AOS Group',
    pos: 'Full Stack Developer',
    duration: '2021 - Present',
    title:
      'Developed single-page applications using TypeScript, React, and Electron.js, with a focus on user experience and performance. Implemented event-driven RESTful APIs and designed scalable, responsive interfaces. Used PostgreSQL and Prisma for efficient data management and collaborated in an Agile environment.',
    icon: '/assets/aos.svg',
    animation: 'dancing',
  },
  {
    id: 2,
    name: 'Sal National',
    pos: 'Test Engineer',
    duration: '2020 - 2021',
    title:
      'Executed manual functional and performance tests for smart home software, ensuring product quality. Worked closely with developers to identify and resolve bugs, improving reliability. Contributed to Agile workflows with a focus on software enhancements.',
    icon: '/assets/sal.jpg',
    animation: 'salute',
  },
];
