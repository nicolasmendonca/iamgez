```tsx
import Compressor from "compressorjs";
import numeral from "numeral";
import React, { DragEvent, Fragment, PureComponent } from "react";
import Dropzone from "react-dropzone";

export interface IImageFile extends File {
  preview?: string;
}

type DropFilesEventHandler = (
  accepted: IImageFile[],
  rejected: IImageFile[],
  event: DragEvent<HTMLDivElement>
) => void;

interface IDropZoneState {
  image: string;
}

class DropZone extends PureComponent<{}, IDropZoneState> {
  public state = {
    image: ""
  };

  public handleFilesDrop: DropFilesEventHandler = (
    acceptedFiles,
    rejectedFiles,
    event
  ) => {
    acceptedFiles.forEach(file => {
      console.warn("file", numeral(file.size).format("0b"));
      // tslint:disable-next-line: no-unused-expression
      new Compressor(file, {
        maxHeight: 600,
        maxWidth: 800,
        convertSize: 1,
        quality: 0.6,
        success: result => {
          console.warn("result", numeral(result.size).format("0b"));
          // tslint:disable-next-line: max-line-length
          console.warn(
            `you saved ${numeral(file.size - result.size).format(
              "0b"
            )} (about ${numeral(result.size / file.size).format(
              "0.00%"
            )} of the original size)`
          );
          numeral(result.size);
          const fr = new FileReader();
          fr.onloadend = () => {
            this.setState({ image: fr.result as string });
          };
          fr.readAsDataURL(result);
        }
      });
    });
    rejectedFiles.forEach(file => console.log(file.name));
  };

  public render() {
    return (
      <Fragment>
        <Dropzone accept="image/*" onDrop={this.handleFilesDrop.bind(this)}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
        {this.state.image && <img src={this.state.image} />}
      </Fragment>
    );
  }
}

export default DropZone;
```
