import pick from '../utils/pick';
import { LatLngType } from './LatLngType';

export default class PlaceModel {
  latLng: LatLngType;
  place: string;
  img: string;
  about?: string | null; // short info about place
  tip?: string | null; // small tip before confirm choice

  constructor() {
    this.latLng = { lat: 0, lng: 0 };
    this.place = '';
    this.img = '';
    this.about = null;
    this.tip = null;
  }

  static create(override?: Partial<PlaceModel>): PlaceModel {
    return Object.assign({}, new PlaceModel(), pick(override as any, 'latLng', 'place', 'img', 'about', 'tip'));
  }

  static createArray(array?: Partial<PlaceModel>[]): PlaceModel[] {
    if (!array) return [];
    else return array.map(item => this.create(item));
  }
}
