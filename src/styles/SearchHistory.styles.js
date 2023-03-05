import styled from "styled-components";

export const StyledSearchHistory = styled.div`
  background: white;
  padding: 1rem;
  grid-area: history;
  overflow-y: auto;
`;

export const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const HistoryListElement = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid lightgray;

  &:last-child {
    border-bottom: none;
  }
`;
