import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log("All Countries: ", countries)

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedCountries = (country) => {
    // console.log("Visited Countries: ", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    // console.log("Flag need to be added");
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>In the Countries</h3>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((countries) => (
          <li key={countries.cca3.cca3}>{countries?.name?.common}</li>
        ))}
      </ol>
      <div className="visitedFlagsContainer">
        {
          visitedFlags.map(flag => <img src={flag} />)
        }
      </div>
      <h4>Total Countires: {countries.length}</h4>
      <div id="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
