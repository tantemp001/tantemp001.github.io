import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={2} sx={{minHeight: 1}}>
        <main>{children}</main>
      </Grid>
    </ThemeProvider>
  );
}
