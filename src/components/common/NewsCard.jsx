
const NewsCard = ({title, date, image}) => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='relative w-full h-[200px] overflow-hidden'>
        <img src={image} alt="" className='object-cover h-full w-full'/>
        <span className='absolute bg-primary text-sm text-white bottom-0 py-1 px-2'>{date}</span>
      </div>
      <p className='line-clamp-2 leading-[1.5]'>{title}</p>
    </div>
  )
}

export default NewsCard
