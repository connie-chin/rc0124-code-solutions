import './Dashboard.css';
import { useEffect, useState } from 'react';
import { type Item, readItems } from '../lib/read';
import { Link } from 'react-router-dom';

// type Props = {
//   onDetails: (itemId: number) => void;
// };
export function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    //awaiting readItems, we want to show error or data that came back
    async function loadItems() {
      try {
        const values = await readItems();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);
  //handing the loading while we are waiting for data, also the error if data doesnt load properly
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <hr />
      <div className="row">
        {items?.map((item) => (
          <div key={item.itemId} className="col-12 col-md-6 col-lg-4">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Item;
};
function ItemCard({ item }: CardProps) {
  return (
    <Link
      to={`/details/${item.itemId}`} //need to use {} bc its a template literal
      className="item card-body text-dark card mb-4 shadow-sm text-decoration-none">
      <h5 className="card-title">{item.name}</h5>
    </Link>
  );
}
