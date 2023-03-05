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
  const { localizations, previousLocalization, lastLocalization } =
    useContext(IPsContext);

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
        <Map
          placeholder="top"
          title="Current IP location"
          targetData={lastLocalization}
        />
        <Map
          placeholder="bottom"
          title="Prevoius IP location"
          targetData={previousLocalization}
        />
        <LocationDetails
          placeholder="top"
          title="Current IP details"
          targetData={lastLocalization}
        />
        <LocationDetails
          placeholder="bottom"
          targetData={previousLocalization}
          title="Previous IP details"
        />
      </Wrapper>
    </>
  );
};

export default App;
