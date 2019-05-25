import uuid from 'uuid/v4';
import { IImageFile, IIndexedFile } from '../../types/files';
import { ADD_FILES } from '../constants/files';

interface IAddFilesAction {
  type: typeof ADD_FILES;
  payload: IIndexedFile[];
}

export type addFilesActionCreator = (files: IImageFile[]) => IAddFilesAction;

export const addFiles: addFilesActionCreator = (files) => ({
  payload: files.map((file) => ({ id: uuid(), file })),
  type: ADD_FILES
});

export type FileActions = IAddFilesAction;
