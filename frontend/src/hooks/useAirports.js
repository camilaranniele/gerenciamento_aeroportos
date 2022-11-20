import { useEffect, useState } from "react";
import axios from "axios";

export default function useAirports() {
  const [airports, setAirports] = useState([]);
  const [airportsIATA, setAirportsIATA] = useState([]);

  const baseURL = "http://localhost:5000";
  useEffect(() => {
    listAirports();
  }, []);

  async function listAirports() {
    const response = await axios.get(`${baseURL}/aeroportos`);
    const airports = response.data;
    setAirports(airports);
    const airportsIATA = airports.map((airport) => airport.codigo_iata);
    setAirportsIATA(airportsIATA);
  }

  async function createAirport() {
    await axios.post(`${baseURL}/aeroportos`);
  }

  async function getAirportByIATA(codigo_iata) {
    const response = await axios.get(`${baseURL}/aeroportos/${codigo_iata}`);
    setAirports([response.data]);
  }

  return {
    airports,
    airportsIATA,
    listAirports,
    createAirport,
    getAirportByIATA,
  };
}
