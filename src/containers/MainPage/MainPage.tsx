import React, { Fragment, SFC } from 'react';
import { connect } from 'react-redux';
import { IImageFile } from '../../types/files';
import ImagesCompresserContainer from '../Compresser/ImagesCompresser.container';
import UploaderContainer from '../Uploader/Uploader.container';

interface IMainPageProps {
  files: IImageFile[];
}

const MainPage: SFC<IMainPageProps> = ({ files }) => (
  <Fragment>
    <UploaderContainer />
    {files && files.length > 0 && <ImagesCompresserContainer />}
  </Fragment>
);

const mapStateToProps = (state: any) => ({
  files: state.filesReducer
});

export default connect(mapStateToProps)(MainPage);
