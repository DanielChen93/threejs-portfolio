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
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
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
        path: '/assets/typescript.png',
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
        path: '/assets/typescript.png',
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
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
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
