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
  </Fragment>
);

const mapStateToProps = (state: any) => ({
  files: state.filesReducer
});

export default connect(mapStateToProps)(MainPage);
