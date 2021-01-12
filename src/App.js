import React, { useEffect, useState } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";
import InfoBox from "./infoBox";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const paises = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(paises);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

          </Select>
        </FormControl>
      </div>
      <div className="app__stats">
        <InfoBox title="Coronavirus cases" total={1} cases={2} />
        <InfoBox title="Recovered" total={3} cases={5} />
        <InfoBox title="Deaths" total={7} cases={8} />
      </div>
    </div>
  );
}

export default App;
