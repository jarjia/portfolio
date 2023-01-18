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
    phone: '+995 597 20 51 64',
    residentOf: 'Gori, Georgia',
    languages: ['Georgian', 'English(Uk)']
}

export const skills = {
    programming: [
        'HTML',
        "Javascript",
        'Typescript',
    ],
    libraries: [
        'React.js',
        'Next.js',
        'Redux',
        'RTL',
        'axios',
        'React-Router-Dom',
        'Formik & Yup'
    ],
    frameworks: [
        'Next.js',
        'GraphQl',
        'JQuery',
        'Jest'
    ],
    stylingAndDesign: [
        'SASS',
        'CSS',
        'Figma'
    ],
    generalSkills: [
        'algorithm solving',
        'Rest Api',
        
    ],
    backEnd: [
        'Node.js'
    ]
}