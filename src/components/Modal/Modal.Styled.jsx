import styled from 'styled-components';

export const ModalWrapStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: #000000a9;
`;

export const ModalStyled = styled.div`
  max-width: 80%;
  height: 80%;
  overflow: hidden;
`;

export const ModalImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
