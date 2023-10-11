import { theme } from "../theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Grid, Typography, Icon } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="about_us"
        sx={{ height: "690px", marginTop: "80px", marginLeft: "110px" }}
      >
        <Grid container spacing={2} direction="row">
          <Grid item xs={5}>
            <Box
              sx={{
                height: "700px",
                width: "580px",
                display: "flex",
                flexDirection: "column",
                gap: "60px",
                position: "relative",
                top: "100px",
                left: "-20px",
              }}
            >
              <Typography variant="header">
                Магазин авто-запчастей вместе c CTO
              </Typography>
              <Typography variant="body">
                Наше предприятие гордится тем что мы на рынке уже больше 20-ти
                лет. Мы продаем запчасти высшего качества по самым низким ценам
                во всей Астане. B добавок к этому мы предоставляем вам услуги
                CTO по таким же низким ценам как и сами запчасти.
              </Typography>
            </Box>
            <div
              style={{
                width: "225px",
                height: "225px",
                background: "#A90E46",
                boxShadow: "80px 80px 80px ",
                filter: "blur(70px)",
                position: "relative",
                bottom: "670px",
                left: "-130px",
                zIndex: -1,
              }}
            />
            <div
              style={{
                width: "155px",
                height: "155px",
                background: "#00B4D8",
                boxShadow: "70px 70px 70px ",
                borderRadius: 9999,
                filter: "blur(70px)",
                position: "relative",
                bottom: "470px",
                left: "430px",
                zIndex: -1,
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <Icon
              sx={{
                width: "670px",
                height: "650px",
                position: "relative",
                left: "60px",
                top: "40px",
              }}
            >
              <img
                src="src/images/orig.webp"
                style={{
                  width: "670px",
                  height: "540px",
                  borderRadius: "115px",
                }}
              />
            </Icon>
            <div
              style={{
                width: "155px",
                height: "155px",
                background: "#031D44",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: 9999,
                border: "10px #C1121F solid",
                position: "relative",
                bottom: "175px",
                left: "500px",
                zIndex: -1,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
