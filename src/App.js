import Cards from "./components/Cards";
import { react, useState} from 'react';
import Button from '@mui/material/Button';
import Modal from "./components/Modal";
import { AnimatePresence } from 'framer-motion';


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
