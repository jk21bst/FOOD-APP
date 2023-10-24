import { Fragment } from 'react';
import classes from './Modal.module.css';
import { createPortal } from 'react-dom';

//we want to use React Portals for backdrops so the thing behind the overlay which blocks the interaction with the rest of the page and also We want to render the modal overlay itself eith react portal  
//to use that component wherever we want bit render the actual HTML element in the specific place in the DOM tree 

//to render portal we need to go to index.html file and there we have root div where our overall react app is being rendererd and above that rooot div 
//we will add another div with an id od overlays 
//


const Backdrop =(props) =>{
    return(
        <div className={classes.backdrop} onClick={props.onClose} />

    )
};



const ModalOverlay =(props) =>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>

    )
};

// WE ARE USING PORTALS HERE BECAUSE WE  DONT WANT THAT THE html IS NOT EVERYWHERE AT ALL PLACES WE WILL USE IT HERE 

const portalElement= document.getElementById('overlays');



const Modal = (props) =>{
    return(
<Fragment>
{/* <Backdrop/>
<ModalOverlay>{props.children}</ModalOverlay> */}

{createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
{createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
</Fragment>
    )
};
export default Modal;