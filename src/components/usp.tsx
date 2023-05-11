import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Headset } from "@styled-icons/fluentui-system-filled/Headset";
import styled from "styled-components";
import { useTheme } from "@mui/material";

const StyledHeadset = styled(Headset)`
  border-radius: 50%;
  background-color: #ffffff;
  size: 40px;
  height: 64px;
  padding: 0 12px;
`;

const UspItem = () => {
  const { spacing } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",
        gap: spacing(2),
      }}
    >
      <Headset size={44} />
      <Typography
        sx={{
          width: "70%",
          fontSize: {
            xs: "15px",
            md: "20px",
          },
        }}
      >
        Fast, hassle-free loans with flexible terms.
      </Typography>
    </Box>
  );
};

const Usp = () => {
  return (
    <Box
      sx={{
        padding: { xs: "40px 30px", md: "40px 140px" },
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: {
          md: "space-between",
        },
        gap: {
          xs: "44px",
          md: 0,
        },
      }}
    >
      <UspItem />
      <UspItem />
      <UspItem />
    </Box>
  );
};

export default Usp;
