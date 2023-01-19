import styled from "styled-components";

const StyledMap = styled.div`
  background: purple;
  grid-area: map-${(props) => props.placeholder};
`;

export default StyledMap;
