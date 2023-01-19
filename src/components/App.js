import { Normalize } from "styled-normalize";
import GlobalStyle from "../theme/GlobalStyle";
import Wrapper from "./Wrapper";
import SearchBar from "./SearchBar";
import SearchesHistory from "./SearchesHistory";
import Map from "./Map";
import LocationDetails from "./LocationDetails";

const App = function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Wrapper>
        <SearchesHistory />
        <SearchBar />
        <Map placeholder="top" />
        <Map placeholder="bottom" />
        <LocationDetails placeholder="top" />
        <LocationDetails placeholder="bottom" />
      </Wrapper>
    </>
  );
};

export default App;
