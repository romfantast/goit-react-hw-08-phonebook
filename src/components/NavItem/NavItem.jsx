import { NavLink } from 'react-router-dom';
import css from './NavItem.module.css';

const NavItem = ({ children, path = '/' }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? css.active : css.navLink)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
