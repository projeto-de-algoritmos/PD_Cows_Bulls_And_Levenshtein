import { Container, Paper, ThemeProvider, Typography } from "@material-ui/core";
import { Form } from "./components";

import Styles from "./AppStyles";
import Theme from "./theme";

function App() {
  const classes = Styles();
  return (
    <ThemeProvider theme={Theme}>
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="h3" className={classes.title}>
          Cows, Bulls and Levenshtein
        </Typography>
        <Paper className={classes.paper} elevation={9}>
          <Form />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
