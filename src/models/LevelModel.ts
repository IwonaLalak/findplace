import pick from "../utils/pick";
import PlaceModel from "./PlaceModel";

export enum DifficultiesEnum {
  EASY = 'EASY',
  MODERATE = 'MODERATE',
  HARD = 'HARD',
  EXPERT = 'EXPERT'
}

export default class LevelModel{
  level: number;
  difficulty: DifficultiesEnum;
  title: string;
  description: string;
  list: PlaceModel[]

  constructor(){
    this.level = 0;
    this.difficulty = DifficultiesEnum.EASY;
    this.title = '';
    this.description = '';
    this.list = []
  }

  static create(override?:Partial<LevelModel>) : LevelModel{
    return Object.assign({}, new LevelModel, {
      ...pick(override as any, 'level','difficulty','title','description'),
      ...{list: PlaceModel.createArray(override?.list)}
    });
  }

}
