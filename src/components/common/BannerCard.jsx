import { info } from "../../constants/texts"


const BannerCard = () => {
  return (
    <div className="absolute bottom-[-55px] container bg-white py-8 rounded-lg shadow-lg">
      <ul className="flex-center justify-between w-full max-w-[1000px] mx-auto">
        {info.map(item =>(
          <li key={item.id} className="flex-center gap-2">
            <img src={item.icon} alt="" width={52}/>
            <div>
              <span className="text-3xl font-bold text-primary">{item.dataNum}</span>
              <p className="text-gray-500">{item.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BannerCard
