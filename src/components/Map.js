import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import PropTypes from "prop-types";
import StyledMap from "../styles/Map.styles";
import Heading from "../styles/Heading.styles";

const containerStyle = {
  width: "100%",
  height: "calc(100% - 36px)",
};

const Map = ({ placeholder, title, targetData }) => {
  const isLocationToShow = targetData?.latitude && targetData?.longitude;

  const center = {
    lat: targetData?.latitude || 0,
    lng: targetData?.longitude || 0,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GMAP_API,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <StyledMap placeholder={placeholder}>
      <Heading>{title}</Heading>
      {isLoaded && isLocationToShow ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            <Marker position={center} />
          </>
        </GoogleMap>
      ) : (
        <>
          <p>There is no location to show</p>
        </>
      )}
    </StyledMap>
  );
};

Map.propTypes = {
  placeholder: PropTypes.oneOf(["top", "bottom"]),
  title: PropTypes.string,
};

export default React.memo(Map);
