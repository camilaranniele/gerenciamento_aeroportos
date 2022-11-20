import "./App.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Table from "./AirportTable";
import Loading from "./Loading";
import useAirports from "../hooks/useAirports";
import { useState } from "react";

function App() {
  const { airports, airportsIATA, getAirportByIATA, listAirports } =
    useAirports();
  const [selectedIATA, setSlectedIATA] = useState("");

  function handleFilter() {
    if (selectedIATA) {
      getAirportByIATA(selectedIATA);
      return;
    }
    listAirports();
  }

  function handleSelectedIATA(event, value) {
    setSlectedIATA(value);
  }
  return (
    <>
      <Loading open={airports.length === 0} />
      <header>
        <h1>Aeroportos</h1>
      </header>
      <main>
        <div className="airport-filter">
          <Autocomplete
            id="select-airport"
            options={airportsIATA}
            onChange={handleSelectedIATA}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Aeroportos" />
            )}
          />
          <Button variant="contained" onClick={handleFilter}>
            Filtrar
          </Button>
        </div>
        <div className="add-airport">
          <Button variant="contained">Adicionar novo aeroporto</Button>
        </div>
        <div>
          <Table airports={airports} />
        </div>
      </main>
    </>
  );
}

export default App;
