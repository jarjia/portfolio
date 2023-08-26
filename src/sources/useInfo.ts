import { useTranslation } from 'react-i18next'

const useInfo = () => {
  const { t } = useTranslation('home')

  let d = new Date('August 13, 2006 00:00:00')
  let today = new Date()
  let dyear = today.getFullYear() - d.getFullYear()

  if (today.getMonth() < d.getMonth()) {
    dyear--
  } else if (
    today.getMonth() === d.getMonth() &&
    today.getDate() < d.getDate()
  ) {
    dyear--
  }

  const aboutMe = {
    fullName: t('name'),
    age: dyear,
    email: 'jarjaabua@gmail.com',
    phone: '+995 579 20 51 64',
    residentOf: `${t('gori')}, ${t('georgia')}`,
    languages: [t('georgian'), t('english')],
  }

  const skills = [
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

  const otherProjects = [
    {
      thumbnail: 'images/projects/corona-time.png',
      ghLink: 'https://github.com/jarjia/corona-time',
      prodLink: 'https://coronatime.jarjia.redberryinternship.ge/',
      name: t('corona_time'),
    },
    {
      thumbnail: 'images/projects/react-calculator.png',
      ghLink: 'https://github.com/jarjia/react-calculator',
      prodLink: 'https://jarjia.github.io/react-calculator',
      name: t('react_calc'),
    },
    {
      thumbnail: 'images/projects/tic-tac-toe-game.png',
      ghLink: 'https://github.com/jarjia/Tic-Tac-Toe-game',
      prodLink: 'https://jarjia.github.io/Tic-Tac-Toe-game',
      name: t('tic_tac_toe_game'),
    },
    {
      thumbnail: 'images/projects/weather-app.png',
      ghLink: 'https://github.com/jarjia/weather-app',
      prodLink: 'https://jarjia.github.io/weather-app/',
      name: t('weather_app'),
    },
  ]

  const education = [
    {
      type: t('edu_type_school'),
      date: '2012-2024',
      name: t('edu_one'),
      location: `${t('gori')}, ${t('georgia')}`,
      website: 'http://www.gmgimnazia.ge/index.php/ka/',
    },
  ]

  const experiences = [
    {
      type: t('exp_type_intership'),
      duration: `4 ${t('duration_months')}`,
      place: t('exp_place_one'),
      logo: 'images/redberry-logo.png',
      desc: t('exp_place_one_desc'),
      location: `${t('tbilisi')}, ${t('georgia')}`,
      website: 'https://redberry.international/',
    },
  ]

  return {
    experiences,
    education,
    otherProjects,
    skills,
    aboutMe,
  }
}

export default useInfo