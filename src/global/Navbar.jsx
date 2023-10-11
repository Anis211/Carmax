import { Outlet } from "react-router-dom";
import { theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography, Link } from "@mui/material";

export default function Navbar() {
  const links = ["About us", "Catalogue", "Contact us"];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          className="Navbar"
          sx={{
            height: "130px",
            width: "100%",
            backgroundColor: "#003566",
            diaplay: "flex",
            flexDirection: "row",
          }}
        >
          <Grid container spacing={6} direction="row">
            <Grid
              item
              xs={4}
              sx={{ marginTop: "15px", position: "relative", left: "50px" }}
            >
              <Typography variant="logo" color="#FCCA46">
                Carmax
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                className="links"
                sx={{
                  width: "580px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "90px",
                  marginTop: "25px",
                  position: "relative",
                  left: "390px",
                }}
              >
                {links.map((link) => {
                  return (
                    <>
                      <Link underline="none" color="white" href="#about_us">
                        <Typography variant="body" sx={{ fontSize: "23px" }}>
                          {link}
                        </Typography>
                      </Link>
                    </>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Outlet />
      </ThemeProvider>
    </>
  );
}
