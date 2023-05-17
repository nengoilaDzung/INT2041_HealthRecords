import React, { useEffect, useState } from "react";
import Axios from "axios";
const Medical = () => {
  const axios = require("axios");
  const [drugs, setDrugs] = useState("");
  const [medicines, setMedicines] = useState([]);
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    method: "GET",
    url: "https://medicine-name-and-details.p.rapidapi.com/",
    params: {
      medicineName: drugs,
    },
    headers: {
      "X-RapidAPI-Key": "7036c83cdfmsh7fcdb6c7d786bf4p12f8a4jsn917cb3010078",
      "X-RapidAPI-Host": "medicine-name-and-details.p.rapidapi.com",
    },
  };
  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(options);
      setMedicines(response.data);
      localStorage.setItem("medi", medicines);
      console.log(medicines);
      setIsLoading(false);
    } catch (error) {
      // Handle fetch error
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    if (drugs) {
      handleSearch();
    }
  }, []);
  var drg = localStorage.getItem("medi");
  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={drugs}
          onChange={(e) => setDrugs(e.target.value)}
          placeholder="Enter medicine name"
          style={{ width: 250, height: 30 }}
        />
        <button
          onClick={handleSearch}
          style={{ height: 30, paddingLeft: 20, paddingRight: 20 }}
        >
          Search
        </button>
      </div>
      <div>
        <div className="med-card">
          {medicines &&
            medicines.slice(0, randomNumber(10, 30)).map((med, index) => (
              <div key={index} className="med-name">
                <a
                  href={med.detailsUrl}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <h4>{med.medicineName}</h4>
                  <img
                    src={med.medicineImage}
                    style={{ height: 300, width: 300 }}
                  ></img>
                </a>
                {/* Add additional details as needed */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Medical;
