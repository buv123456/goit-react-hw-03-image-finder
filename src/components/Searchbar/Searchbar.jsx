import {
  BiSearchStyled,
  ButtonSearchStyled,
  InputStyled,
  SearchbarStyled,
} from './SearchbarStyled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarStyled>
      <form onSubmit={e => onSubmit(e)}>
        <ButtonSearchStyled type="submit">
          <BiSearchStyled />
        </ButtonSearchStyled>
        <InputStyled
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        ></InputStyled>
      </form>
    </SearchbarStyled>
  );
};
