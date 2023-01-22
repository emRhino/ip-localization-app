import { useContext } from "react";
import { Normalize } from "styled-normalize";
import GlobalStyle from "../styles/GlobalStyle";
import Wrapper from "./Wrapper";
import SearchBar from "./SearchBar";
import SearchesHistory from "./SearchesHistory";
import Map from "./Map";
import LocationDetails from "./LocationDetails";
import IPsContext from "../context/IPsHistory";

const App = function App() {
  const { localizations } = useContext(IPsContext);

  // useEffect(() => {
  //   const targetData = () => {

  //   }
  // }, [localizations]);

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Wrapper>
        <SearchesHistory />
        <SearchBar />
        <Map placeholder="top" title="Current IP location" />
        <Map placeholder="bottom" title="Prevoius IP location" />
        <LocationDetails
          placeholder="top"
          title="Current IP details"
          targetData={
            localizations.length > 0
              ? localizations[localizations.length - 1]
              : null
          }
        />
        <LocationDetails
          placeholder="bottom"
          targetData={
            localizations.length > 1
              ? localizations[localizations.length - 2]
              : null
          }
          title="Previous IP details"
        />
      </Wrapper>
    </>
  );
};

export default App;
