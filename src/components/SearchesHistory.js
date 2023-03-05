import { useContext } from "react";
import Heading from "./Heading";
import {
  StyledSearchHistory,
  ListWrapper,
} from "../styles/SearchHistory.styles";
import IPsContext from "../context/IPsHistory";
import SingleIpAddress from "./SingleIpAddress";

const SearchesHistory = () => {
  const { localizations } = useContext(IPsContext);

  const renderHistoryList = () => {
    const list = localizations.map((localization, index) => {
      return <SingleIpAddress key={index} address={localization.ip} />;
    });

    return list;
  };

  return (
    <StyledSearchHistory>
      <Heading>Search history</Heading>
      <ListWrapper>{renderHistoryList()}</ListWrapper>
    </StyledSearchHistory>
  );
};

export default SearchesHistory;
