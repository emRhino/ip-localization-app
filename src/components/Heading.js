import styled from "styled-components";

const StyledHeading = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
`;

const heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default heading;
