import { news } from '../../constants/texts'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='w-2/3'>
      <h2 className='text-3xl font-bold uppercase py-2 border-b-2 border-primary mb-4'>Projects & Activity</h2>
      
      <div className='news-grid-layout'>
        {news.map(item => (
          <NewsCard key={item.id} title={item.title} image={item.image} date={item.date}/>
        ))}
      </div>
    </div>
  )
}

export default News
