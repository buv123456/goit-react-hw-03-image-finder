import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

export const SearchbarStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #162ae0;
`;

export const InputStyled = styled.input`
  font-size: 20px;
  width: 300px;
  padding: 4px 4px 4px 38px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const ButtonSearchStyled = styled.button`
  position: absolute;
  padding: 4px 0 0 4px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const BiSearchStyled = styled(BiSearch)`
  width: 28px;
  height: 28px;
  display: block;
`;
