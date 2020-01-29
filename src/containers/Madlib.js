import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    v0: '',
    v1: '',
    v2: '',
    v3: '',
    v4: '',
    v5: '',
    v6: '',
    v7: '',
    v8: '',
    v9: '',
    v10: '',
    v11: '',
    words: []
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({ words: [state.v0, state.v1, state.v2, state.v3, state.v4, state.v5, state.v6, state.v7, state.v8, state.v9, state.v10, state.v11] }));
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange}/>}
        {showResult && <Result words={ this.state.words } closeResult={this.toggleResult} />}
      </>
    );
  }
}
