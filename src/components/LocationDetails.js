import StyledLocationDetails from "../styles/LocationDetails.styles";
import PropTypes from "prop-types";

const LocationDetails = ({ placeholder }) => {
  return (
    <StyledLocationDetails placeholder={placeholder}>
      Detale
    </StyledLocationDetails>
  );
};

LocationDetails.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
};

export default LocationDetails;
