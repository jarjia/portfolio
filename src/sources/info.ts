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
]
