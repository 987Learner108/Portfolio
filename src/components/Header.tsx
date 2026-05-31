import { NavLink } from "react-router-dom";
import logo from "../assets/MyLogoPNG.png";
const Header = () => {
  const onHover = `relative inline-block text-gray-500 \
   after:content-[''] after:absolute after:left-0 after:bottom-0 \
   after:h-[2px] after:w-0 after:bg-black \
   after:transition-all after:duration-300 \
   hover:text-black hover:after:w-full`;
    
    const activeStyle = `text-black after:w-full`;
    
  const isActiveStyle = ({ isActive }: { isActive: boolean }) =>
        `${onHover} ${isActive ? activeStyle : ""}`;
    
  return (
    <header className="min-w-full text-amber-100 font-serif bg-[#d2c089]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-5">
        <div className="flex flex-cols md:flex-row">
          <img src={logo} alt="MyLogo" className="h-15" />
          <h2 className="pt-4 text-4xl ">Portfolio</h2>
        </div>
        <div className="flex flex-wrap  gap-5 text-xl p-1">
          <NavLink to="/" className={isActiveStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={isActiveStyle}>
            About
          </NavLink>
          <NavLink to="/project" className={isActiveStyle}>
            Project
          </NavLink>
          <NavLink to="/contact" className={isActiveStyle}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
