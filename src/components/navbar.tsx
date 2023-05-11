import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Menu as MenuIcon } from "@styled-icons/entypo/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuStyles = {
    color: "#000000",
  };
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        backgroundColor: "#FFFFFF",
        padding: {
          xs: "10px",
          md: "10px 140px",
        },
        display: "flex",
        justifyContent: "space-between",
        alignItems: {
          xs: "center",
        },
      }}
    >
      <Image src="/MMPeN4N.png" alt="fin-logo" width={140} height={60} />
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          gap: {
            xs: 0,
            md: "50px",
          },
          alignItems: {
            md: "center",
          },
        }}
      >
        <Typography
          sx={{
            ...menuStyles,
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            ...menuStyles,
          }}
        >
          Loans
        </Typography>
        <Typography
          sx={{
            ...menuStyles,
          }}
        >
          FAQ
        </Typography>
        <Typography
          sx={{
            ...menuStyles,
          }}
        >
          Investments
        </Typography>
        <Typography
          sx={{
            ...menuStyles,
          }}
        >
          Contact
        </Typography>
        <Button variant="contained">Get loan</Button>
      </Box>
      <Box
        sx={{
          display: {
            md: "none",
          },
        }}
      >
        <MenuIcon
          fill="#000000"
          size={32}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          id="nav-menu"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
            <MenuItem onClick={handleClose}>
            <Typography
            sx={{
              ...menuStyles,
            }}
          >
            Home
          </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <Typography
            sx={{
              ...menuStyles,
            }}
          >
            Loans
          </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              sx={{
                ...menuStyles,
              }}
            >
              FAQ
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              sx={{
                ...menuStyles,
              }}
            >
              Investments
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              sx={{
                ...menuStyles,
              }}
            >
              Contact
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
           <Button variant="contained">Get loan</Button>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
