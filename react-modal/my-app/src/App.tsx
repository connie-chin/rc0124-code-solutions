import './App.css';
import { Modal } from './Modal';
import { useState } from 'react';

function App() {
  const [shouldOpen, setShouldOpen] = useState(false);

  function handleDelete() {
    setShouldOpen(false);
    alert(`Something has been deleted`);
  }

  return (
    <>
      <button onClick={() => setShouldOpen(true)}>Delete me!</button>
      <Modal isOpen={shouldOpen} onClose={() => setShouldOpen(false)}>
        <p className="button-container">
          Do you really want to delete?
          <div>
            <button onClick={() => setShouldOpen(false)}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </p>
      </Modal>
    </>
  );
}

export default App;
