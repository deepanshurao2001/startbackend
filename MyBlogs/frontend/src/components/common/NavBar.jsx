import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
//import Recent from "../MainSpaceLayout/Recent";

import { useNavigate, useLocation } from "react-router-dom";
import { NoteOutlined } from "@mui/icons-material";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [currentPage, setCurrentPage] = useState("Recent");
  const [currentPage, setCurrentPage] = useState("Recent");

  const pages = [
    {
      title: "Recent",
      action: () => {
        setCurrentPage("Recent");
        navigate("/mainspace");
      },
    },
    {
      title: "Trending",
      action: () => {
        setCurrentPage("Trending");
        navigate("/trending");
      },
    },
  ];
  useEffect(() => {
    const pathname = location.pathname;
    const page = pages.find((p) => pathname.includes(p.title.toLowerCase()));
    if (page) {
      setCurrentPage(page.title);
    }
  }, [location.pathname]);
  // useEffect(() => {
  //     getLoggedInUserDetails(navigate, '/mainspace')
  // }, [])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      title: "Create Blog",
      action: () => {
        navigate("/blog");
      },
    },
    {
      title: "Profile",
      action: () => {
        navigate("/profile");
      },
    },
    {
      title: "Logout",
      action: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
      },
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NoteOutlined sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blogs
          </Typography>

          {/* Search Area */}
          <Box sx={{ marginRight: "50px" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ title, action }, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    action();
                  }}
                >
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Navigation Menu */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map(({ title, action }, index) => (
              <Button
                key={index}
                onClick={() => action()}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography
                  textAlign="center"
                  sx={{ color: currentPage === title ? "Black" : "Primary" }}
                >
                  {title}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Profile and menu */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ title, action }, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    action();
                  }}
                >
                  <Typography textAlign="center">{title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
