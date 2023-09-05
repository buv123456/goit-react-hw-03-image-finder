import styled from 'styled-components';

export const ItemStyled = styled.li`
  width: calc((100% / 3) - 10px);
  height: 300px;
  overflow: hidden;
`;

export const ImgItemStyled = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
`;
