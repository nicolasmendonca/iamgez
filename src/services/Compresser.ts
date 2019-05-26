import Compressorjs from 'compressorjs';

class Compressor {
  public static defaultOptions: Partial<Compressor.Options> = {
    checkOrientation: true,
    maxHeight: 1024,
    maxWidth: 1024,
    quality: 0.8,
    convertSize: 0 // convert PNGs to JPG
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
