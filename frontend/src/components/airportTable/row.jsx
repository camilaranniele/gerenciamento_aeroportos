import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function Row(props) {
  const [open, setOpen] = useState(false);
  const { airport } = props;
  return (
    <>
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {airport.nome_aeroporto}
        </TableCell>
        <TableCell align="right">{airport.codigo_iata}</TableCell>
        <TableCell align="right">{airport.cidade}</TableCell>
        <TableCell align="right">
          <Button>edit</Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>{airport.nome_aeroporto}</div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
