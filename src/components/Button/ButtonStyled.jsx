import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 400px;
  height: 80%;
  padding: 4px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 10px;
  transition: all 200ms ease;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export const ButtonWrapStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: blue;
`;
