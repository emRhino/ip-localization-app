import PropTypes from "prop-types";
import { Fragment } from "react";
import {
  DetailsWrapper,
  Label,
  Item,
  Value,
  Image,
} from "../styles/LocationDetails.styles";
import Heading from "../styles/Heading.styles";

const LocationDetails = ({ placeholder, targetData, title }) => {
  const renderDetails = () => {
    return (
      <Fragment>
        <Item>
          <Label>IP address</Label>
          <Value>
            {targetData?.ip} ({targetData?.type}){" "}
            <Image src={targetData?.location?.country_flag} />
          </Value>
        </Item>
        <Item>
          <Label>Place</Label>
          <Value>
            {targetData?.city}, {targetData?.region_name}
          </Value>
        </Item>
        <Item>
          <Label>Zip-code</Label>
          <div>{targetData?.zip}</div>
        </Item>
      </Fragment>
    );
  };

  return (
    <DetailsWrapper placeholder={placeholder}>
      <Heading>{title}</Heading>
      {targetData?.latitude ? renderDetails() : "There is no location to show"}
    </DetailsWrapper>
  );
};

LocationDetails.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
};

export default LocationDetails;
