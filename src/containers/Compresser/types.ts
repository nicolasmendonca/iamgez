import { IIndexedFile, IIndexedFileCompressed } from '../../types/files';

export interface IImagesCompresserContainerProps {
  files: IIndexedFile[];
}

export interface IImagesCompresserContainerState {
  compressedFiles: IIndexedFileCompressed[];
}
