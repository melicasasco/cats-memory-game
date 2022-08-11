import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';

const backdrop = {
    visible: { opacity: 1},
    hidden: { opacity: 0}
}

const modal = {
    hidden: {
        y: "-110vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: {delay: 0.5}
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter onExitComplete={()=> setShowModal(false)}>
            { showModal && (
                <motion.div className='backdrop'
                variants={backdrop}
                initial="hidden"
                animate="visible" 
                exit="hidden"
                >
                    <motion.div className='modal'
                     variants={modal}
                     >
                    
                        <h2 style={{paddingBottom: '30px'}}>¡You won!</h2>
                     
                       <Button className='button' variant="outlined" style={{color: "black"}} onClick={()=> setShowModal(false)}>Exit</Button>

                    </motion.div>
                </motion.div>
               
            )}
        </AnimatePresence>
    )
}

export default Modal;