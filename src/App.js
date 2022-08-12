import Cards from "./components/Cards";
import { useState } from 'react';
import Modal from "./components/Modal";
import { AnimatePresence } from 'framer-motion';
import AnimatedTextWord from "./components/AnimatedTextWord";




function App() {
  const [showModal, setShowModal] = useState(false);


  return (

    <div>
      <AnimatePresence exitBeforeEnter onExitComplete={()=> setShowModal(false)}>
      <AnimatedTextWord 
      style={{  
      textAlign: 'center',
      marginBottom: '1em',
      color: '#fff'}} 
      text="Mel Cats Game" />
      {/* <h1>Mel Cats Game</h1> */}
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      
      <Cards setShowModal={setShowModal} />
      </AnimatePresence>
    </div>

  );
}

export default App; 
