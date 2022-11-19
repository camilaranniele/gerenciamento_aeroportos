import React from "react";
import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <h1>Aeroportos</h1>
      </header>
      <main>
        <div className="airport-filter">
          <Autocomplete
            id="select-airport"
            options={["JPA", "CNF", "GIG"]}
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Nome</TableCell>
                  <TableCell align="right">IATA</TableCell>
                  <TableCell align="right">Cidade</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    Tancredo Neves
                  </TableCell>
                  <TableCell align="right">CNF</TableCell>
                  <TableCell align="right">Belo Horizonte</TableCell>
                  <TableCell align="right">
                    <Button>edit</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <div>futuro componente</div>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </>
  );
}

export default App;
