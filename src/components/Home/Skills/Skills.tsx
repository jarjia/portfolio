import { Skill } from '@/components'
import { useInfo } from '@/sources'

const Skills = () => {
  const { skills } = useInfo()

  return (
    <div id='skills' className='max-w-screen gap-4 p-6 mt-12'>
      <fieldset className='border-4 border-solid border-primary dark:border-white p-6'>
        <legend className='text-center text-3xl capitalize px-2'>skills</legend>
        <div className='grid grid-cols-2 gap-8 tinysm:grid-cols-1'>
          {skills.map((item) => {
            return <Skill key={item.id} title={item.title} />
          })}
        </div>
      </fieldset>
    </div>
  )
}

export default Skills
