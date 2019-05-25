export interface IImageFile extends File {
  preview?: string;
}

export interface IIndexedFile {
  id: string;
  file: IImageFile;
}

export interface IIndexedFileCompressed extends IIndexedFile {
  compressed: File;
}
