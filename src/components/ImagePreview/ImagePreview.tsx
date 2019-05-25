import produce from 'immer';
import React, { PureComponent } from 'react';

interface IImagePreviewProps {
  image: File;
}

interface IImagePreviewState {
  preview: string | null;
}

class ImagePreview extends PureComponent<
  IImagePreviewProps,
  IImagePreviewState
> {
  constructor(props: IImagePreviewProps) {
    super(props);
    this.state = {
      preview: null
    };
    // read original file
    const preview = new FileReader();
    preview.onloadend = () =>
      this.setState(
        produce((draft: IImagePreviewState) => {
          draft.preview = preview.result as string;
        })
      );
    preview.readAsDataURL(this.props.image);
  }

  public render() {
    return (
      <div>
        {this.state.preview && (
          <img key="original" src={this.state.preview} alt="Original" />
        )}
      </div>
    );
  }
}

export default ImagePreview;
