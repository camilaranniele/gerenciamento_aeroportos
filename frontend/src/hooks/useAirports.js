import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [airports, setAirports] = useState([]);
  const [airportsIATA, setAirportsIATA] = useState([]);

  useEffect(() => {
    async function listAirports() {
      const response = await axios.get("http://localhost:5000/aeroportos");
      const airports = response.data;
      setAirports(airports);
      const airportsIATA = airports.map((airport) => airport.codigo_iata);
      setAirportsIATA(airportsIATA);
    }

    listAirports();
  }, []);

  return { airports, airportsIATA };
}
