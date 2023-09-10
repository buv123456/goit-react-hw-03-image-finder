import { ButtonStyled, ButtonWrapStyled } from './ButtonStyled';

export function Button({ onClick }) {
  return (
    <ButtonWrapStyled>
      <ButtonStyled type="button" onClick={() => onClick()}>
        Load more
      </ButtonStyled>
    </ButtonWrapStyled>
  );
}
