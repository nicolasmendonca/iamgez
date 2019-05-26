import React, { Fragment, SFC } from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../redux/reducers';
import { IIndexedFile } from '../../services/ReduxImagesService';
import UploaderContainer from '../Uploader/Uploader.container';
import { MainPageContainer } from './MainPage.styles';

interface IMainPageProps {
  files: IIndexedFile[];
}

const MainPage: SFC<IMainPageProps> = ({ files }) => (
  <MainPageContainer>
    <UploaderContainer />
  </MainPageContainer>
);

const mapStateToProps = (state: IStore) => ({
  files: state.filesReducer
});

export default connect(mapStateToProps)(MainPage);
