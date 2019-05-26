import { reduxImagesService } from '../../App';
import { IIndexedFile } from '../../services/ReduxImagesService';
import { ADD_FILES, FILE_PROCESSED } from '../constants/files';

interface addFilesAction {
  type: typeof ADD_FILES;
  payload: IIndexedFile[];
}

interface fileProcessedAction {
  type: typeof FILE_PROCESSED;
  payload: IIndexedFile;
}

export const addFiles = (files: File[]): addFilesAction => {
  const indexedFiles = files.map((file, i) =>
    reduxImagesService.createImage(file, i)
  );
  indexedFiles.forEach((file) => reduxImagesService.addToQueue(file));
  reduxImagesService.startProcessing();

  return {
    payload: indexedFiles,
    type: ADD_FILES
  };
};

export const fileProcessed = (file: IIndexedFile): fileProcessedAction => ({
  type: FILE_PROCESSED,
  payload: file
});

export type FILES_ACTIONS = addFilesAction | fileProcessedAction;
