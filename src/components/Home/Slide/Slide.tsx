import { Slide as SlideType } from './types'

const Slide: React.FC<SlideType> = ({ img, hovered, text }) => {
  return (
    <div>
      <img
        src={img}
        className={`cursor-pointer absolute block w-full ${
          hovered ? 'brightness-[0.3]' : 'brightness-100'
        } transition-all`}
        alt='Landing page of my main project'
      />
      <p
        className={`${
          hovered ? 'opacity-100' : 'opacity-0'
        } text-center px-20 top-36 text-white absolute transition-all`}
      >
        {text}
      </p>
    </div>
  )
}

export default Slide
