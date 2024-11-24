import Modal from 'react-modal';
Modal.setAppElement('#root');
import css from './ImageModal.module.css'

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
const ImageModal = ({ isOpenModal, closeModal, regular, location, description, name, medium}) => {
  //{console.log({regular})}
  return (
<Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={css.modal}
        >
       <img className={css.modalImg} src={regular} alt={description} />
        <div className={css.info}>
          <p className={css.data}><span className={css.infoTerm}>Location:</span> {location}</p>
          <img className= {css.userPhoto}src={medium} alt="users photo" />
          <p className={css.data}><span className={css.infoTerm}>Name:</span> {name}</p>
        </div>
</Modal>
);  };

      export default ImageModal;
      