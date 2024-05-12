import Banner from '../components/common/Banner'
import { homeBannerImg } from '../constants/images'

const About = () => {
  return (
    <div>
      <Banner 
        title="About us"
        subtitle="Get to know our barangay"
        bgImage={homeBannerImg}
        style={'h-[250px]'}
      />
    </div>
  )
}

export default About
