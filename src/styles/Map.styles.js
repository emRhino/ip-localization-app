import styled from "styled-components";

const StyledMap = styled.div`
  background: white;
  padding: 1rem;
  grid-area: map-${(props) => props.placeholder};
`;

export default StyledMap;
