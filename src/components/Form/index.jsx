import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import Styles from "./styles";

const Form = () => {
  const classes = Styles();
  const [data, setData] = useState("");
  const [history, setHistory] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && data !== "") {
      const newItem = { data: data };
      setHistory([newItem, ...history]);
      setData("");
    }
  };

  const handleChange = (e) => {
    // check if value is alfa numeric or empty and ignore if not
    if (e.target.value.match(/^[a-zA-Z0-9]+$/) || e.target.value === "") {
      setData(e.target.value);
    }
  };

  return (
    <>
      <TextField
        value={data}
        label="Insira sua Tentativa"
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <TableContainer className={classes.tableRoot}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Tentativa</TableCell>
              {/* Bulls = Certo na posição certa */}
              <TableCell>Bulls</TableCell>
              {/* Cows = certo na posição errada */}
              <TableCell>Cows</TableCell>
              <TableCell>Levenshtein</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((item, index) => (
              <TableRow key={index + "row" + item}>
                <TableCell>{item.data}</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Form;
