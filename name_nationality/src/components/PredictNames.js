// src/components/NamePredictor.js
import React, { useState, useEffect, useRef } from "react"; //importing different hooks used in the app

export default function PredictNames() {
  const [name, setName] = useState(""); // initialise useState to store names
  const [countryData, setCountryData] = useState(null); // initialise useState to store country data
  const inputRef = useRef(); //inputRef to be used later in code (line 20)

  //using async function to fetch api data to use later
  const fetchNationality = async () => {
    try {
      const response = await fetch(`https://api.nationalize.io?name=${name}`);
      const data = await response.json();
      setCountryData(data.country[0]);
    } catch (error) {
      console.error("Error fetching nationality data:", error);
    }
  };

  useEffect(() => {
    //hook runs when the component mounts (empty dependency array [])
    inputRef.current.focus(); // Auto-focus input field on mount
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchNationality}>Predict Nationality</button>{" "}
      {/* button will fetch name data when clicked */}
      {countryData && (
        <div>
          {/* data being called */}
          {/* calling name data */}
          <p>Name: {name}</p>
          {/* calling first country to show up  */}

          <p>Country: {countryData.country_id}</p>

          {/* calling probaility data */}

          <p>Probability: {countryData.probability.toFixed(3)}</p>
        </div>
      )}
    </div>
  );
}
