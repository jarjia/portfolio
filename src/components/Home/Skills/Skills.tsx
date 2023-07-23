import { Skill } from '@/components'
import { AppContext } from '@/context'
import { skills } from '@/sources'
import { useContext } from 'react'

const Skills = () => {
  const { theme } = useContext(AppContext)
  let slice = Math.round(skills.length / 2)
  let opacity = theme ? '0.1' : '0.3'

  return (
    <div
      className='grid grid-cols-2 gap-4 p-6 mt-12 bg-cover bg-no-repeat'
      style={{
        backgroundImage: `linear-gradient(rgb(0, 0, 0, ${opacity}), rgb(0, 0, 0, ${opacity})), url("/images/working.jpg")`,
      }}
    >
      <div className='flex flex-col'>
        {skills.slice(0, slice).map((item) => {
          return <Skill key={item.id} desc={item.desc} title={item.title} />
        })}
      </div>
      <div className='flex flex-col'>
        {skills.slice(slice).map((item) => {
          return <Skill key={item.id} desc={item.desc} title={item.title} />
        })}
      </div>
    </div>
  )
}

export default Skills
