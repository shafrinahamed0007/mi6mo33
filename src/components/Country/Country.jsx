

const Country = ({country}) => {
    
    return (
        <div>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h4>Name: {country?.name?.common}</h4>
            <h3>Population: {country?.population?.population}</h3>
        </div>
    );
};

export default Country;