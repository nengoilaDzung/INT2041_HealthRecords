import React, { useEffect, useState } from "react";
import Axios from "axios";
const Medical = () => {
  const [drugs, setDrugs] = useState([]);
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://medicine-name-and-details.p.rapidapi.com/",
    params: {
      medicineName: {drugs},
    },
    headers: {
      "X-RapidAPI-Key": "7036c83cdfmsh7fcdb6c7d786bf4p12f8a4jsn917cb3010078",
      "X-RapidAPI-Host": "medicine-name-and-details.p.rapidapi.com",
    },
  };

  return (<div></div>);
};

export default Medical;
