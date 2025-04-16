import { useState } from 'react'
import { OtherProject as OtherProjectT } from './types'
import { useTranslation } from 'react-i18next'

const OtherProject: React.FC<OtherProjectT> = ({
  name,
  thumbnail,
  ghLink,
  prodLink,
  tech,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation('home')

  return (
    <div>
      <h2 className='text-2xl text-center py-2 capitalize'>
        {name} ({tech})
      </h2>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='transition-all shadow-2xl cursor-pointer bg-no-repeat w-full h-[350px] md:h-[400px] tiny:h-[350px] rounded bg-cover bg-[50%_0%]'
        style={{
          backgroundImage: `url('${thumbnail}')`,
        }}
      >
        <div
          className={`flex justify-center items-center w-full h-full rounded ${
            isHovered && 'bg-[#0000007e]'
          } transition-all`}
        >
          <div
            className={`cursor-auto relative w-4/5 h-[60%] bg-white shadow-2xl rounded-sm ${
              isHovered ? 'opacity-1' : 'opacity-0'
            } transition-all`}
          >
            <div className='flex items-center justify-center bg-white dark:bg-gray-200 rounded-sm text-black h-full gap-10'>
              <a
                href={ghLink}
                className={
                  !isHovered ? 'pointer-events-none' : 'pointer-events-auto'
                }
                target='_blank'
              >
                <div className='flex flex-col items-center'>
                  <img
                    src='images/gh-logo.png'
                    className={`w-[80px] h-[80px] tinymid:w-[60px] tinymid:h-[60px]`}
                    alt='github logo'
                  />
                  <p className='capitalize text-xl text-center tinymid:text-sm'>
                    {ghLink ? t('github_link') : 'No Github'}
                  </p>
                </div>
              </a>
              <a
                href={prodLink}
                className={
                  !isHovered ? 'pointer-events-none' : 'pointer-events-auto'
                }
                target='_blank'
              >
                <div className='flex flex-col items-center'>
                  <img
                    src='images/hosted.png'
                    className={`w-[80px] h-[80px] tinymid:w-[60px] tinymid:h-[60px]`}
                    alt='production logo'
                  />
                  <p className='capitalize text-xl text-center tinymid:text-sm'>
                    {t('production_link')}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherProject
