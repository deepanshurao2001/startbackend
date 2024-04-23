import * as React from 'react';
import {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Recent from '../MainSpaceLayout/Recent';
import Trending from '../MainSpaceLayout/Trending';
import UserBlog from '../UserBlog/UserBlog';
import Profile from '../Profile/Profile';

const pages = ['Recent', 'Trending', 'MyBlogs'];
const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("Recent")

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

  return (
    <Box>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>

                {/* Search Area */}
                <Box sx={{ marginRight:'50px'}}>
                  <input type="text" placeholder="Search..." style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={() => {setCurrentPage(page)}}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>


                {/* Navigation Menu */}

                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
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
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={() => {setCurrentPage(setting)}}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
            <Box>

                      {/* Pages */}
        {/* coontional render */}
                      {currentPage === "Recent" && <Recent/>}                
                      {currentPage === "Trending" && <Trending/>}
                      {currentPage === "MyBlogs" && <UserBlog/>}
                      {currentPage === "Profile" && <Profile/>}

            </Box>
    </Box>
  );
}
export default ResponsiveAppBar;


/*

<button> your button </button>
let ary = ["Open","Edit","Close"]
// Tujhe ye 3 buttons render krne hain

// Js mein map use hota hai
// [ARRAY].map(callback)
// callback is a function that runs when parent "map()" is executed
// So 3 elements in ary so map() will be called 3 times and callback will run 3 times
// Callback is just a function passed in another function in simple words
// For map function, it is (item,index) => { // your logic }

// So to map an array of 5 numbers,
[1,2,3,4,5].map((yourItem,yourIndex) => {
  console.log(yourItem*5); // 5,10,15,20,25 output
  console.log(yourIndex) // 1,2,3,4,5 output
})

here, (yourItem,yourIndex) => {
  console.log(yourItem*5); // 5,10,15,20,25 output
  console.log(yourIndex) // 1,2,3,4,5 output

  return (
    <button>{yourItem}</button>
  )

} IS THE CALLBACK
for ARRAY [1,2,3,4,5] .map()



*/