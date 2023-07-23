const Introduction = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-[url("/images/portfolio-back.jpg")] bg-cover bg-center'>
      <div className='text-center text-white'>
        <div className='flex justify-center'>
          <div className='w-44 h-44 border-2 border-secondary rounded-full bg-cover bg-center bg-[url("/images/profile.jpg")]'></div>
        </div>
        <div>
          <button className='bg-primary dark:bg-primary-dark dark:hover:bg-primary-hover dark:active:bg-primary-active hover:bg-primary-hover active:bg-primary-active capitalize px-8 py-2 my-2 rounded text-lg'>
            contact me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
