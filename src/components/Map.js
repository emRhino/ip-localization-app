import PropTypes from "prop-types";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import StyledMap from "../styles/Map.styles";

// https://www.npmjs.com/package/@react-google-maps/api

const Map = ({ placeholder, isPreviousLocation }) => {
  return <StyledMap placeholder={placeholder}>Mapa</StyledMap>;
};

Map.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
};

export default Map;
