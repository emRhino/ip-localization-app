import StyledMap from "../styles/Map.styles";
import PropTypes from "prop-types";

const Map = ({ placeholder }) => {
  return <StyledMap placeholder={placeholder}>Mapa</StyledMap>;
};

Map.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
};

export default Map;
