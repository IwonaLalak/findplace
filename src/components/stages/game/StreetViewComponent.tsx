import React, { useRef, useEffect, useState } from 'react';
import { LatLngType } from '../../../models/LatLngType';

interface Props {
  latLng: LatLngType;
}

/** Displays interactive street view of searching place */
const StreetViewComponent = ({ latLng }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const [map, setMap] = useState<google.maps.Map | null>();
  const [view, setView] = useState<google.maps.StreetViewPanorama | null>();

  /** init map */
  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: latLng,
          zoom: 1,
        })
      );
    }
  }, [ref, map]);

  /** init panoramic */
  useEffect(() => {
    if (map) {
      const view = new google.maps.StreetViewPanorama(ref.current, {
        position: latLng,
        pov: {
          heading: 34,
          pitch: 10,
        },
        disableDefaultUI: true,
      });

      setView(view);

      map.setStreetView(view);
    }
    return () => {
      if (!map) {
        setView(null);
      }
    };
  }, [map]);

  /** on change place to guess */
  useEffect(() => {
    if (view && latLng) {
      view.setPosition(latLng);
    }
  }, [latLng]);

  return (
    <>
      <div ref={ref} id="streetview" style={{ height: '500px' }} />
    </>
  );
};

export default StreetViewComponent;
