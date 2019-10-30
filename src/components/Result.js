import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Form from './Form';

const reload = () => window.location.reload();

function Result(props) {
  let div;
  console.log(props)
  if (props.quizResult === 'lost') {
    div = (
      <div>
        <p>You failed the quizz...</p>
        <button onClick={reload}> Try again ?</button>
      </div>
    )
  }
  if (props.quizResult === 'win') {
    div = <Form  {...props} />
  }
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      {div}
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
