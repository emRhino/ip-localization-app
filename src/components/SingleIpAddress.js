import { StyledSearchHistoryListElement } from "../styles/SearchHistory.styles";

const SingleIpAddress = ({ address }) => {
  return (
    <StyledSearchHistoryListElement>{address}</StyledSearchHistoryListElement>
  );
};

export default SingleIpAddress;
