import styled from "styled-components";

const StyledLocationDetails = styled.div`
  background: purple;
  grid-area: detail-${(props) => props.placeholder};
`;

export default StyledLocationDetails;
