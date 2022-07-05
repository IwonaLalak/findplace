import React, { ReactElement, useEffect, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './MapComponent';
import StreetViewComponent from './StreetViewComponent';
import { famousPlaces } from '../../../data/famousPlaces';
import PlaceModel from '../../../models/PlaceModel';
import { LatLngType } from '../../../models/LatLngType';
import ScoreRecordModel from '../../../models/ScoreRecordModel';

export enum Status {
  LOADING = 'LOADING',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS',
}

/** Merges all main game-parts */
const GameStage = (): JSX.Element => {
  const [click, setClick] = useState<boolean>(false);
  const [destinationPlace, setDestinationPlace] = useState<PlaceModel>(PlaceModel.create());
  const [userChoice, setUserChoice] = useState<LatLngType>({ lat: 0, lng: 0 });
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    beginGame();
  }, []);

  /** sets new game - new place to guess */
  const beginGame = () => {
    // clear previous choices
    setClick(false);
    setConfirm(false);
    setUserChoice({ lat: 0, lng: 0 });

    // get random place to guess
    const indx = Math.floor(Math.random() * famousPlaces.list.length);
    setDestinationPlace(famousPlaces.list[indx]);
  };

  /** handler for user's click on map */
  const handleSetMarker = (latLng: LatLngType) => {
    console.log('settting', latLng);
    setClick(true);
    setUserChoice(latLng);
  };

  /** fires checking user's choice */
  const handleCheck = () => {
    setConfirm(true);
    console.log(ScoreRecordModel.returnScore(destinationPlace.latLng, userChoice));
    // todo mechanism for checking user choice
  };

  const render = (status: Status): ReactElement => {
    if (status === Status.LOADING) return <h4>{status} ..</h4>;
    if (status === Status.FAILURE) return <h4>{status} ...</h4>;
    return <h4>loading....</h4>;
  };

  return (
    <div id="gamestage">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string} language="EN" render={render}>
        <div className="preview">
          <StreetViewComponent latLng={destinationPlace.latLng} />
        </div>
        <div className="actions">
          <div className="actions__map">
            <MapComponent center={userChoice} zoom={1} onSetMarker={handleSetMarker} destinationPlace={confirm ? destinationPlace : undefined} />
          </div>
          <div className="action__buttons">
            {!!click && (
              <div>
                <p>your choice: {JSON.stringify(userChoice)}</p>
                <button onClick={handleCheck}>check</button>
                <button onClick={beginGame}>next one</button>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default GameStage;
