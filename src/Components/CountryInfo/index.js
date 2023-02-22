import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../util/api";
import { Link } from "react-router-dom";
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import { Icon } from "leaflet";
import "./style.css"

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [details,setDetails] = useState([]);

  const { name } = useParams();

  //const borders = country.map((country) => country.borders);
  var latlng,latlngCapital,Capital,Country,Population;

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${name}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [name]);

  

  return (
    <div className="country__info__wrapper" style={{display:"inline"}}>

      {isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div className="country__info__container" key={index}>


          <div className="country__info-img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country__info">
            <img className="Country__info__coat" src={country.coatOfArms.png} alt=""/>
              <h3>{country.name.common}</h3>
            
            
            <div className="country__info-left">
              <h5>
                Population:{" "}
                <span>
                  {new Intl.NumberFormat().format(country.population)}
                </span>
              </h5>
              <h5>
                Region: <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region: <span>{country.subregion}</span>
              </h5>
              <h5>
                Capital: <span>{country.capital}</span>
              </h5>
              <div hidden="hidden">
              {latlng = country.latlng}
              {latlngCapital =  country.capitalInfo.latlng}
              {Capital = country.capital}
              {Country = country.name.common}
              {Population = Intl.NumberFormat().format(country.population)}
              </div>
            </div>
          </div>
        </div>
      ))}
      {console.log(name)}
      
      <Map center={latlngCapital} zoom={7}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latlngCapital} 
          onClick={() => {
            setDetails(Capital);
          }}/>

        {details && (
          <Popup
            position={latlngCapital}
            onClose={() => {
              setDetails(null);
            }}
          >
            <div>
              <h2>{Country}</h2>
              <p>Capital: {Capital}</p>
              <p>Population: {Population}</p>
            </div>
          </Popup>
        )}
      </Map>


    </div>
  );
};

export default CountryInfo;
