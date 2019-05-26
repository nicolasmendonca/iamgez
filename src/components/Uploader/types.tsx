import { DragEvent } from 'react';

export type DropFilesEventHandler = (
  acceptedFiles: File[],
  rejectedFiles: File[],
  event: DragEvent<HTMLDivElement>
) => void;

export interface IUploaderProps {
  onDrop: DropFilesEventHandler;
}
