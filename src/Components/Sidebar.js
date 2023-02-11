import { FaTimes } from "react-icons/fa";
import logo from "../logo.svg";
import { links, social } from "../data";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext();
  return (
    <div className={`${sidebar ? `sidebar show-sidebar` : `sidebar`}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logog" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((socials) => {
          const { id, icon, url } = socials;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
