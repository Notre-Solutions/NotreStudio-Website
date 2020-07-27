import React from "react";
import GoogleMapReact from "google-map-react";

const isClient = typeof window !== "undefined";
const AnyReactComponent = () => (
  <div className="fa fa-map-marker fa-3x" style={{ color: "red" }}></div>
);

const GoogleMap = () => {
  const lng = -0.113655;
  const lat = 51.50555;
  return (
    <div class="">
      <div id="map">
        {isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCYYuO8lTA6_BlN2kj5iOxmSGBqfsQG5X4",
            }}
            defaultCenter={[lat, lng]}
            defaultZoom={14}
          >
            <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
          </GoogleMapReact>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;
