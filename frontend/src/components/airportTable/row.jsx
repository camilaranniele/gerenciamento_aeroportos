import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AirportDetails from "../AirportDetails";
import AirportModal from "../AirportModal";

export default function Row(props) {
  const [openDetails, setOpenDetails] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { airport, deleteAirportByIATA, editAirport } = props;

  function handleDelete() {
    deleteAirportByIATA(airport.codigo_iata);
  }

  return (
    <>
      <AirportModal
        title="Editar aeroporto"
        airport={airport}
        open={openModal}
        handleClose={() => setOpenModal(false)}
        submit={editAirport}
      />
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenDetails(!openDetails)}
          >
            {openDetails ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {airport.nome_aeroporto}
        </TableCell>
        <TableCell align="right">{airport.codigo_iata}</TableCell>
        <TableCell align="right">{airport.cidade}</TableCell>
        <TableCell align="right">
          <IconButton onClick={() => setOpenModal(true)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openDetails} timeout="auto" unmountOnExit>
            <AirportDetails airport={airport} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
