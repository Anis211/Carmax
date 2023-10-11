import { createTheme } from "@mui/material";

function defualts({ ...attrs }) {
  return { fontFamily: "Montserrat, sans-serif", color: "white", ...attrs };
}
export const theme = createTheme({
  typography: {
    logo: defualts({
      fontWeight: "800",
      fontSize: "40px",
    }),
    header: defualts({
      fontWeight: "700",
      fontSize: "40px",
    }),
    body: defualts({
      fontWeight: "400",
      fontSize: "28px",
    }),
  },
});
