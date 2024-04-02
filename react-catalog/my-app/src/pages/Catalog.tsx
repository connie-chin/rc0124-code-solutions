import { readCatalog } from '../lib';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';
import { toDollars } from '../lib';

export function Catalog() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []); //making sure it only runs once

  console.log(products);

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
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        {/* <div className="row"> */}
        {products.map((product) => (
          <div className="card-container" key={product.productId}>
            {' '}
            {/* here we are creating a unique id with the product and its id*/}
            <ProductCard products={product} />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}

type ProductCard = {
  products: Product;
};

function ProductCard({ products }: ProductCard) {
  return (
    <Link to={`productdetails/${products.productId}`}>
      <img src={products.imageUrl}></img>
      <h5>{products.name}</h5>
      <p className="catalog-price">{toDollars(products.price)}</p>
      <p>{products.shortDescription}</p>
    </Link>
  );
}
