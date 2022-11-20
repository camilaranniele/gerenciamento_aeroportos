import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function AirportModal(props) {
  const { open, handleClose, title, submit, airport } = props;
  const [newAirport, setNewAirport] = useState({ id_aeroporto: -1 });

  useEffect(() => {
    if (airport) {
      setNewAirport(airport);
    }
  }, [airport]);

  function handleInputChange(inputType) {
    return function (event) {
      setNewAirport({ ...newAirport, [inputType]: event.target.value });
      console.log(event.target.value);
      console.log(newAirport);
    };
  }

  function handleSubmit(airport) {
    submit(airport);
    setNewAirport({ id_aeroporto: -1 });
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-content">
        <Typography className="modal-title" variant="h5" component="h2">
          {title}
        </Typography>
        <div className="modal-inputs">
          <TextField
            className="nome"
            id="outlined-basic"
            label="Nome do Aeroporto"
            variant="outlined"
            value={newAirport.nome_aeroporto}
            onChange={handleInputChange("nome_aeroporto")}
          />
          <TextField
            className="iata"
            id="outlined-basic"
            label="Código IATA"
            variant="outlined"
            disabled={!!airport}
            value={newAirport.codigo_iata}
            onChange={handleInputChange("codigo_iata")}
            inputProps={{ style: { textTransform: "uppercase" }, maxLength: 3 }}
          />
          <TextField
            className="cidade"
            id="outlined-basic"
            label="Cidade"
            variant="outlined"
            value={newAirport.cidade}
            onChange={handleInputChange("cidade")}
          />
          <TextField
            className="pais"
            id="outlined-basic"
            label="Código do país"
            variant="outlined"
            value={newAirport.codigo_pais_iso}
            onChange={handleInputChange("codigo_pais_iso")}
            inputProps={{ style: { textTransform: "uppercase" }, maxLength: 2 }}
          />
          <TextField
            className="latitude"
            id="outlined-basic"
            label="Latitude"
            variant="outlined"
            type="number"
            value={newAirport.latitude}
            onChange={handleInputChange("latitude")}
          />
          <TextField
            className="longitude"
            id="outlined-basic"
            label="Longitude"
            variant="outlined"
            type="number"
            value={newAirport.longitude}
            onChange={handleInputChange("longitude")}
          />
          <TextField
            className="altitude"
            id="outlined-basic"
            label="Altitude"
            variant="outlined"
            type="number"
            value={newAirport.altitude}
            onChange={handleInputChange("altitude")}
          />
        </div>
        <div className="modal-buttons">
          <Button variant="outlined" onClick={handleClose}>
            CANCELAR
          </Button>
          <Button variant="contained" onClick={() => handleSubmit(newAirport)}>
            SALVAR
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
