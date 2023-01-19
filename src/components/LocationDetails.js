import styled from "styled-components";
import PropTypes from "prop-types";

const LocationDetails = ({ placeholder }) => {
  const StyledLocationDetails = styled.div`
    background: purple;
    grid-area: detail-${placeholder};
  `;

  return <StyledLocationDetails>Detale</StyledLocationDetails>;
};

LocationDetails.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
};

export default LocationDetails;
