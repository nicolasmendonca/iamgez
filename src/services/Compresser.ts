import Compressorjs from 'compressorjs';

class Compressor {
  public static defaultOptions = {
    checkOrientation: true,
    maxHeight: 600,
    maxWidth: 800,
    quality: 0.6
  };

  private file: File;

  constructor(file: File) {
    this.file = file;
  }

  public compress(
    options: Compressor.Options = Compressor.defaultOptions
  ): Promise<File> {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: no-unused-expression
      new Compressorjs(this.file, {
        ...options,
        error: (error: Error) => reject(error),
        success: (result: File) => resolve(result)
      });
    });
  }
}

export default Compressor;
