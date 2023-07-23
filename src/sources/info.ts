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
    desc: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.',
  },
  {
    id: 2,
    title: 'CSS3',
    desc: 'Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages. CSS3 incorporates the CSS2 standard with some changes and improvements.',
  },
  {
    id: 3,
    title: 'TailwindCss',
    desc: 'Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
  },
  {
    id: 4,
    title: 'Javascript',
    desc: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)',
  },
  {
    id: 5,
    title: 'Typescript',
    desc: 'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.',
  },
  {
    id: 6,
    title: 'React.js',
    desc: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.',
  },
  {
    id: 7,
    title: 'Redux.js',
    desc: "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
  },
  {
    id: 8,
    title: 'Next.js',
    desc: 'Next.js is a React framework that gives you building blocks to create web applications. By framework, I mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.',
  },
  {
    id: 9,
    title: 'PHP',
    desc: 'PHP (recursive acronym for PHP: Hypertext Preprocessor ) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.',
  },
  {
    id: 10,
    title: 'Laravel',
    desc: 'Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic.',
  },
  {
    id: 11,
    title: 'Git',
    desc: 'Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
  },
  {
    id: 12,
    title: 'Github',
    desc: 'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests.',
  },
]
