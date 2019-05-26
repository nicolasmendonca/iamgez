import { Store } from 'redux';
import uuid from 'uuid/v4';
import { fileProcessed } from '../redux/actions/files';
import FileManager from './FileManager';
import ZipperService from './ZipperService';

export interface IIndexedFile {
  index: number;
  id: string;
  original: File;
  compressed?: File | Blob;
}

class ReduxImagesService {
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

    this.handleProcessingFinished();
  }

  public async handleProcessingFinished() {
    const compressed = this.store
      .getState()
      .filesReducer.map((file: IIndexedFile) => file.compressed);
    await ZipperService.zipAndDownload(compressed);
  }

  public async processFile(file: IIndexedFile) {
    const processedFile = await new FileManager(file).compress();
    this.store.dispatch(fileProcessed(processedFile));
  }

  public createImage(file: File, index: number): IIndexedFile {
    return {
      index,
      id: uuid(),
      original: file
    };
  }
}

export default ReduxImagesService;
