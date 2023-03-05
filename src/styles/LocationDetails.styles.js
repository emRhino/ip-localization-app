import styled from "styled-components";

export const DetailsWrapper = styled.div`
  grid-area: detail-${(props) => props.placeholder};
  background: white;
  padding: 1rem;
`;

export const Label = styled.dt`
  padding-bottom: 4px;
  margin-bottom: 4px;
  border-bottom: 1px solid grey;
  font-style: italic;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 20px;
`;

export const Value = styled.dd`
  margin: 0;
`;

export const Item = styled.dl`
  margin-bottom: 16px;
`;
