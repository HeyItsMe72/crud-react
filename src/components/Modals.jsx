import { useModal } from "../hooks/useModal"
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenPortalModal, openPortalModal, closePortalModal] = useModal(false);

    return(
        <div>
            <h2>Modals</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal1</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati harum alias rem laudantium numquam natus sed 
                    officia veniam ipsa earum amet, neque velit cum tenetur 
                    expedita modi iure assumenda dolorem?
                </p>
                <div>Image</div>
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal2</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati harum alias rem laudantium numquam natus sed 
                    officia veniam ipsa earum amet, neque velit cum tenetur 
                    expedita modi iure assumenda dolorem?
                </p>
                <div>Image</div>
            </Modal>
            <button onClick={openPortalModal}>Portal Modal</button>
            <ModalPortal isOpen={isOpenPortalModal} closeModal={closePortalModal}>
                <h3>Portal Modal</h3>
                <p>Este modal es renderizado en un nodo diferente de donde corre app.
                </p>
                <div>Image</div>
            </ModalPortal>
        </div>
    )
}

export default Modals;