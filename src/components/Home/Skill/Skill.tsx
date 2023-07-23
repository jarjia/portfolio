import { DropDownIcon } from '@/components'
import { Skill as SkillType } from './types'
import useSkill from './useSkill'

const Skill: React.FC<SkillType> = ({ title, desc }) => {
  const { isOpen, skillRef, setIsOpen } = useSkill()

  return (
    <div
      ref={skillRef}
      onClick={() => setIsOpen(!isOpen)}
      className='flex cursor-pointer text-white my-4 h-fit flex-col w-full bg-primary dark:bg-primary-dark rounded'
    >
      <div className='flex items-center w-full transition-[all_1s] justify-between px-4 py-2'>
        <span>{title}</span>
        <div
          className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all z-1`}
        >
          <DropDownIcon />
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={`${
          isOpen ? 'px-4 py-2' : 'px-4 py-0'
        } transition-[all_5s] cursor-auto`}
      >
        <p className={`break-words ${isOpen ? 'auto' : 'hidden'}`}>{desc}</p>
      </div>
    </div>
  )
}

export default Skill
