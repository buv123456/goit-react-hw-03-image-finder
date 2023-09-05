import { SearchbarStyled } from './SearchbarStyled';

export const Searchbar = ({ onSubmit, query }) => {
  return (
    <SearchbarStyled>
      <form onSubmit={e => onSubmit(e)}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={query || 'Search images and photos'}
        />
      </form>
    </SearchbarStyled>
  );
};
