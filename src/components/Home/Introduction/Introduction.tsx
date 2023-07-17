const Introduction = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-[url("/images/portfolio-back.jpg")] bg-cover bg-center'>
      <div className='text-center text-white'>
        <div className='flex justify-center'>
          <div className='w-44 h-44 border-2 border-secondary rounded-full bg-cover bg-center bg-[url("/images/profile.jpg")]'></div>
        </div>
        <div>
          <button className='capitalize px-8 py-2 bg-primary my-2 rounded text-lg hover:bg-primary-hover active:bg-primary-active'>
            contact me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
