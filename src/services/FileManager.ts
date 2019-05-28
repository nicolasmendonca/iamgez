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
        const compressed = await new Compressor(this.file.original).compress();

        return resolve({
          compressed,
          index: this.file.index,
          id: this.file.id,
          original: this.file.original
        });
      } catch (e) {
        reject(e);
        throw e;
      }
    });
  }
}

export default FileManager;
