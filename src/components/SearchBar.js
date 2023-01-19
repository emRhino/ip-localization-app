import styled from "styled-components";

const StyledForm = styled.form`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: search;
  padding: 1rem;
  display: flex;
`;

const StyledfInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-right: 0.75rem;
`;

const StyledfSubmit = styled.button`
  font-size: 1.2rem;
  padding: 12px 24px;
  border: black;
  color: white;
  background: black;
  text-transform: uppercase;

  &:hover {
    background: rgba(0, 0, 0, 0.85);
    cursor: pointer;
  }
`;

const SearchBar = () => {
  return (
    <StyledForm>
      <StyledfInput type="text" placeholder="Type IP Address or URL" />
      <StyledfSubmit>Search</StyledfSubmit>
    </StyledForm>
  );
};

export default SearchBar;
