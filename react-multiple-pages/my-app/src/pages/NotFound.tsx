import './NotFound.css';
import { Link } from 'react-router-dom';

// type Props = {
//   onDone: () => void;
// };

export function NotFound() {
  return (
    <div className="Header-content">
      <div className="row">
        <div className="col text-center text-muted mb-5">
          <h3>Uh oh, we could not find the page you were looking for!</h3>
          <Link to="/"> Return to the Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
