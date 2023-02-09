let d = new Date("August 13, 2006 00:00:00");
let today = new Date();
let dyear = today.getFullYear() - d.getFullYear();
if(today.getMonth() < d.getMonth()) {
    dyear--
}else if(today.getMonth() === d.getMonth() && today.getDate() < d.getDate()) {
    dyear--
}

export const aboutMe = {
    fullName: 'Jarji Abuashvili',
    age: dyear,
    email: 'jarjaabua@gmail.com',
    phone: '+995 579 20 51 64',
    residentOf: 'Gori, Georgia',
    languages: ['Georgian', 'English(Uk)']
}
export const skills1 = [
    {
        skill: 'HTML5',
        isHovered: false,
        desc: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.',
        id: 1
    },
    {
        skill: 'Javascript',
        isHovered: false,
        desc: 'Javascript is used to create dynamic and interactive web content like applications and browsers.',
        id: 2
    },
    {
        skill: 'Typescript',
        isHovered: false,
        desc: 'TypeScript helps us improve developer experience while creating app.',
        id: 3
    },
    {
        skill: 'Algorithm Solving',
        isHovered: false,
        desc: 'I have experience of solving a loads of algorithms on codewars.',
        id: 4
    },
    {
        skill: 'Rest Api',
        isHovered: false,
        desc: 'A RESTful API is an architectural style for an Api that uses HTTP requests to access and use data.',
        id: 5
    },
]
export const skills2 = [
    {
        skill: 'React.js',
        isHovered: false,
        desc: "React is used for building web applications quickly and efficiently with less code than you would with vanilla JavaScript.",
        id: 6
    },
    {
        skill: 'Redux',
        isHovered: false,
        desc: 'Redux is used to manage one whole state across the app in React.js.',
        id: 7
    },
    {
        skill: 'GraphQl',
        isHovered: false,
        desc: 'GraphQl is used to recieve the only data we ask from Api call.',
        id: 8
    },
    {
        skill: 'Next.js',
        isHovered: false,
        desc: "Next.js is React.js framework which helps us deal with React.js's weaknesses like: routing, data fetching and etc.",
        id: 9
    },
    {
        skill: 'Axios',
        isHovered: false,
        desc: 'Axios makes sending asynchronous HTTP requests to REST endpoints easier and helps you perform CRUD operations.',
        id: 10
    },
]
export const skills3 = [
    {
        skill: 'CSS3',
        isHovered: false,
        desc: 'Cascading Style Sheet. Used for styling HTML tags.',
        id: 11
    },
    {
        skill: 'SASS',
        isHovered: false,
        desc: 'Syntactically Awesome Style Sheets is a pre-processor scripting language that will be compiled or interpreted into CSS.',
        id: 12
    },
    {
        skill: 'SCSS',
        isHovered: false,
        desc: 'Sassy Cascading Style Sheets. Advanced CSS',
        id: 13
    },
    {
        skill: 'MUI',
        isHovered: false,
        desc: 'MUI is a massive library of pre-styled react components.',
        id: 14
    },
    {
        skill: 'Figma',
        isHovered: false,
        desc: 'Figma is used to create designs with teams very easily.',
        id: 15
    },
]
export const skills4 = [
    {
        skill: 'Git',
        isHovered: false,
        desc: 'Git is a DevOps tool used for source code management. It is used to track changes in code to update it on Github',
        id: 16
    },
    {
        skill: 'E-commerce',
        isHovered: false,
        desc: 'I have experience in building E-commerce app with help of Commerce.js',
        id: 17
    },
    {
        skill: 'Formik & Yup',
        isHovered: false,
        desc: 'Formik is used to create react forms easily and Yup helps us with validation of these forms.',
        id: 18
    },
    {
        skill: 'RTL',
        isHovered: false,
        desc: 'React Testing Library offers a set of testing helpers that structure your tests based on user interactions.',
        id: 19
    },
    {
        skill: 'Jest',
        isHovered: false,
        desc: 'Jest is a JavaScript test runner that provides resources for writing and running tests.',
        id: 20
    },
]
export const portfolios = [
    {
        id: 1,
        project_name: 'React Calculator',
        github_link: 'https://github.com/jarjia/react-calculator',
        host_link: 'https://jarjia.github.io/react-calculator/',
        isHovered: false
    },
    {
        id: 2,
        project_name: 'Tic Tac Toe Game',
        github_link: 'https://github.com/jarjia/Tic-Tac-Toe-game',
        host_link: 'https://jarjia.github.io/Tic-Tac-Toe-game/',
        isHovered: false
    },
    {
        id: 3,
        project_name: 'Weather App',
        github_link: 'https://github.com/jarjia/weather-app',
        host_link: 'https://jarjia.github.io/weather-app/',
        isHovered: false
    },   
    {
        id: 4,
        project_name: 'Tenzies Game',
        github_link: 'https://github.com/jarjia/Tenzies-Game',
        host_link: 'https://jarjia.github.io/Tenzies-Game/',
        isHovered: false
    },
    {
        id: 5,
        project_name: 'Random Rgb/Hex color generator',
        github_link: 'https://github.com/jarjia/Hex-Rgb-generator',
        host_link: 'https://jarjia.github.io/Hex-Rgb-generator/',
        isHovered: false
    },
    {
        id: 6,
        project_name: 'Note App',
        github_link: 'https://github.com/jarjia/note-app',
        host_link: 'https://jarjia.github.io/note-app/',
        isHovered: false
    },
    {
        id: 7,
        project_name: 'Crypto App',
        github_link: 'https://github.com/jarjia/note-app',
        host_link: 'https://jarjia.github.io/crypto-app/',
        isHovered: false
    },
    {
        id: 8,
        project_name: 'Password Generator',
        github_link: 'https://github.com/jarjia/password-generator',
        host_link: 'https://jarjia.github.io/password-generator/',
        isHovered: false
    },
]
export const workExperience = []
export const education = [
    {
        education_residence: 'School',
        name_of_residence: 'Gymnasium of saint Giorgi Mtatsmindeli',
        duration: 'September 2012 - 2024 June',
        location: 'Gori, Georgia'
    }
]