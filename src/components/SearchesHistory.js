import { useContext } from "react";
import StyledHeading from "./Heading";
import {
  StyledSearchHistory,
  StyledSearchHistoryListWrapper,
} from "../styles/SearchHistory.styles";
import LocalizantionsContext from "../context/localizationsHistory";
import SingleIpAddress from "./SingleIpAddress";

const SearchesHistory = () => {
  const { localizations } = useContext(LocalizantionsContext);

  const renderHistoryList = () => {
    const list = localizations.map((localization, index) => {
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
