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
