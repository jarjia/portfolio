import { Skill as SkillType } from './types'

const Skill: React.FC<SkillType> = ({ title }) => {
  return (
    <div className='flex h-fit flex-col w-full rounded'>
      <div className='flex dark:bg-gray-200 bg-primary rounded items-center w-full justify-between px-2 py-2'>
        <span className='dark:text-primary-hover text-white'>{title}</span>
      </div>
    </div>
  )
}

export default Skill
