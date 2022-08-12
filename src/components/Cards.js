import { useState, useEffect } from 'react'
import Card from './Card';
import Modal from './Modal';



function Cards({setShowModal}){
    const [ items, setItems] = useState([
        { id: 1, img: '/img/lila1.png', stat: "" },
        { id: 1, img: '/img/lila1.png', stat: "" },
        { id: 2, img: '/img/lila2.png', stat: "" },
        { id: 2, img: '/img/lila2.png', stat: "" },
        { id: 3, img: '/img/lila3.png', stat: "" },
        { id: 3, img: '/img/lila3.png', stat: "" },
        { id: 4, img: '/img/moshi1.png', stat: "" },
        { id: 4, img: '/img/moshi1.png', stat: "" },
        { id: 5, img: '/img/simim1.png', stat: "" },
        { id: 5, img: '/img/simim1.png', stat: "" },
        { id: 6, img: '/img/moshi2.png', stat: "" },
        { id: 6, img: '/img/moshi2.png', stat: "" },
        { id: 7, img: '/img/todos.png', stat: "" },
        { id: 7, img: '/img/todos.png', stat: "" },
        { id: 8, img: '/img/tiff2.png', stat: "" },
        { id: 8, img: '/img/tiff2.png', stat: "" }

    ].sort(() => Math.random() - 0.5))
    //uso sort para que cada vez que se vean mis items aparezcan mezclados
    
 

    const [prev, setPrev] = useState(-1)

    function isGameFinished(element){
        return element.stat === "correct"
    }

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            if (items.every(isGameFinished)){
               setShowModal(true)
            }
            setPrev(-1)
            
           
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setShowModal(false)
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowModal();
        }, 5000)
    }, [setShowModal])


    /* function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            
           
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    } */

//click event listener

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
            console.log(id)
        }else{
            check(id)

        }

    }


// mapeo mis items
// paso datos por props a Card.js

    return (
        <>
            
            <div className="container">
         
                { items.map((item, index) => (
                   
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                    
                )) }

            <Modal setItems={setItems} />
            </div>
        </>
    )


}




export default Cards