import React, { ReactElement, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";
import StreetViewComponent from "./StreetViewComponent";

export enum Status {
  LOADING = "LOADING",
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
}

/** type for lat lng keepted as simple object with numerical values */
type LatLngType = { lat: number; lng: number }; // todo -> move to types.d.ts

/** Merges all main game-parts */
const GameStage = (): JSX.Element => {
  const [click, setClick] = useState<LatLngType | null>(null);

  const center = { lat: 50.0409296, lng: 21.9993273 };
  const zoom = 15;

  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <span>loading....</span>;
  };

  /** handler for user's click on map */
  const handleSetMarker = (latLng: LatLngType) => {
    console.log("settting");
    setClick(latLng);
  };

  /** fires checking user's choice */
  const handleCheck = () => {
    alert("check...");
    // todo mechanism for checking user choice
  };

  return (
    <>
      <Wrapper
        apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string}
        language="EN"
        render={render}
      >
        <MapComponent
          center={center}
          zoom={zoom}
          onSetMarker={handleSetMarker}
        />
        <StreetViewComponent latLng={center} />
      </Wrapper>

      {!!click && (
        <div>
          <p>your choice: {JSON.stringify(click)}</p>
          <button onClick={handleCheck}>check</button>
        </div>
      )}
    </>
  );
};

export default GameStage;
