import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import Image from "next/image";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";

const Hero = () => {
  const { spacing } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#EEB609",
        width: "100vw",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        padding: { xs: "0 10px 60px", md: "140px 0 80px 140px" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#000000",
            fontWeight: 700,
            width: {
              xs: "100%",
              md: "60%",
            },
            fontSize: {
              xs: "40px",
              md: "80px",
            },
            marginBottom: {
              xs: spacing(4),
              md: spacing(8),
            },
            lineHeight: {
              xs: "50px",
              md: "120px",
            },
          }}
        >
          Get Instant Loans with Low Interest
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#000000",
            fontWeight: 400,
            fontSize: "15px",
            width: {
              xs: "100%",
              md: "40%",
            },
            lineHeight: {
              xs: "24px",
              md: "40px",
            },
            marginBottom: spacing(6),
          }}
        >
          Our team of experts uses a methodology to Identify your loan needs.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: spacing(1.5),
            marginBottom: spacing(3),
          }}
        >
          <TextField
            id="outlined-email"
            placeholder="Enter email address"
            type="email"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained">Get started</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: {
              xs: spacing(1),
              md: spacing(4),
            },
            justifyContent: {
              xs: "space-around",
              md: "unset",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: {
                xs: spacing(1),
                md: spacing(2),
              },
              alignItems: "center",
            }}
          >
            <CheckCircleFill size={16} fill="#000000" />
            <Typography
              sx={{
                color: "#000000",
              }}
            >
              Get 30 day free trial
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: {
                xs: spacing(1),
                md: spacing(2),
              },
              alignItems: "center",
            }}
          >
            <CheckCircleFill size={16} fill="#000000" />
            <Typography
              sx={{
                color: "#000000",
              }}
            >
              Get 30 day free trial
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Image
          src="BQwkKh9.png"
          width={840}
          height={680}
          alt="Picture of the author"
        />
      </Box>
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          justifyContent: "center",
          marginTop: "90px",
        }}
      >
        <Image
          src="/462xOVc.png"
          alt="hero-banner-mobile"
          width={340}
          height={540}
        />
      </Box>
    </Box>
  );
};

export default Hero;
