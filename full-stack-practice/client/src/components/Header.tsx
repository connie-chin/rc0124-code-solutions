import './Header.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <>
      <div className="navBarContainer">
        <div>
          <Link to="/about" className="title">
            About
          </Link>
        </div>
        <div>
          <Link to="/" className="title">
            Catalog
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
