import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#fff",
    },
    fontFamily: "FiraMono",
  },
  palette: {
    primary: {
      main: "#80B4E8",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: "#1a1b1d",
      },
    },
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: "#1a1b1d",
      },
      head: {
        backgroundColor: "#1a1b1d",
      },
    },
  },
});

export default theme;
