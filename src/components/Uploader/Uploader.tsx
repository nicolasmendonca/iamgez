import React, { SFC } from 'react';
import Dropzone from 'react-dropzone';
import { IUploaderProps } from './types';
import { UploaderContainer } from './Uploader.styles';

const Uploader: SFC<IUploaderProps> = ({ onDrop }) => (
  <Dropzone accept="image/*" onDrop={onDrop}>
    {({ getRootProps, getInputProps }) => (
      <UploaderContainer>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </UploaderContainer>
    )}
  </Dropzone>
);

export default Uploader;
