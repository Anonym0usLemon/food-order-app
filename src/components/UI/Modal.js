import classes from "./Modal.module.css";
import ReactDOM from "react-dom"; 

const Backdrop = props => {
    function hideCart() {
        props.closeCart(); 
    }

    return <div onClick={hideCart} className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    function hideCart() {
        props.closeCart(); 
    }

    return (
        <>
            {ReactDOM.createPortal(<Backdrop closeCart={hideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    );  
}

export default Modal; 