import { makeStyles } from "@material-ui/core";

const Styles = makeStyles({
  root: {
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #2c3e50 74%)",
    color: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "80%",
    marginTop: 16,
    height: "70%",
    maxHeight: "70%",
    maxWidth: 500,
    padding: 20,
    backgroundColor: "#202224",
  },
});

export default Styles;
