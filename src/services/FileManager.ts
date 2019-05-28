import uuid from 'uuid/v4';
import Compressor from './Compresser';
import Previewer from './Previewer';
import { IIndexedFile } from './ReduxImagesService';

class FileManager {
  private file: IIndexedFile;

  constructor(file: IIndexedFile) {
    this.file = file;
  }

  public compressAndGetPreview(): Promise<IIndexedFile> {
    return new Promise(async (resolve, reject) => {
      try {
        const originalPreview = await new Previewer(
          this.file.original.file
        ).buildPreview();
        const compressed = await new Compressor(
          this.file.original.file
        ).compress();
        const compressedPreview = await new Previewer(
          compressed
        ).buildPreview();

        return resolve({
          compressed: {
            file: compressed,
            preview: compressedPreview
          },
          index: this.file.index,
          id: this.file.id,
          original: {
            file: this.file.original.file,
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
