import { reduxImagesService } from '../../App';
import { ADD_FILES } from '../constants/files';

export const addFiles = (files: File[]) => {
  files.forEach((file) => reduxImagesService.processFile(file));

  return {
    payload: files,
    type: ADD_FILES
  };
};
