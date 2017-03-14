import React, { Component } from 'react';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }

  render() {
    return (
      <div>
        <input 
        value = { this.state.term }
        onChange = {(event) => this.onInputChange(event)} />
        <br/>
        Value of the input: <br/>
        { this.state.term }
      </div>
      );
  }

  onInputChange(event) {
    this.setState({term: event.target.value });
  }
}
