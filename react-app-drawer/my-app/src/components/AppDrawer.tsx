import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { type MenuItem } from './Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false); //closed at first
  function handleBarClick() {
    console.log('bars clicked');
    setIsOpen(true);
    console.log(isOpen);
  }

  return (
    <div className="container-app-drawer">
      <nav className="navbar-app-drawer">
        <FaBars onClick={handleBarClick} className="bars" />
        <ul className="navbar-nav mr-auto">
          {menuItems.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.path}>
                <img src={menu.iconUrl} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="rest-of-content-app-drawer">
        <Outlet />
      </div>
    </div>
  );
}
