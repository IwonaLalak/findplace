import React, { ReactElement, useEffect, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './MapComponent';
import StreetViewComponent from './StreetViewComponent';
import { famousPlaces } from '../../../data/famousPlaces';
import PlaceModel from '../../../models/PlaceModel';
import { LatLngType } from '../../../models/LatLngType';
import ScoreRecordModel from '../../../models/ScoreRecordModel';
import WrapperMapStatus from './WrapperMapStatus';
import Button, { ButtonSizes, ButtonVariants } from '../../buttons/Button';
import CircleSuccess from '../../icons/CircleSuccess';
import ArrowRight from '../../icons/ArrowRight';
import BeginBox from './BeginBox';
import ResultBox from './ResultBox';

/** Merges all main game-parts */
const GameStage = (): JSX.Element => {
  const [click, setClick] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [destinationPlace, setDestinationPlace] = useState<PlaceModel>(PlaceModel.create());
  const [userChoice, setUserChoice] = useState<LatLngType>({ lat: 0, lng: 0 });
  const [result, setResult] = useState<ScoreRecordModel | null>(null);

  useEffect(() => {
    beginGame();
  }, []);

  /** sets new game - new place to guess */
  const beginGame = () => {
    handleClear();

    // get random place to guess
    // todo create mechanism to avoid getting the same place twice
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
    setResult(ScoreRecordModel.returnScore(destinationPlace.latLng, userChoice));
  };

  /** clears user choice */
  const handleClear = () => {
    setClick(false);
    setConfirm(false);
    setUserChoice({ lat: 0, lng: 0 });
    setResult(null);
  };

  return (
    <div id="gamestage">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY as string} language="EN" render={status => <WrapperMapStatus status={status} />}>
        <div className="preview">
          <StreetViewComponent latLng={destinationPlace.latLng} />
        </div>
        <div className="actions">
          <div className="actions__map">
            <MapComponent center={userChoice} zoom={1} onSetMarker={handleSetMarker} destinationPlace={confirm ? destinationPlace : undefined} />
          </div>
          <div className="actions__controls">
            {!result && (
              <>
                <BeginBox tip={destinationPlace?.tip || null} />

                <div className="buttonbox">
                  <Button variant={ButtonVariants.PRIMARY} size={ButtonSizes.LARGE} onClick={handleClear} disabled={!click}>
                    Clear choice
                  </Button>
                  <Button variant={ButtonVariants.ACTION} size={ButtonSizes.LARGE} onClick={handleCheck} icon={<CircleSuccess />} disabled={!click}>
                    Check out
                  </Button>
                </div>
              </>
            )}
            {result && (
              <>
                <ResultBox result={result} destination={destinationPlace} />

                <div className="buttonbox">
                  <Button variant={ButtonVariants.ACTION} size={ButtonSizes.LARGE} onClick={beginGame} icon={<ArrowRight />}>
                    Next one
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default GameStage;
