import React, { Fragment, SFC } from 'react';
import { connect } from 'react-redux';
import { IIndexedFile } from '../../services/ReduxImagesService';
import UploaderContainer from '../Uploader/Uploader.container';

interface IMainPageProps {
  files: IIndexedFile[];
}

const MainPage: SFC<IMainPageProps> = ({ files }) => (
  <Fragment>
    <UploaderContainer />
    {files
      .filter((file) => file.compressed && file.compressed.preview)
      .map((file) => (
        <img key={file.id} src={file.compressed!.preview} />
      ))}
  </Fragment>
);

const mapStateToProps = (state: any) => ({
  files: state.filesReducer
});

export default connect(mapStateToProps)(MainPage);
