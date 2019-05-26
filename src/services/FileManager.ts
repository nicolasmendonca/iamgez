import uuid from 'uuid/v4';
import Compressor from './Compresser';
import Previewer from './Previewer';

export interface ICompressedFileWithPreview {
  id: string;
  original: IFileWithPreview;
  compressed: IFileWithPreview;
}

export interface IFileWithPreview {
  file: File;
  preview: string;
}

class FileManager {
  private file: File;

  constructor(file: File) {
    this.file = file;
  }

  public compressAndGetPreview(): Promise<ICompressedFileWithPreview> {
    return new Promise(async (resolve, reject) => {
      try {
        const originalPreview = await new Previewer(this.file).buildPreview();
        const compressed = await new Compressor(this.file).compress();
        const compressedPreview = await new Previewer(
          compressed
        ).buildPreview();

        return resolve({
          compressed: {
            file: compressed,
            preview: compressedPreview
          },
          id: uuid(),
          original: {
            file: this.file,
            preview: originalPreview
          }
        });
      } catch (e) {
        reject(e);
        throw e;
      }
    });
  }
}

export default FileManager;
