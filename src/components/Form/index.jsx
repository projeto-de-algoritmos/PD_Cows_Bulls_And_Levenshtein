import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import {
  countBulls,
  countCows,
  generateRandomString,
  getLevenshteinDistance,
} from "../core";
import Styles from "./styles";
import EndDialog from "../EndDialog";

const Form = () => {
  const classes = Styles();
  const [data, setData] = useState("");
  const [history, setHistory] = useState([]);
  const [secret, setSecret] = useState("");
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const randomString = generateRandomString(8);
    setSecret(randomString);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && data !== "") {
      const newData = data.toUpperCase();
      const newItem = { data: newData, bulls: 0, cows: 0, lvsht: 0 };
      newItem.bulls = countBulls(newData, secret);
      newItem.cows = countCows(newData, secret);
      newItem.lvsht = getLevenshteinDistance(newData, secret);
      setHistory([newItem, ...history]);
      if (data === secret) {
        setIsEnd(true);
      }
      setData("");
    }
  };

  const handleChange = (e) => {
    // check if value is alfa numeric or empty and ignore if not
    // QUESTION should upper and lower case distingue between each other?
    if (e.target.value.match(/^[a-zA-Z0-9]+$/) || e.target.value === "") {
      setData(e.target.value);
    }
  };

  const handleNewGame = () => {
    setHistory([]);
    setIsEnd(false);
    const randomString = generateRandomString(8);
    setSecret(randomString);
    setData("");
  };

  return (
    <>
      <TextField
        value={data}
        label="Insira sua Tentativa"
        inputProps={{
          maxLength: secret.length,
        }}
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
                <TableCell>{item.bulls}</TableCell>
                <TableCell>{item.cows}</TableCell>
                <TableCell>{item.lvsht}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EndDialog
        isVictory={isEnd}
        open={isEnd}
        onRestartClick={handleNewGame}
      />
    </>
  );
};

export default Form;
