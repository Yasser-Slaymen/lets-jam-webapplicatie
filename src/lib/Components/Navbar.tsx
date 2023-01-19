import "../Stylingcomponents/Nav.css";
import NavLink from "./NavLink";
import logo from "../Images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink logo={logo} title="" link="" />
      </div>
      <ul className="list-items">
        <li>
          <NavLink title="Home" link="/home" />
        </li>
        <li>
          <NavLink title="PAGES" link="/page" />
        </li>
        <li>
          <NavLink title="BLOG" link="/blog" />
        </li>
        <li>
          <NavLink title="SERVICES" link="/sevices" />
        </li>
        <li>
          <NavLink title="CONTACT" link="/contact" />
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

