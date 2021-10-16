import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import React from "react";

import Styles from "./styles";

const EndDialog = ({ open, isVictory, onRestartClick }) => {
  const classes = Styles();
  return (
    <Dialog
      maxWidth="xs"
      open={open}
      disableEscapeKeyDown
      classes={{ paper: classes.dialogRoot }}
    >
      <DialogTitle>
        {isVictory ? (
          "Parabéns você ganhou!!"
        ) : (
          <span>Que pena, você perdeu... &#128517;</span>
        )}
      </DialogTitle>
      <DialogActions>
        <Grid container direction="row" justifyContent="space-between">
          <Button
            color="secondary"
            onClick={() => {
              window.location.href =
                "https://github.com/projeto-de-algoritmos/PD_Cows_Bulls_And_Levenshtein";
            }}
          >
            Finalizar
          </Button>
          <Button color="primary" variant="outlined" onClick={onRestartClick}>
            Recomeçar
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default EndDialog;
