import "./App.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Table from "./airportTable";
import useAirports from "../hooks/useAirports";

function App() {
  const { airports, airportsIATA } = useAirports();

  return (
    <>
      <header>
        <h1>Aeroportos</h1>
      </header>
      <main>
        <div className="airport-filter">
          <Autocomplete
            id="select-airport"
            options={airportsIATA}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Aeroportos" />
            )}
          />
          <Button variant="contained">Filtrar</Button>
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
