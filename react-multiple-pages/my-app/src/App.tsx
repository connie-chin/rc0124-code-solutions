// import { useState } from 'react';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Route, Routes } from 'react-router-dom';

export function App() {
  // const [page, setPage] = useState('dashboard');
  // const [itemId, setItemId] = useState<number>();

  // function handleDetails(itemId: number): void {
  //   setPage('details');
  //   setItemId(itemId);
  // }

  return (
    <>
      {/* <Header onNavigate={(page) => setPage(page)} />
      {page === 'dashboard' && <Dashboard onDetails={handleDetails} />}
      {page === 'details' && (
        <Details itemId={itemId} onDone={() => setPage('dashboard')} />
      )}
      {page === 'about' && <About />}
      {page === undefined && <NotFound onDone={() => setPage('dashboard')} />} */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Dashboard />} />
          <Route path="details/:itemId" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />{' '}
          {/* this is like a catch all route, if its anything but those about, it will return this page for us... a 404 page we set up*/}
        </Route>
      </Routes>
    </>
  );
}
