import { LatLngType } from './LatLngType';

type ScoreRecordTranslationsType = { title: string; note: string; max: number; min: number, points:number };

const ScoreRecordTranslations: ScoreRecordTranslationsType[] = [
  { title: 'WOW!', note: 'You hit right on place!', max: 100, min: 99.99, points: 30 },
  { title: 'EXPERT', note: 'You were very close!', max: 99.99, min: 95, points: 15  },
  { title: 'GREAT', note: 'Nice, you hit near the destination point.', max: 95, min: 90, points: 10  },
  { title: 'GOOD', note: 'Ok, that was ok.', max: 90, min: 85, points: 5  },
  { title: 'NOT SO BAD', note: 'It was nice, but it could be better.', max: 85, min: 80, points: 0  },
  { title: 'YOU NEED TO PRACTICE', note: 'Luck is not on your side...', max: 80, min: 0, points: 0  },
  { title: 'BAD', note: 'You should grab a map', max: 0, min: -1, points: 0  },
];

export default class ScoreRecordModel {
  accuracy: number;
  points: number;
  title: string;
  note: string;

  constructor(accuracy: number, points: number, title: string, note: string) {
    this.accuracy = accuracy;
    this.points = points;
    this.title = title;
    this.note = note;
  }

  /** Calculates how close user hits a marker, based on difference between his/her choice and destination place. If the difference is higer, accuracy is lower  */
  static calculateAccuracy(placeCoordinades: LatLngType, userCoordinates: LatLngType): number {
    // at first there's a calculation of percentage hit 
    // due to the possibility that result can be beyond range of 0 - 100, there's a need to format accuracy properly  
    // if hit was too far away from destination point, accuracy is equal 0
    // the final result is arithmetic average of two results

    const latPercentage = (userCoordinates.lat * 100) / placeCoordinades.lat;
    const latPercentageRanged = Math.abs(latPercentage - 100);
    const latAccuracy = latPercentageRanged <= 100 ? 100 - latPercentageRanged : 0;

    const lngPercentage = (userCoordinates.lng * 100) / placeCoordinades.lng;
    const lngPercentageRanged = Math.abs(lngPercentage - 100);
    const lngAccuracy = lngPercentageRanged <= 100 ? 100 - lngPercentageRanged : 0;

    return ((latAccuracy + lngAccuracy) / 2)
  }

  /** Prepares right title, note and amount of points for given accuracy */
  static prepareTranslations(accuracy: number): ScoreRecordTranslationsType {
    const translation = ScoreRecordTranslations.find(t => t.max >= accuracy && accuracy > t.min);

    return translation || ScoreRecordTranslations[ScoreRecordTranslations.length - 1]
  }

  /** Returns the score record with collected points and matching typography */
  static returnScore(placeCoordinades: LatLngType, userCoordinates: LatLngType): ScoreRecordModel {
    const accuracy = this.calculateAccuracy(placeCoordinades, userCoordinates);

    const { title, note, points } = this.prepareTranslations(accuracy);

    return new ScoreRecordModel(accuracy, points, title, note);
  }
}
