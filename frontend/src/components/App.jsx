import "./App.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Table from "./AirportTable";
import Loading from "./Loading";
import AirportModal from "./AirportModal";
import useAirports from "../hooks/useAirports";
import { useState } from "react";

function App() {
  const {
    airports,
    airportsIATA,
    loading,
    createAirport,
    editAirport,
    getAirportByIATA,
    listAirports,
    deleteAirportByIATA,
  } = useAirports();
  const [selectedIATA, setSlectedIATA] = useState("");
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);

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
    <Container maxWidth="lg">
      <Loading open={loading} />
      <AirportModal
        title="Criar aeroporto"
        open={open}
        handleClose={() => setOpen(false)}
        submit={createAirport}
      />
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
          <Button variant="contained" onClick={handleModalOpen}>
            Adicionar novo aeroporto
          </Button>
        </div>
        <div>
          <Table
            airports={airports}
            editAirport={editAirport}
            deleteAirportByIATA={deleteAirportByIATA}
          />
        </div>
      </main>
    </Container>
  );
}

export default App;
