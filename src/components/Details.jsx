import React from 'react'
import { Modal } from 'reactstrap'
import { Link } from 'react-router-dom'
import Header from './Header'

function Details({ history }) {
  const { country } = history.location;
  return (
      <div className="App">
      <Header />
      <img className="backgroudImage" src={country.flag} alt="" />


          <h1 className="detailh1">{country.name} Details Page</h1>
          <div className="wrapper" key={country.name}>
            <div class="card mycard custom" style={{ width: "18rem" }}>
              <div class="card-body">
                <h2 class="card-title">{country.name}</h2>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Native name: {country.nativeName}
                </li>
                <li class="list-group-item">Capital: {country.capital}</li>
                <li class="list-group-item">
                  Population: {country.population}
                </li>
                <li class="list-group-item">Region: {country.region}</li>
                <li class="list-group-item">Subregion: {country.subregion}</li>
                <li class="list-group-item">Area: {country.area}</li>
                <li class="list-group-item">
                  Currency:{" "}
                  {country.currencies.map(currency => currency.symbol)}
                </li>

                <li class="list-group-item">
                  Calling Code: {country.callingCodes[0]}
                </li>
              </ul>
              <div class="card-body">
                <Link
                  to={{
                    pathname: "/",
                    country
                  }}
                >
                  <h3>&#171; View Less </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>

  );
}

export default Details

