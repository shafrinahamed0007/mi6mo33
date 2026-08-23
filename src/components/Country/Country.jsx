import "./Country.css";

const Country = ({ country }) => {
  const handleVisited = () => {
    console.log("Visited");
  };
  return (
    <div className="country">
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h4>Name: {country?.name?.common}</h4>
      <h3>Population: {country?.population?.population}</h3>
      <h3>
        Area: {country?.area?.area} sqft.{" "}
        {country?.area?.area > 300000 ? "Big Country" : "Small Country"}
      </h3>
      <button onClick={handleVisited}>Not Visited</button>
    </div>
  );
};

export default Country;

/**
 * 1. inline css (style object)
 * 2.
 */
