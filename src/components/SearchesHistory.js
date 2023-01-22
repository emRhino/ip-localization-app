import { useContext } from "react";
import StyledHeading from "./Heading";
import {
  StyledSearchHistory,
  StyledSearchHistoryListWrapper,
} from "../styles/SearchHistory.styles";
import IPsContext from "../context/IPsHistory";
import SingleIpAddress from "./SingleIpAddress";

const SearchesHistory = () => {
  const { localizations } = useContext(IPsContext);

  const renderHistoryList = () => {
    const reverseList = localizations.reverse();
    const list = reverseList.map((localization, index) => {
      return <SingleIpAddress key={index} address={localization.ip} />;
    });

    return list;
  };

  return (
    <StyledSearchHistory>
      <StyledHeading>Search history</StyledHeading>
      <StyledSearchHistoryListWrapper>
        {renderHistoryList()}
      </StyledSearchHistoryListWrapper>
    </StyledSearchHistory>
  );
};

export default SearchesHistory;
