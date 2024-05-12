
const AnnouncementCard = ({title, date}) => {
  return (
    <div className="flex flex-col gap-2 border-l-8 border-primary py-4 pl-4">
      <span className="font-medium text-gray-500">{date}</span>
      <p className="font-medium text-primary">{title}</p>
    </div>
  )
}

export default AnnouncementCard
