import { announcements } from "../../constants/texts"
import AnnouncementCard from "./AnnouncementCard"


const Announcement = () => {
  return (
    <div className='w-1/3'>
      <h2 className='text-3xl font-bold uppercase py-2 border-b-2 border-primary mb-4'>Announcements</h2>
      
      <div className="flex flex-col gap-8">
        {announcements.map(item => (
          <AnnouncementCard title={item.title} date={item.date}/>
        ))}
      </div>
    </div>
  )
}

export default Announcement
