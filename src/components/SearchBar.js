import {
  StyledForm,
  StyledInput,
  StyledSubmit,
} from "../styles/SearchBar.styles";

const SearchBar = () => {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="Type IP Address or URL" />
      <StyledSubmit>Search</StyledSubmit>
    </StyledForm>
  );
};

export default SearchBar;
