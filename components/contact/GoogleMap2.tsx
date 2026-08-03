"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import type { Libraries } from "@react-google-maps/api";

// Defined at module scope so the array identity is stable across renders
// (a new array each render makes the loader warn about an unintended reload).
const LIBRARIES: Libraries = ["marker"];

// Tracks maps that already have the marker, so onLoad doesn't add it twice.
const markerAdded = new WeakSet<google.maps.Map>();

const MAP_HEIGHT = 450;

const containerStyle = {
  width: "100%",
  height: `${MAP_HEIGHT}px`,
};

const center = {
  lat: -37.8602828,
  lng: 145.079616,
};

// Contact - alternate embedded Google Map.
export default function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAV1KS10sb3O462XosfZTKohHJwi6C0joo",
    libraries: LIBRARIES,
  });

  const onLoad = (map: google.maps.Map) => {
    if (markerAdded.has(map)) return;
    markerAdded.add(map);

    // Advanced Marker (replaces the deprecated google.maps.Marker).
    // Its content is a plain <img>, so the custom icon is preserved.
    const markerImg = document.createElement("img");
    markerImg.src = "/assets/img/map/icon-location.png";
    markerImg.width = 48;
    markerImg.height = 48;

    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      content: markerImg,
    });
  };

  return isLoaded ? (
    <div className="map-wrapper">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        options={{
          mapId: "b4cb8e5cc7488a8c995f6b34",
          disableDefaultUI: true,
          scrollwheel: false,
        }}
      >
        {/* Marker is created imperatively in onLoad (AdvancedMarkerElement) */}
      </GoogleMap>
    </div>
  ) : (
    // Reserve the map's height while the Google Maps API loads to avoid layout shift.
    <div className="map-wrapper" style={{ height: MAP_HEIGHT }} aria-hidden="true" />
  );
}
