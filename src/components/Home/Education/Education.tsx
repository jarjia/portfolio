import { education } from '@/sources'

const Education = () => {
  return (
    <div className='py-2 px-48 pb-8 md:px-8 tinymid:px-2'>
      <h2 className='text-3xl text-center mb-8 text-black dark:text-white capitalize'>
        education
      </h2>
      {education.map((item) => {
        return (
          <div className='flex w-full bg-white tiny:flex-col'>
            <div className='bg-[#343a40] text-center text-white p-8 py-10'>
              <h3 className='text-2xl'>{item.type}</h3>
              <p className='text-sm'>{item.date}</p>
            </div>
            <div className='text-black flex justify-center flex-col px-2'>
              <p className='text-xl'>{item.name}</p>
              <small className='capitalize'>location: {item.location}</small>
              <a
                href={item.website}
                target='_blank'
                className='capitlize underline w-fit italic'
              >
                visit website
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Education
