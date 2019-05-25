import Compressor from 'compressorjs';
import produce from 'immer';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ImagePreview from '../../components/ImagePreview';
import { IIndexedFileCompressed } from '../../types/files';
import { formatFileSize, formatPercentage } from '../../util/formatters';
import {
  IImagesCompresserContainerProps,
  IImagesCompresserContainerState
} from './types';

class ImagesCompressererContainer extends PureComponent<
  IImagesCompresserContainerProps,
  IImagesCompresserContainerState
> {
  constructor(props: IImagesCompresserContainerProps) {
    super(props);
    this.state = {
      compressedFiles: []
    };
    this.props.files.forEach((file) => {
      // tslint:disable-next-line: no-unused-expression
      new Compressor(file.file, {
        checkOrientation: true,
        maxHeight: 600,
        maxWidth: 800,
        quality: 0.6,
        success: (result: File) => {
          this.addCompressedFile({ ...file, compressed: result });
        }
      });
    });
  }

  public render() {
    return (
      <div>
        {this.state.compressedFiles.map((compressed, i) => (
          <div key={compressed.id}>
            <p>Original size: {formatFileSize(compressed.file.size)}</p>
            <p>Compressed size: {formatFileSize(compressed.compressed.size)}</p>
            <p>
              You saved:{' '}
              {formatPercentage(
                (compressed.file.size - compressed.compressed.size) /
                  compressed.file.size
              )}{' '}
              of the original size!
            </p>
            <ImagePreview image={compressed.file} />
            <ImagePreview image={compressed.compressed} />
          </div>
        ))}
      </div>
    );
  }

  private addCompressedFile(file: IIndexedFileCompressed) {
    this.setState(
      produce((draft: IImagesCompresserContainerState) => {
        draft.compressedFiles.push(file);
      })
    );
  }
}

const mapStateToProps = (state: any) => ({
  files: state.filesReducer
});

export default connect(mapStateToProps)(ImagesCompressererContainer);
