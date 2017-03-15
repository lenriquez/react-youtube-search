import _ from 'lodash';
import React, { Component } from 'react';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div className="search-bar">
        <input 
        value = { this.state.term }
        onChange = {(event) => this.onInputChange(event.target.value)} />
        <br/>

      </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
