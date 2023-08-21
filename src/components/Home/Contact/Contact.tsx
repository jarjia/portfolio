import { aboutMe } from '@/sources'

const svgs = {
  plus: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
    </svg>
  ),
  twitter: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
    </svg>
  ),
  email: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
    </svg>
  ),
  quora: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path d='M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z' />
    </svg>
  ),
  linkedin: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
    </svg>
  ),
  facebook: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
    </svg>
  ),
}

const Contact = () => {
  return (
    <div
      className='text-white py-4 px-20 sm:px-8 tiny:px-2 bg-cover bg-center'
      style={{
        backgroundImage:
          'linear-gradient(#0000007a, #0000007a), url(images/footer.avif)',
      }}
      id='contacts'
    >
      <h2 className='text-3xl text-center'>Contact Me</h2>
      <div className='grid grid-cols-2 gap-[50px] my-8 sm:grid-cols-1 sm:gap-8'>
        <div>
          <h3 className='text-xl'>Contact Me Via: </h3>
          <div className='py-2 px-4'>
            <a
              href='mailto:jarjaabua@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-email hover:bg-email-hover w-full my-3 mx-1 text-left py-2 px-3 text-white text-xl rounded cursor-pointer flex items-center justify-between'>
                <div className='flex items-center'>
                  {svgs.email} <span className='mx-4'>Email</span>
                </div>{' '}
                {svgs.plus}
              </button>
            </a>
            <a
              href='https://www.linkedin.com/in/jarji-abuashvili-3a9a02249/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-linkedin hover:bg-linkedin-hover w-full my-3 mx-1 text-left py-2 px-3 text-white text-xl rounded cursor-pointer flex items-center justify-between'>
                <div className='flex items-center'>
                  {svgs.linkedin} <span className='mx-4'>Linkedin</span>
                </div>{' '}
                {svgs.plus}
              </button>
            </a>
            <a
              href='https://www.facebook.com/jarji.abuashvili.9/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-primary hover:bg-primary-dark w-full my-3 mx-1 text-left py-2 px-3 text-white text-xl rounded cursor-pointer flex items-center justify-between'>
                <div className='flex items-center'>
                  {svgs.facebook} <span className='mx-4'>FaceBook</span>
                </div>{' '}
                {svgs.plus}
              </button>
            </a>
            <a
              href='https://www.quora.com/profile/%E1%83%AF%E1%83%90%E1%83%A0%E1%83%AF%E1%83%98-%E1%83%90%E1%83%91%E1%83%A3%E1%83%90%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-quora hover:bg-quora-hover w-full my-3 mx-1 text-left py-2 px-3 text-white text-xl rounded cursor-pointer flex items-center justify-between'>
                <div className='flex items-center'>
                  {svgs.quora} <span className='mx-4'>Quora</span>
                </div>{' '}
                {svgs.plus}
              </button>
            </a>
            <a
              href='https://twitter.com/AbuashviliJarji'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-twitter hover:bg-twitter-hover w-full my-2 mx-1 text-left py-2 px-3 text-white text-xl rounded cursor-pointer flex items-center justify-between'>
                <div className='flex items-center'>
                  {svgs.twitter} <span className='mx-4'>Twitter</span>
                </div>{' '}
                {svgs.plus}
              </button>
            </a>
          </div>
        </div>
        <div className='px-2'>
          <div className='my-2 mb-8'>
            <div>
              <h4 className='text-xl'>Location: </h4>
              <span className='pl-2'>{aboutMe.residentOf}</span>
            </div>
            <div>
              <h4 className='text-xl'>Phone: </h4>
              <span className='pl-2'>{aboutMe.phone}</span>
            </div>
            <div>
              <h4 className='text-xl'>Email: </h4>
              <span className='pl-2'>{aboutMe.email}</span>
            </div>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.091781680365!2d44.10971670603597!3d41.97893728867725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40449dbe42313b3f%3A0x847124f824f7451a!2z4YOh4YOi4YOQ4YOa4YOY4YOc4YOY4YOhIDU!5e0!3m2!1sen!2sge!4v1674725312494!5m2!1sen!2sge'
              allowFullScreen={false}
              className='w-full h-[200px]'
              loading='lazy'
              title='my location'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
