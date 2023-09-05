import { ModalImgStyled, ModalStyled, ModalWrapStyled } from './Modal.Styled';

export function Modal({ imageURL, tag, onClose }) {
  return (
    <ModalWrapStyled onClick={e => onClose(e)}>
      <ModalStyled>
        <ModalImgStyled name="img" src={imageURL} alt={tag} />
      </ModalStyled>
    </ModalWrapStyled>
  );
}
