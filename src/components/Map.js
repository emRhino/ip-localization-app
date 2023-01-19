import styled from "styled-components";
import PropTypes from "prop-types";

const Map = ({ placeholder }) => {
  const StyledMap = styled.div`
    background: purple;
    grid-area: map-${placeholder === "top" ? "top" : "bottom"};
  `;

  return <StyledMap>Mapa</StyledMap>;
};

Map.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
};

export default Map;
