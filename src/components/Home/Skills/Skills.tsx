import { Skill } from '@/components'
import { skills } from '@/sources'

const Skills = () => {
  return (
    <div className='max-w-screen gap-4 p-6 mt-12 bg-cover bg-no-repeat bg-center'>
      <fieldset className='border-4 border-solid border-primary dark:border-white p-6'>
        <legend className='text-center text-3xl capitalize px-2'>skills</legend>
        <div className='grid grid-cols-2 gap-8'>
          {skills.map((item) => {
            return <Skill key={item.id} title={item.title} />
          })}
        </div>
      </fieldset>
    </div>
  )
}

export default Skills
