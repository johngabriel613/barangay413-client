import Banner from '../components/common/Banner'
import { homeBannerImg } from '../constants/images'

const Helpline = () => {
  return (
    <div>
      <Banner 
        title="Helpline"
        subtitle="Lorem ipsum dolor sit amet."
        bgImage={homeBannerImg}
        style={'h-[250px]'}
      />
    </div>
  )
}

export default Helpline
