import styled from 'styled-components';

export const ImageGalleryStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 50px;
  padding: 10px;
`;

export const ModalImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
