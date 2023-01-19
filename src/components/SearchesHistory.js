import { useContext } from "react";
import Heading from "./Heading";
import StyledSearchHistory from "../styles/SearchHistory.styles";
import LocalizantionsContext from "../context/localizationsHistory";

const SearchesHistory = () => {
  const { localizations } = useContext(LocalizantionsContext);

  return (
    <StyledSearchHistory>
      <Heading>Search history</Heading>
      {localizations.map((localization) => (
        <div>{}</div>
      ))}
    </StyledSearchHistory>
  );
};

export default SearchesHistory;
