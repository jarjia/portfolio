import { Slide as SlideType } from './types'

const Slide: React.FC<SlideType> = ({ img, hovered, text, height }) => {
  return (
    <div>
      <div
        className={`cursor-pointer bg-cover bg-[50%_0%] bg-no-repeat absolute block w-full ${
          hovered ? 'brightness-[0.3] tinyd:brightness-100' : 'brightness-100'
        } transition-all`}
        style={{
          backgroundImage: `url(${img})`,
          height: `${height}px`,
        }}
      ></div>
      <div
        className='px-20 tinyd:px-2 text-white text-center w-full flex flex-col justify-center absolute'
        style={{
          height: `${height}px`,
        }}
      >
        <p
          className={`${
            hovered ? 'opacity-100' : 'opacity-0'
          } scrollbar z-[10] text-center overflow-y-hidden pb-2 transition-all sm:text-sm tinyd:hidden block`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default Slide
