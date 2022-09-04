import React, { useState } from 'react';
import ScoreRecordModel from '../../../models/ScoreRecordModel';
import PlaceModel from '../../../models/PlaceModel';
import Button, { ButtonSizes, ButtonVariants } from '../../buttons/Button';
import Modal from './../../modals/Modal';

interface Props {
  result: ScoreRecordModel;
  destination: PlaceModel;
}

/** Shows after user checks out his/her type */
const ResultBox = ({ result, destination }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { title, note, accuracy, points } = result;
  const { place, img, about } = destination;

  const formatAccuracy = (value: number): string => {
    return value.toFixed(2) + ' %';
  };

  return (
    <>
      <div className="resultbox">
        <h2>{title}</h2>
        <h5>{note}</h5>
        <div className="resultbox__place">
          <h6>Place: {place}</h6>
          <Button variant={ButtonVariants.SECONDARY} size={ButtonSizes.SMALL} onClick={() => setOpenModal(true)}>
            Show more about
          </Button>
        </div>
        <div className="resultbox__points">
          <h6>Accuracy: {formatAccuracy(accuracy)}</h6>
          <h6>Points: {points}</h6>
        </div>
      </div>
      <Modal isOpen={openModal} handleClose={() => setOpenModal(false)} title={place}>
        <>
          {!!about && (
            <>
              <p>{about} </p>
              <p className="small">Source: Wikipedia</p>
            </>
          )}
          <img src={img} alt={`Photo of ${place}`} />
          <p className="small">Source: {img}</p>
        </>
      </Modal>
    </>
  );
};

export default ResultBox;
