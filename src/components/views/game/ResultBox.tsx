import React from 'react';
import ScoreRecordModel from '../../../models/ScoreRecordModel';

interface Props {
  result: ScoreRecordModel;
}

/** Shows after user checks out his/her type */
const ResultBox = ({ result }: Props) => {
  const { title, note, accuracy, points } = result;

  const formatAccuracy = (value: number): string => {
    return value.toFixed(2) + ' %';
  };

  return (
    <div className="resultbox">
      <h2>{title}</h2>
      <h5>{note}</h5>
      <h6>Accuracy: {formatAccuracy(accuracy)}</h6>
      <h6>Points: {points}</h6>
    </div>
  );
};

export default ResultBox;
