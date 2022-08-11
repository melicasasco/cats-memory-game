import Cards from "./components/Cards";
import { useState } from 'react';
import Modal from "./components/Modal";



function App() {
  const [showModal, setShowModal] = useState(false);


  return (

    <div>
      <h1>Mel Cats Game</h1>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Cards setShowModal={setShowModal} />
    </div>

  );
}

export default App; 
