import Banner from '../components/common/Banner'
import { homeBannerImg } from '../constants/images'
import News from '../components/common/News'
import Announcement from '../components/common/Announcement'

const Home = () => {
  return (
    <div>
      <Banner 
        title="Barangay 413 Zone 42"
        subtitle="One voice, one goal: a better barangay for all."
        hasBtn={true}
        hasBannerCard={true}
        btn="Learn more"
        bgImage={homeBannerImg}
        style={`h-[400px] mb-24`}
      />

      <div className='container flex gap-8'>
        <News/>
        <Announcement/>
      </div>
    </div>
  )
}

export default Home
