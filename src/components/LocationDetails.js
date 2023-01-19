import { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import StyledLocationDetails from "../styles/LocationDetails.styles";
import LocalizantionsContext from "../context/localizationsHistory";
import StyledHeading from "../styles/Heading.styles";

const LocationDetails = ({ placeholder, targetData }) => {
  const { localizations } = useContext(LocalizantionsContext);

  // useEffect(() => {

  // }, [localizations]);

  // const getData = () => {
  //   if (localizations.length) {
  //     return false;
  //   }

  //   if (targetData === "previus") {
  //     return <div>{localizations[1].ip}</div>;
  //   }

  //   return <div>{localizations[0].ip}</div>;
  // };

  return (
    <StyledLocationDetails placeholder={placeholder}>
      <StyledHeading>Location details</StyledHeading>
      {}
    </StyledLocationDetails>
  );
};

LocationDetails.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
  targetData: PropTypes.oneOf(["previus"]),
};

export default LocationDetails;
