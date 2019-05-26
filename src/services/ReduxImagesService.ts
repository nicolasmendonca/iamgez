import { Store } from 'redux';
import FileManager from './FileManager';

class ReduxImagesService {
  private store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  public async processFile(file: File) {
    const processedFile = await new FileManager(file).compressAndGetPreview();
    this.store.dispatch({
      type: 'ADD_PROCESSED_FILES',
      payload: processedFile
    });
  }
}

export default ReduxImagesService;
