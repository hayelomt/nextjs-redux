import React, { Component } from 'react';
import {connect} from 'react-redux';

import {incrementCount, decrementCount} from '../store/actions/counterActions';
import Counter from '../components/counter/Counter';

class CounterContainer extends Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const {count, incrementCount, decrementCount} = this.props;

    return (
      <React.Fragment>
        <Counter
          count={count.counter}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  count: store.count
})

export default connect(mapStateToProps, 
  {incrementCount, decrementCount})(CounterContainer);