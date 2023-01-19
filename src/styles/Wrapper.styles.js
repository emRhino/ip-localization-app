import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 4rem;
  height: calc(100vh - 8rem);
  display: grid;

  grid-template-columns: 1.2fr 2fr 1.2fr;
  grid-template-rows: 1fr 0.3fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  grid-template-areas:
    "history map-top detail-top"
    "history search search"
    "history map-bottom detail-bottom";
`;

export default StyledWrapper;
