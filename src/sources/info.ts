let d = new Date('August 13, 2006 00:00:00')
let today = new Date()
let dyear = today.getFullYear() - d.getFullYear()
if (today.getMonth() < d.getMonth()) {
  dyear--
} else if (today.getMonth() === d.getMonth() && today.getDate() < d.getDate()) {
  dyear--
}

export const aboutMe = {
  fullName: 'jarji abuashvili',
  age: dyear,
  email: 'jarjaabua@gmail.com',
  phone: '+995 579 20 51 64',
  residentOf: 'Gori, Georgia',
  languages: ['Georgian', 'English(Uk)'],
}

export const skills = [
  {
    id: 1,
    title: 'HTML5',
  },
  {
    id: 2,
    title: 'CSS3',
  },
  {
    id: 3,
    title: 'TailwindCss',
  },
  {
    id: 4,
    title: 'Javascript',
  },
  {
    id: 5,
    title: 'Typescript',
  },
  {
    id: 6,
    title: 'React.js',
  },
  {
    id: 7,
    title: 'Redux.js',
  },
  {
    id: 8,
    title: 'Next.js',
  },
  {
    id: 9,
    title: 'PHP',
  },
  {
    id: 10,
    title: 'Laravel',
  },
  {
    id: 11,
    title: 'Git',
  },
  {
    id: 12,
    title: 'Github',
  },
  {
    id: 13,
    title: 'Pusher.js',
  },
  {
    id: 14,
    title: 'Laravel echo',
  },
  {
    id: 15,
    title: 'Axios',
  },
  {
    id: 16,
    title: 'Swagger',
  },
  {
    id: 17,
    title: 'CI/CD pipeline',
  },
  {
    id: 18,
    title: 'React query',
  },
  {
    id: 19,
    title: 'React hook form',
  },
  {
    id: 20,
    title: 'React I18n',
  },
]

export const otherProjects = [
  {
    thumbnail: 'images/projects/corona-time.png',
    ghLink: 'https://github.com/jarjia/corona-time',
    prodLink: 'https://coronatime.jarjia.redberryinternship.ge/',
    name: 'corona time!',
  },
  {
    thumbnail: 'images/projects/react-calculator.png',
    ghLink: 'https://github.com/jarjia/react-calculator',
    prodLink: 'https://jarjia.github.io/react-calculator',
    name: 'react calculator',
  },
  {
    thumbnail: 'images/projects/tic-tac-toe-game.png',
    ghLink: 'https://github.com/jarjia/Tic-Tac-Toe-game',
    prodLink: 'https://jarjia.github.io/Tic-Tac-Toe-game',
    name: 'tic tac toe game',
  },
  {
    thumbnail: 'images/projects/weather-app.png',
    ghLink: 'https://github.com/jarjia/weather-app',
    prodLink: 'https://jarjia.github.io/weather-app/',
    name: 'weather app',
  },
]

export const education = [
  {
    type: 'school',
    date: '2012-2024',
    name: 'Gymnasium of saint Giorgi Mtatsmindeli',
    location: 'gori, georgia',
    website: 'http://www.gmgimnazia.ge/index.php/ka/',
  },
]

export const experiences = [
  {
    type: 'internship',
    duration: '4 months',
    place: 'redberry international',
    logo: 'images/redberry-logo.png',
    desc: 'During my time at Redberry International, I was exposed to various aspects of web development operations, contributing to projects that apply to real world applications. This experience provided me with opportunities into furthering my knowledge in frontend development and being introduced to backend development with PHP and Laravel and helped me develop a better understanding of how theoretical concepts are applied in real-world scenarios. Throughout my internship, I had the privilege of working closely with experienced professionals who were dedicated to mentoring and guiding me. This interaction allowed me to enhance my problem-solving abilities, improve my communication skills, and gain a deeper understanding of industry trends and best practices.',
    location: 'tbilisi, georgia',
    website: 'https://redberry.international/',
  },
]
