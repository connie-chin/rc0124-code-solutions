import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="about" element={<About />} />
          <Route index element={<Catalog />} />
          <Route
            path="productdetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
