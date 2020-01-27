import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import MockCountries from "./MockCountries";
import { Link } from "react-router-dom";


class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      mockError: MockCountries,
      search: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log(response);
        this.setState({ countries: response.data });
      })
      .catch(error => {
        // console.log(Object.keys)
        console.log(error);
        this.setState({ countries: MockCountries });
      });
  }

  

  render() {
    const { countries, mockError, search } = this.state;
    // const filteredCountries = mockError.filter(country => {
    //   return (
    //     country.name.toLocaleUpperCase().indexOf(search.toLocaleUpperCase()) !==
    //     -1
    //   );
    // });

    return (
      countries.map(country => (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 space" style={{ marginTop: '5%' }} key={country.name}>
          <div class="card custom" style={{ width: "18rem" }}>
            <img src={country.flag} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2 class="card-title">{country.name}</h2>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Capital: {country.capital}</li>
              <li class="list-group-item">Population: {country.population}</li>
              <li class="list-group-item">Region: {country.region}</li>
            </ul>
            <div class="card-body">
              <Link
                to={{
                  pathname: "/details",
                  country
                }}
              >
                <h3>View More &#187;</h3>
              </Link>
            </div>
          </div>
        </div>
      ))
    )

    // </div>
  }
}

export default Countries;
