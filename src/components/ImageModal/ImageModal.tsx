import Modal from 'react-modal';
Modal.setAppElement('#root');
import css from './ImageModal.module.css'
import { Image } from '../types';
import { R } from 'vite/dist/node/types.d-aGj9QkWt';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

interface ImageModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
  modalData: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpenModal, closeModal, modalData}) => {
  //{console.log({regular})}
  return (
<Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={css.modal}
        >
       <img className={css.modalImg} src={modalData.urls?.regular} alt={modalData.description} />
        <div className={css.info}>
          <p className={css.data}><span className={css.infoTerm}>Location:</span> {modalData.user.location}</p>
          <img className= {css.userPhoto}src={modalData.user.profile_image.medium} alt="users photo" />
          <p className={css.data}><span className={css.infoTerm}>Name:</span> {modalData.user.name}</p>
        </div>
</Modal>
);  };

      export default ImageModal;
      