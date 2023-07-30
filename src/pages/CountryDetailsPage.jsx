import "../App.css";
import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function CountryDetails() {

    const {alpha3Code} = useParams ();
    const [countryData, setCountryData] = React.useState(null);

    React.useEffect (() => {
        const fetchCountryData = async () => {
            try {
              const response = await axios.get(
                `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
              );
              const data = await response.json();
              setCountryData(data);
            } catch (error) {
              console.error('Error fetching country data:', error);
            }
          };
      
          fetchCountryData();
        }, [alpha3Code]);

        if (!countryData) {
            return <div>Loading...</div>;
          }

    return (
        <div>
            <h2>Country Details</h2>
            <h3>{countryData.name.common}</h3>
            <p>Capital: {countryData.capital}</p>
            <p>Population: {countryData.population}</p>
        </div>
    )
}

export default CountryDetails;
