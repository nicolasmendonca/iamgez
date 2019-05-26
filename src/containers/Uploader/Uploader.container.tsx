import React, { DragEvent, PureComponent } from 'react';
import { connect } from 'react-redux';
import Uploader from '../../components/Uploader';
import { DropFilesEventHandler } from '../../components/Uploader/types';
import { addFiles } from '../../redux/actions/files';

interface IUploaderContainerProps {
  onFilesDrop: typeof addFiles;
}

class UploaderContainer extends PureComponent<IUploaderContainerProps, {}> {
  public onDrop: DropFilesEventHandler = (
    acceptedFiles: File[],
    rejectedFiles: File[],
    event: DragEvent<HTMLDivElement>
  ) => {
    this.props.onFilesDrop(acceptedFiles);
  }

  public render() {
    return <Uploader onDrop={this.onDrop} />;
  }
}

const mapDispatchToProps = {
  onFilesDrop: addFiles
};

export default connect(
  null,
  mapDispatchToProps
)(UploaderContainer);
