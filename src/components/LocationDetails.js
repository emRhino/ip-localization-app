import PropTypes from "prop-types";

import {
  StyledLocationDetails,
  StyledLocationDetailsLabel,
  StyledLocationDetailsItem,
  StyledLocationDetailsIValue,
} from "../styles/LocationDetails.styles";
import StyledHeading from "../styles/Heading.styles";

const LocationDetails = ({ placeholder, targetData, title }) => {
  const renderDetails = () => {
    if (!targetData) {
      return false;
    }

    return (
      <>
        <StyledLocationDetailsItem>
          <StyledLocationDetailsLabel>IP address</StyledLocationDetailsLabel>
          <StyledLocationDetailsIValue>
            {targetData.ip} ({targetData.type}){" "}
            <img src={targetData.location.country_flag} alt="" />
          </StyledLocationDetailsIValue>
        </StyledLocationDetailsItem>
        <StyledLocationDetailsItem>
          <StyledLocationDetailsLabel>Place</StyledLocationDetailsLabel>
          <StyledLocationDetailsIValue>
            {targetData.city}, {targetData.region_name}
          </StyledLocationDetailsIValue>
        </StyledLocationDetailsItem>
        <StyledLocationDetailsItem>
          <StyledLocationDetailsLabel>Zip-code</StyledLocationDetailsLabel>
          <div>{targetData.zip}</div>
        </StyledLocationDetailsItem>
      </>
    );
  };

  return (
    <StyledLocationDetails placeholder={placeholder}>
      <StyledHeading>{title}</StyledHeading>
      {renderDetails()}
    </StyledLocationDetails>
  );
};

LocationDetails.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
  targetData: PropTypes.oneOf(["previus"]),
};

export default LocationDetails;
