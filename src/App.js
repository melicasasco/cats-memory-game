import Cards from "./components/Cards";
import { useState } from 'react';
import Modal from "./components/Modal";
import { AnimatePresence } from 'framer-motion';



function App() {
  const [showModal, setShowModal] = useState(false);


  return (

    <div>
      <AnimatePresence exitBeforeEnter onExitComplete={()=> setShowModal(false)}>
      <h1>Mel Cats Game</h1>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      
      <Cards setShowModal={setShowModal} />
      </AnimatePresence>
    </div>

  );
}

export default App; 
