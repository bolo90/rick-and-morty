import { useDispatch, useSelector } from 'react-redux';
import { closeModal, modalState } from '../../store/modal/modalSlice';
import { ModalContainer, Backdrop, ModalContent } from './Modal.styled';
import CharacterDetailModal from './CharacterDetailModal';
import Spinner from '../Spinner';

const Modal = () => {
  const { show, type, loading } = useSelector(modalState);
  const dispatch = useDispatch();

  const getModal = () => {
    switch (type) {
      case 'location': return <h1>Location</h1>; // TODO
      case 'characterDetail': return <CharacterDetailModal />;
    }
  };

  return (
    <Backdrop show={show} onClick={() => dispatch(closeModal())}>
      { loading ? <Spinner color="light" /> :
        <ModalContainer>
          <ModalContent>
            {getModal()}
          </ModalContent>
        </ModalContainer>
      }
    </Backdrop>
  );
};

export default Modal;
