import "./Modals.css"
import ReactDOM from 'react-dom';

const ModalPortal = ({children, isOpen, closeModal}) => {
    const handlePropagation = (e) => e.stopPropagation();
    return ReactDOM.createPortal( 
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handlePropagation}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>,
        document.getElementById("modal")
     );
}
 
export default ModalPortal;