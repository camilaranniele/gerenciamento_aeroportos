import { useEffect, useState } from "react";
import axios from "axios";

export default function useAirports() {
  const [airports, setAirports] = useState([]);
  const [airportsIATA, setAirportsIATA] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = "http://localhost:5000";

  useEffect(() => {
    listAirports();
  }, []);

  async function listAirports() {
    setLoading(true);
    const response = await axios.get(`${baseURL}/aeroportos`);
    const airports = response.data;
    setAirports(airports);
    const airportsIATA = airports.map((airport) => airport.codigo_iata);
    setAirportsIATA(airportsIATA);
    setLoading(false);
  }

  async function createAirport(airport) {
    setLoading(true);
    await axios.post(`${baseURL}/aeroportos`, airport);
    await listAirports();
    setLoading(false);
  }

  async function editAirport(airport) {
    setLoading(true);
    await axios.put(`${baseURL}/aeroportos/${airport.codigo_iata}`, airport);
    await listAirports();
    setLoading(false);
  }

  async function getAirportByIATA(codigo_iata) {
    setLoading(true);
    const response = await axios.get(`${baseURL}/aeroportos/${codigo_iata}`);
    setAirports([response.data]);
    setLoading(false);
  }

  async function deleteAirportByIATA(codigo_iata) {
    setLoading(true);
    await axios.delete(`${baseURL}/aeroportos/${codigo_iata}`);
    await listAirports();
    setLoading(false);
  }

  return {
    airports,
    airportsIATA,
    loading,
    listAirports,
    createAirport,
    editAirport,
    getAirportByIATA,
    deleteAirportByIATA,
  };
}
