import React, { Component } from 'react'
import MockCountries from './MockCountries';

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
        search: "",
        mockError: MockCountries
    };
  }

  handleInput = event => {
    this.setState({
      search: event.target.value
    });
  };

    render() {
        const { search, mockError } = this.state;
        const filteredCountries = mockError.filter(country => {
          return (
            country.name
              .toUpperCase()
              .indexOf(search.toUpperCase()) !== -1
          );
        });
    return (
      <div className="country">
        {/* {filteredCountries} */}
        <input
          className="input"
          style={{ margin: "auto" }}
          onChange={this.handleInput}
          type="text"
          value={search}
          placeholder="Search Country"
        />
      </div>
    );
  }
}

export default  Country
