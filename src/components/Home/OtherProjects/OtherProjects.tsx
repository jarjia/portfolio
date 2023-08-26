import { OtherProject } from '@/components'
import { useInfo } from '@/sources'
import { useTranslation } from 'react-i18next'

const OtherProjects = () => {
  const { t } = useTranslation('home')
  const { otherProjects } = useInfo()

  return (
    <div className='p-20 px-32 sm:px-4'>
      <h2 className='text-3xl text-center capitalize mb-8'>
        {t('other_projects')}
      </h2>
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
