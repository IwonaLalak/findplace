import React, { useRef, useEffect, useState } from 'react';
import { LatLngType } from '../../../models/LatLngType';
import PlaceModel from '../../../models/PlaceModel';

interface Props {
  center: LatLngType;
  zoom: number;
  destinationPlace?: PlaceModel;
  onSetMarker: (latLng: LatLngType) => void;
}

/** Holds clickable map for posting marker */
const MapComponent = ({ center, zoom, destinationPlace, onSetMarker }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const [map, setMap] = useState<google.maps.Map>();
  const [marker, setMarker] = useState<google.maps.Marker>();
  const [destinationMarker, setDestinationMarker] = useState<google.maps.Marker>();

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
      map.addListener('click', handleClickOnMap);
    }
  }, [map]);

  /** fires & remove on unmount markers (first - user choice, second - place to guess) */
  useEffect(() => {
    if (!marker && !destinationMarker) {
      setMarker(new google.maps.Marker());
      setDestinationMarker(new google.maps.Marker());
    }

    return () => {
      if (marker && destinationMarker) {
        marker.setMap(null);
        destinationMarker.setMap(null);
      }
    };
  }, [marker]);

  /** set destination place marker, after reveal place to guess. Otherwise, clears markers */
  useEffect(() => {
    if (destinationPlace && map && destinationMarker) {
      const { latLng } = destinationPlace;
      destinationMarker.setOptions({ position: latLng, map });
    } else {
      marker?.setMap(null);
      destinationMarker?.setMap(null);
    }
  }, [destinationPlace]);

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

  return <div ref={ref} id="map" style={{ height: '500px' }} />;
};

export default MapComponent;
