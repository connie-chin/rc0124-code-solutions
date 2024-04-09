import './AppDrawer.css';
import { FaBars } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import { type MenuItem } from './Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Props = {
  menuItems: MenuItem[];
};

//if there is an isopen prop, apply a css class to it line 23

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false); //closed at first

  function handleBarClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container-app-drawer">
      <div className={`navbar-app-drawer ${isOpen ? 'is-open' : ''}`}>
        <FaBars onClick={handleBarClick} className="bars" />
        <ul className="navbar-nav mr-auto">
          {isOpen && <h3 className="nav-bar-heading">Hylian Shopping</h3>}
          {menuItems.map((menu) => (
            <li key={menu.name}>
              <Link to={menu.path}>
                <img
                  src={menu.iconUrl}
                  className={`nav-bar-icon ${isOpen ? 'is-open-icon' : ''}`}
                />
                {isOpen && <p>{menu.name}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
