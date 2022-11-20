import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";
import Row from "./Row";

export default function AirportTable(props) {
  const [page, setPage] = useState(0);
  const { airports } = props;

  return (
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
          {airports.slice(page * 10, page * 10 + 10).map((airport) => (
            <Row airport={airport} />
          ))}
        </TableBody>
        <Footer page={page} setPage={setPage} total={airports.length} />
      </Table>
    </TableContainer>
  );
}
