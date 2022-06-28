import { LatLngType } from './LatLngType';

type ScoreRecordTranslationsType = { title: string; note: string; max: number; min: number };

const ScoreRecordTranslations: ScoreRecordTranslationsType[] = [
  { title: 'WOW', note: 'You hit right on place!', max: 100, min: 99.9 },
  { title: 'EXPERT', note: 'You were very close!', max: 99.9, min: 99 },
  { title: 'GREAT', note: 'Nice, you hit near the destination point.', max: 99, min: 95 },
  { title: 'GOOD', note: 'Ok, that was ok.', max: 95, min: 90 },
  { title: 'NOT SO BAD', note: 'It was nice, but it could be better.', max: 90, min: 80 },
  { title: 'YOU NEED TO PRACTICE', note: 'You should take a map and practice', max: 80, min: 50 },
  { title: 'BAD', note: 'Luck is not on your side...', max: 50, min: 0 },
  { title: 'YOU ARE THE WORST', note: 'Not even close...', max: 0, min: -1 },
];

export default class ScoreRecordModel {
  points: number;
  title: string;
  note: string;

  constructor(points: number, title: string, note: string) {
    this.points = points;
    this.title = title;
    this.note = note;
  }

  /** Calculates how many points will user get baset on difference between his/her choice and destination place. If the difference is higer, less points will be given  */
  static calculatePoints(placeCoordinades: LatLngType, userCoordinates: LatLngType): number {
    const latDiff = Math.abs(placeCoordinades.lat - userCoordinates.lat);
    const lngDiff = Math.abs(placeCoordinades.lng - userCoordinates.lng);

    const diff = latDiff + lngDiff;

    return diff >= 10 ? 0 : (10 - diff) * 10;
  }

  /** Prepares right title and note for given points */
  static prepareTranslations(points: number): ScoreRecordTranslationsType | undefined {
    return ScoreRecordTranslations.find(t => t.max >= points && points > t.min);
  }

  /** Returns the score record with collected points and matching typography */
  static returnScore(placeCoordinades: LatLngType, userCoordinates: LatLngType): ScoreRecordModel {
    const points = this.calculatePoints(placeCoordinades, userCoordinates);
    //@ts-ignore
    const { title, note } = this.prepareTranslations(points);

    return new ScoreRecordModel(points, title, note);
  }
}
