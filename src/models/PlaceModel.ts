import pick from "../utils/pick";
import { LatLngType } from "./LatLngType";

export default class PlaceModel {
  latLng:LatLngType;
  place:string;
  img:string;

  constructor(){
    this.latLng = {lat:0,lng:0}
    this.place='';
    this.img='';
  }

  static create(override?:Partial<PlaceModel>):PlaceModel{
    return Object.assign({},new PlaceModel, pick(override as any, 'latLng','place','img'))
  }

  static createArray(array?:Partial<PlaceModel>[]):PlaceModel[]{
    if(!array) return [];
    else return array.map(item=>this.create(item));
  }
}
