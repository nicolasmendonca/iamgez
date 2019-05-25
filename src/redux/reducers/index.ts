import { IImageFile } from '../../types/files';
import * as filesReducer from './files';

export interface IStore {
  filesReducer: IImageFile[];
}

export default {
  ...filesReducer
};
