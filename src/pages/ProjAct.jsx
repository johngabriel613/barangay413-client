import Banner from '../components/common/Banner'
import { homeBannerImg } from '../constants/images'

const ProjAct = () => {
  return (
    <div>
      <Banner 
        title="Projects & Activity"
        subtitle="Lorem ipsum dolor sit amet."
        bgImage={homeBannerImg}
        style={'h-[250px]'}
      />
    </div>
  )
}

export default ProjAct
