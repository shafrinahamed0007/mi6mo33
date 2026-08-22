import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log("All Countries: ", countries)
  return (
    <div>
      <h3>In the Countries</h3>
      <h4>Total Countires: {countries.length}</h4>
      {countries.map((country) => (
        <Country key={country.id} country={country} />
      ))}
    </div>
  );
};

export default Countries;
