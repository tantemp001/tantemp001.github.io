import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deDE } from '@mui/material/locale';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
}, deDE);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={2} sx={{minHeight: 1, width: '100%', flexGrow: 1 }} display="flex" justifyContent="center" alignItems="center" size="grow">
        <main>{children}</main>
      </Grid>
    </ThemeProvider>
  );
}
