import { mail, phone } from "../../constants/icons";
import { bgpilipinasSeal, brgySeal, manilaSeal } from "../../constants/images";
import { header} from "../../constants/texts";

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-400">
      <div className="container py-4">
        <div className="flex-center justify-between">
          <div className="flex-center gap-2">
            <img src={brgySeal} alt="" width={75}/>
            <img src={manilaSeal} alt="" width={75}/>
            <img src={bgpilipinasSeal} alt="" width={75}/>
            {/* <div className="text-2xl font-bold text-primary uppercase leading-tight">
              <span>{header.title}</span>
              <p>{header.subtitle}</p>
            </div> */}
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <img src={phone} alt="" width={22} className="self-start"/>
              <div>
                <p className="text-gray-400">Have any question?</p>
                <p className="font-medium">{header.phoneNum}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={mail} alt="" width={22} className="self-start"/>
              <div>
                <p className="text-gray-400">Have any question?</p>
                <p className="font-medium">{header.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
