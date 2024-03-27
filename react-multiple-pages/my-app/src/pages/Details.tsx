import { useEffect, useState } from 'react';
import { type Item, readItem } from '../lib/read';
import './Details.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// type Props = {
//   itemId: number;
//   onDone: () => void;
// };
export function Details() {
  const { itemId } = useParams(); //lets us access variables stored in url. this variable needs to match the path value from App.tsx
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate(); //call it, pass it a path and it will go there. programmatically redirects

  useEffect(() => {
    async function loadItem(itemId: number) {
      try {
        const item = await readItem(itemId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (itemId) {
      setIsLoading(true);
      loadItem(+itemId);
    }
  }, [itemId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {itemId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, image, description } = item;

  function handleClick() {
    alert(`Saved ${name}`); // item?.name
    navigate('/');
  }
  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <Link to="/" className="btn text-secondary">
                &lt; Back to Dashboard
              </Link>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-5">
              <img src={image} alt={name} className="image" />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <h2>{name}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}
