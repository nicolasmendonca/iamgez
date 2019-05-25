import { DragEvent } from 'react';
import { IImageFile } from '../../types/files';

export type DropFilesEventHandler = (
  acceptedFiles: IImageFile[],
  rejectedFiles: IImageFile[],
  event: DragEvent<HTMLDivElement>
) => void;

export interface IUploaderProps {
  onDrop: DropFilesEventHandler;
}
