import PropTypes from "prop-types";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import StyledMap from "../styles/Map.styles";
import StyledHeading from "../styles/Heading.styles";

// https://www.npmjs.com/package/@react-google-maps/api

const Map = ({ placeholder, title, isPreviousLocation }) => {
  return (
    <StyledMap placeholder={placeholder}>
      <StyledHeading>{title}</StyledHeading>
    </StyledMap>
  );
};

Map.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
};

export default Map;
