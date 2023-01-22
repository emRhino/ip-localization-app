import styled from "styled-components";

export const StyledLocationDetails = styled.div`
  grid-area: detail-${(props) => props.placeholder};
  background: white;
  padding: 1rem;
`;

export const StyledLocationDetailsLabel = styled.dt`
  padding-bottom: 4px;
  margin-bottom: 4px;
  border-bottom: 1px solid grey;
  font-style: italic;
  font-size: 14px;
`;

export const StyledLocationDetailsIValue = styled.dd`
  margin: 0;
`;

export const StyledLocationDetailsItem = styled.dl`
  margin-bottom: 16px;
`;
