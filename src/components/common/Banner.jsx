import { Link } from 'react-router-dom'
import BannerCard from './BannerCard'

const Banner = ({bgImage, title, subtitle, hasBtn, btn, hasBannerCard, style}) => {
  return (
    <div className={`relative flex-center justify-center flex-col gap-4 bg-red-100 isolate ${style}`}>
      <div className='absolute z-[-1] w-full h-full overflow-hidden'>
        <div className='absolute w-full h-full bg-[#121212]/70'></div>
        <img className='bannerBG object-cover h-full w-full' src={bgImage} alt=""/>
      </div>

      <div className='flex-center flex-col gap-2'>
        <h1 className='text-6xl font-bold text-primary uppercase'>{title}</h1>
        <p className='text-gray-100'>{subtitle}</p>
      </div>

      {hasBtn && <Link to='/about' className='border-2 border-primary text-primary font-semibold py-2 px-4'>{btn}</Link>}
      {hasBannerCard && <BannerCard/>}
    </div>
  )
}

export default Banner
