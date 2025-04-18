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
    residentOf: `${t('city_residence')}, ${t('georgia')}`,
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
      title: 'Vue.js',
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
    {
      id: 21,
      title: 'Ant design',
    },
    {
      id: 22,
      title: 'AWS',
    },
    {
      id: 23,
      title: 'Inertia.js',
    },
    {
      id: 24,
      title: 'Stripe',
    },
  ]

  const otherProjects = [
    {
      thumbnail: 'images/projects/video-chat.png',
      ghLink: 'https://github.com/jarjia/vue-video-chat-app',
      prodLink: 'https://video-chat.jarji-abuashvili.com',
      name: t('video-chat'),
      tech: 'Vue.js/Redis',
    },
    {
      thumbnail: 'images/projects/ecommerce.png',
      ghLink: 'https://github.com/jarjia/vue-ecommerce',
      prodLink: 'https://your.ecommerce.jarji-abuashvili.com',
      name: t('ecommerce'),
      tech: 'Vue.js/Laravel',
    },
    {
      thumbnail: 'images/projects/daily.png',
      ghLink: null,
      prodLink: 'https://dailyproductsforu.com/',
      name: 'Daily For U',
      tech: 'Astro.js/Vannila.js',
    },
    {
      thumbnail: 'images/projects/covid.png',
      ghLink: 'https://github.com/jarjia/vue-covid-questionnaire',
      prodLink:
        'https://654ba8986091fc5da7a62128--golden-puppy-86b37f.netlify.app/',
      name: t('covid_questionnaire'),
      tech: 'Vue.js',
    },
  ]

  const education = [
    {
      type: t('edu_type_school'),
      date: '2012-2024',
      edu_type: t('high_school'),
      name: t('edu_one'),
      location: `${t('gori')}, ${t('georgia')}`,
      website: 'http://www.gmgimnazia.ge/index.php/ka/',
    },
    {
      type: t('edu_type_uni'),
      date: '2024-2028',
      name: t('edu_two'),
      edu_type: t('bachelors'),
      location: `${t('tbilisi')}, ${t('georgia')}`,
      website: 'https://gtu.ge/',
    },
  ]

  const experiences = [
    {
      type: t('exp_type_intership'),
      duration: `2023 March - 2023 July`,
      place: 'Redberry International',
      logo: 'images/redberry-logo.png',
      desc: t('exp_place_one_desc'),
      location: `${t('tbilisi')}, ${t('georgia')}`,
      website: 'https://redberry.international/',
    },
    {
      type: t('freelancing'),
      duration: `2023 August - 2024 July`,
      place: 'Aleph',
      logo: 'images/aleph.ico',
      desc: t('exp_place_three_desc'),
      location: t('online'),
      website: 'https://www.getaleph.com/',
    },
    {
      type: t('freelancing'),
      duration: `2024 August - 2025 March`,
      place: 'Carmover',
      logo: 'images/cover.jpg',
      desc: t('exp_place_two_desc'),
      location: t('online'),
      website: 'https://carm.ge',
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
