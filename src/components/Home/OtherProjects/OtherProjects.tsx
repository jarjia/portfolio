import { OtherProject } from '@/components'
import { otherProjects } from '@/sources'

const OtherProjects = () => {
  return (
    <div className='p-20 px-32 sm:px-4'>
      <h2 className='text-3xl text-center capitalize mb-8'>other projects</h2>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-1'>
        {otherProjects.map((item) => {
          return (
            <OtherProject
              key={item.name}
              name={item.name}
              ghLink={item.ghLink}
              prodLink={item.prodLink}
              thumbnail={item.thumbnail}
            />
          )
        })}
      </div>
    </div>
  )
}

export default OtherProjects
