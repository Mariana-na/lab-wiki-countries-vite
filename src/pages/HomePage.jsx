import "../App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import CountryDetailsPage from "./CountryDetailsPage";

function HomePage() {

    const [countries, setCountries] = useState ([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
                console.log(response.data);
                setCountries(response.data);
            } catch (error) {
                console.error("Error fetching Countries data:", error);
            }
        };
        fetchCountries();
    }, []);

    return (
        <div>
            <h2>WikiCountries: Your Guide to the World</h2>
            
                {countries.map((oneCountry) => (
                    <p key={oneCountry.alpha3Code}>
                         <Link to={`/CountryDetailsPage/${oneCountry.alpha3Code}`}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha3Code.toLowerCase()}.png`}
 alt={oneCountry.name.common}/>
                         </Link>
                    </p>
                ))}
        </div>
    )
}

export default HomePage;
