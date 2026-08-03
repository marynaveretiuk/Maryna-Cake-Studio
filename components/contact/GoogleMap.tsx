"use client";

import { GoogleMap, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import type { Libraries } from "@react-google-maps/api";
import { useRef, useState } from "react";

// Defined at module scope so the array identity is stable across renders
// (a new array each render makes the loader warn about an unintended reload).
const LIBRARIES: Libraries = ["marker"];

// Tracks maps that already have the custom zoom control, so onLoad doesn't add it twice.
const zoomControlAdded = new WeakSet<google.maps.Map>();

const MAP_HEIGHT = 650;

const containerStyle = {
  width: "100%",
  height: `${MAP_HEIGHT}px`,
};

const center = {
  lat: -37.8602828,
  lng: 145.079616,
};

// Contact - embedded Google Map.
export default function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAV1KS10sb3O462XosfZTKohHJwi6C0joo",
    libraries: LIBRARIES,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [open, setOpen] = useState(true);

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    if (zoomControlAdded.has(map)) return;
    zoomControlAdded.add(map);

    // Custom zoom buttons (default UI is disabled below).
    const controlDiv = document.createElement("div");
    controlDiv.className = "map-zoom-controls";

    const zoomIn = document.createElement("div");
    zoomIn.className = "map-zoom-in-btn";
    zoomIn.innerText = "+";

    const zoomOut = document.createElement("div");
    zoomOut.className = "map-zoom-out-btn";
    zoomOut.innerText = "-";

    zoomIn.onclick = () => map.setZoom((map.getZoom() ?? 9) + 1);
    zoomOut.onclick = () => map.setZoom((map.getZoom() ?? 9) - 1);

    controlDiv.appendChild(zoomIn);
    controlDiv.appendChild(zoomOut);
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(controlDiv);

    // Advanced Marker (replaces the deprecated google.maps.Marker).
    // Its content is a plain <img>, so the custom icon is preserved.
    const markerImg = document.createElement("img");
    markerImg.src = "/assets/img/map/icon-location.png";
    markerImg.width = 48;
    markerImg.height = 48;

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      content: markerImg,
      gmpClickable: true,
    });

    marker.addListener("gmp-click", () => setOpen(true));
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
        {open && (
          <InfoWindow
            position={center}
            onCloseClick={() => setOpen(false)}
            options={{
              pixelOffset: new window.google.maps.Size(0, -52),
              zIndex: 9999,
            }}
          >
            <div className="contact-info-box">
              <h3>CONTACT INFORMATION.</h3>
              <ul>
                <li><i className="fa-solid fa-location-dot" aria-hidden="true" /> Melbourne, Australia</li>
                <li><i className="fa-solid fa-phone" aria-hidden="true" /> 765-302-2878</li>
                <li>
                  <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                  <a href="mailto:name@domain.com">name@domain.com</a>
                </li>
                <li>
                  <i className="fa-solid fa-globe" aria-hidden="true" />
                  <a href="https://mycompanyname.com" target="_blank" rel="noreferrer">
                    mycompanyname.com
                  </a>
                </li>
              </ul>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    // Reserve the map's height while the Google Maps API loads to avoid layout shift.
    <div className="map-wrapper" style={{ height: MAP_HEIGHT }} aria-hidden="true" />
  );
}
