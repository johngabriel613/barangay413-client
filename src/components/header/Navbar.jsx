import { mail, phone } from "../../constants/icons";
import { manilaSeal } from "../../constants/images";
import { header, navLinks } from "../../constants/texts";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white border-b border-slate-400 py-4 z-[998]">
      <ul className="container flex gap-8 uppercase text-sm font-medium">
        {navLinks.map(item => (
          <li key={item.id}>
            <NavLink className="navlink" to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
