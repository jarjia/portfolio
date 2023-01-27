import SectionOneCSS from './SectionOne.module.css'

const SectionOne = ({aboutMe, github}) => {
  return (
    <section className={SectionOneCSS['section-1']} id='about'>
      <div className={SectionOneCSS['section-1-about']}>
        <h1>about me</h1>
        <h4>Hello, I am Jarji Abuashvili a web developer.</h4>
        <p>I have been developing web apps for year and half, I am motivated and always looking out for new oppurtunities.I have experience of developing web apps mainly using React.js and JavaScript. </p>
        <p>My Objective is to find company where I can improve my skills and experience as a junior web developer or as an intership candidate. I have created various React.js projects and in conclusion while doing this projects I find myself very determined and consistent.</p>
      </div>
      <div className={SectionOneCSS['section-1-github']}>
        <div className={SectionOneCSS['section-1-github-img']}>
          <a href={github.html_url} target='_blank' rel="noopener noreferrer"><img src={github.avatar_url} alt='my avatar'/></a>
        </div>
        <div className={SectionOneCSS['section-1-github-info']}>
          <div className={SectionOneCSS['section-1-github-info-1']}>
            <h3><strong>{github.login}</strong></h3>
            <h5>{github.bio}</h5>
            <a href={github.html_url} target='_blank' rel="noopener noreferrer">
              <img src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='github icon'/>
              <strong> Follow {`@${github.login}`}</strong>
            </a>
          </div>
          <small>Followers: {github.followers} | Repositories: {github.public_repos}</small>
        </div>
      </div>
      <div className={SectionOneCSS['section-1-info']}>
        <h1>basic information</h1>
        <div className={SectionOneCSS['section-1-info-div']}>
          <strong>Fullname: </strong>
          <span>{aboutMe.fullName}</span>
        </div>
        <div className={SectionOneCSS['section-1-info-div']}>
          <strong>Email: </strong>
          <span>{aboutMe.email}</span>
        </div>
        <div className={SectionOneCSS['section-1-info-div']}>
          <strong>Age: </strong>
          <span>{aboutMe.age}</span>
        </div>
        <div className={SectionOneCSS['section-1-info-div']}>
          <strong>Phone: </strong>
          <span>{aboutMe.phone}</span>
        </div>
        <div className={SectionOneCSS['section-1-info-div']}>
          <strong>Location: </strong>
          <span>{aboutMe.residentOf}</span>
        </div>
        <div className={SectionOneCSS['section-1-info-div']}>
          <strong>Languages: </strong>
          <span>
            {aboutMe.languages.map(item => {
              return <span key={item}>{(aboutMe.languages.indexOf(item) === aboutMe.languages.length - 1) 
                ? `${item}` : `${item}, `}</span>
            })}
          </span>
        </div>
        <a href='#footer'><button>contact me</button></a>
      </div>
    </section>
  )
}

export default SectionOne