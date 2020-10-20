module.exports = {
  siteTitle: "Hi! I'm Colton!",
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'python'],
  authorName: 'Colton Smith',
  githubUsername: 'Coltonls24',
  authorAvatar: '/images/headshot2.jpeg',
  authorDescription: `I'm a software engineer with a broad range of experience. I have worked with a variety of different front-end frameworks such as Angular, React, and Vue and am always looking to learn something new. In my free time I enjoy playing video games with my friends and reading.`,
  skills: [
    {
      name: 'JavaScript',
      level: 80,
    },
    {
      name: 'TypeScript',
      level: 75,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'Git',
      level: 70,
    },
    {
      name: 'C#',
      level: 60,
    },
    {
      name: 'Python',
      level: 70,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Buildertrend',
      begin: {
        month: 'July',
        year: '2019',
      },
      duration: '1 yr',
      occupation: 'Application Developer I',
      description:
        'Developed and maintained full-stack web application used for construction project management. Developed features to allow users to distribute custom surveys using .NET, TypeScript, and the React Framework. I also identified client-facing issues and their cause in a timely manner',
    },
    {
      company: 'Herzog Technology Inc.',
      begin: {
        month: 'May',
        year: '2018',
      },
      duration: '3 mos',
      occupation: 'Software Engineering Intern',
      description:
        'Developed web application for the transportation industry using Python and the Angular Framework. I was responsible for implementing the single sign-on functionality using Keycloak as well as setting up the deployment with Docker.',
    },
    {
      company: 'Ames Laboratory',
      begin: {
        month: 'July',
        year: '2017',
      },
      duration: '1 yr',
      occupation: 'Software Engineering Intern',
      description:
        'Expanded the automated testing of a command line tool used to dynamically convert between different types of Cyber Threat Information utilizing Python. I also added additional functionality to convert between different types.',
    },
  ],
  portifolio: [
    {
      image: '/images/Arceus.png',
      description: 'Arceus Bot aka. Discord chat bot',
      url: 'https://github.com/Coltonls24/ArceusBot',
    },
    {
      image: '/images/FlexT.png',
      description: 'Flexible Transform',
      url: 'https://github.com/anl-cyberscience/FlexTransform',
    },
    /* more portifolio items here */
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/colton-smith-9a3b27127',
    github: 'https://github.com/Coltonls24',
    email: 'coltonls024@gmail.com',
  },
  siteUrl: 'https://coltonsmith.github.io/',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
}
