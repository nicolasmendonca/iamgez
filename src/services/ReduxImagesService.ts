import { Store } from 'redux';
import uuid from 'uuid/v4';
import { fileProcessed } from '../redux/actions/files';
import FileManager from './FileManager';

interface IFileWithPreview {
  file: File;
  preview?: string;
}

export interface IIndexedFile {
  index: number;
  id: string;
  original: IFileWithPreview;
  compressed?: IFileWithPreview;
}

class ReduxImagesService {
  public static hasPreview(file: IFileWithPreview) {
    return !!file.preview;
  }

  public static isLoaded(idFile: IIndexedFile) {
    return (
      ReduxImagesService.hasPreview(idFile.original) &&
      idFile.compressed &&
      ReduxImagesService.hasPreview(idFile.compressed)
    );
  }
  private store: Store;
  private queue: IIndexedFile[] = [];

  constructor(store: Store) {
    this.store = store;
  }

  public addToQueue(file: IIndexedFile) {
    this.queue.push(file);
  }

  public async startProcessing() {
    while (this.queue.length > 0) {
      try {
        await this.processFile(this.queue[0]);
      } catch (e) {
        console.error(e);
      } finally {
        this.queue.shift();
      }
    }
  }

  public async processFile(file: IIndexedFile) {
    const processedFile = await new FileManager(file).compressAndGetPreview();
    this.store.dispatch(fileProcessed(processedFile));
  }

  public createImage(file: File, index: number): IIndexedFile {
    return {
      index,
      id: uuid(),
      original: { file }
    };
  }
}

export default ReduxImagesService;
