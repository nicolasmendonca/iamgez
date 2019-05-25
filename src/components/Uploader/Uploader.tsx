import React, { SFC } from 'react';
import Dropzone from 'react-dropzone';
import { IUploaderProps } from './types';

const Uploader: SFC<IUploaderProps> = ({ onDrop }) => (
  <Dropzone accept="image/*" onDrop={onDrop}>
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    )}
  </Dropzone>
);

export default Uploader;
