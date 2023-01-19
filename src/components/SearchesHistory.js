import styled from "styled-components";
import Heading from "./Heading";

const StyledSearchHistory = styled.div`
  background: white;
  padding: 1rem;
  grid-area: history;
`;

const SearchesHistory = () => {
  return (
    <StyledSearchHistory>
      <Heading>Searches history</Heading>
    </StyledSearchHistory>
  );
};

export default SearchesHistory;
