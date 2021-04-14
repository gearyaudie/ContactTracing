import React, { useState, useEffect } from "react";

const FEATURED_API = "https://covid19.mathdro.id/api/countries/Malaysia";

function Api() {
    const [confirmed, setConfirmed] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);

    useEffect(() => {
        getAPI(FEATURED_API);
    }, []);

    const getAPI = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setConfirmed(data.confirmed);
                setDeaths(data.deaths);
                setRecovered(data.recovered);
            });
    };

    return (
        <div className='api'>
            <div className='container'>
                <div className='api-main-text'>
                    <h2>COVID-19 cases in Malaysia</h2>
                </div>
                <br />
                <div className='api-text grid-3'>
                    <div className='api-confirmed'>
                        <h3>Confirmed: </h3>
                        <h4>{confirmed.value}</h4>
                    </div>
                    <div className='api-deaths'>
                        <h3>Deaths: </h3>
                        <h4>{deaths.value}</h4>
                    </div>
                    <div className='api-recovered'>
                        <h3>Recovered: </h3>
                        <h4>{recovered.value}</h4>
                    </div>
                </div>
            </div>
            <div className='container'>
                <ul className='grid'>
                    <li className='card'>
                        Confirmed cases are in green, there are about{" "}
                        <strong>{confirmed.value}</strong> confimred Covid-19
                        cases in Malaysia.
                    </li>
                    <li className='card'>
                        Cases related to deaths are in red, there are about{" "}
                        <strong>{deaths.value}</strong> confimred Covid-19 cases
                        in Malaysia. This data is called from the below api:{" "}
                        <br />
                        <br />
                        https://covid19.mathdro.id/api/countries/Malaysia
                    </li>
                    <li className='card'>
                        Recovered cases are in green, there are about{" "}
                        <strong>{recovered.value}</strong> confimred Covid-19
                        cases in Malaysia.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Api;
