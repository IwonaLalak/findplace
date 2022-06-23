import React, { useRef, useEffect, useState } from "react";

type LatLngType = { lat: number; lng: number }; // todo -> move to types.d.ts

interface Props {
  center: LatLngType;
  zoom: number;
  onSetMarker: (latLng: LatLngType) => void;
}

/** Holds clickable map for posting marker */
const MapComponent = ({ center, zoom, onSetMarker }: Props): JSX.Element => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const [map, setMap] = useState<google.maps.Map>();
  const [marker, setMarker] = useState<google.maps.Marker>();

  /** sets maps */
  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
          streetViewControl: false,
        })
      );
    }
  }, [ref, map]);

  /** fires onClick listener */
  useEffect(() => {
    if (map) {
      map.addListener("click", handleClickOnMap);
    }
  }, [map]);

  /** fires & remove on unmount marker */
  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  /** collects and sends info about user click */
  const handleClickOnMap = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat() as number;
    const lng = e.latLng?.lng() as number;

    const latLng = new google.maps.LatLng(lat, lng);

    if (marker) {
      marker.setOptions({ position: latLng, map });

      onSetMarker({ lat, lng });
    }
  };

  return <div ref={ref} id="map" style={{ height: "500px" }} />;
};

export default MapComponent;
