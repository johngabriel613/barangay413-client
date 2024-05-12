import Banner from '../components/common/Banner'
import { homeBannerImg } from '../constants/images'

const Feedback = () => {
  return (
    <div>
      <Banner 
        title="Feedback"
        subtitle="Lorem ipsum dolor sit amet."
        bgImage={homeBannerImg}
        style={'h-[250px]'}
      />
    </div>
  )
}

export default Feedback
