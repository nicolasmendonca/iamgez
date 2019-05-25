import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { counterAdd, counterSubtract } from '../redux/actions/counter';
import { IStore } from '../redux/reducers';

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {};

const Counter: React.SFC<Props> = ({ count, add, subtract }) => (
  <div>
    <p>{count}</p>
    <button onClick={add} type="button">
      +
    </button>
    <button onClick={subtract} type="button">
      -
    </button>
  </div>
);

const mapStateToProps = (state: IStore) => ({
  count: state.counterReducer
});

const mapDispatchToProps = {
  add: counterAdd,
  subtract: counterSubtract
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
