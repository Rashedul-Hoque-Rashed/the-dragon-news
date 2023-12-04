'use client'
import * as React from 'react';
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
import Image from 'next/image';
import logo from '@/assets/logo.svg'
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const navItem = [
  {
    route: 'Home',
    pathName: '/',
  },
  {
    route: 'Pages',
    pathName: '/pages',
  },
  {
    route: 'Category',
    pathName: '/category',
  },
  {
    route: 'News',
    pathName: '/news',
  },
  {
    route: 'Post',
    pathName: '/post',
  },
  {
    route: 'Contact',
    pathName: '/contact',
  },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" sx={{backgroundColor: '#151515'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
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
            <Image src={logo} width={150} height={24} alt="dragon news logo" />
          </Typography>

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
              {
              navItem.map((item, index) => <MenuItem key={index}>
                <Link href={item.pathName}>
                <Button textAlign="center"> {item.route} </Button>
                </Link>
            </MenuItem>)
              }
            </Menu>
          </Box>
          
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
            <Image src={logo} width={150} height={24} alt="dragon news logo" />
          </Typography>
          <Box sx={{ w: 'full', mx: 'auto', display: { xs: 'none', md: 'flex' } }}>
            {navItem.map((item, index) => (
              <Link 
              key={index}
              href={item.pathName}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {item.route}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <IconButton aria-label="facebook">
  <FacebookIcon sx={{color: 'white'}}/>
</IconButton>
          <IconButton aria-label="facebook">
  <TwitterIcon sx={{color: 'white'}}/>
</IconButton>
          <IconButton aria-label="facebook">
  <YouTubeIcon sx={{color: 'white'}}/>
</IconButton>
          <IconButton aria-label="facebook">
  <LinkedInIcon sx={{color: 'white'}}/>
</IconButton>
          <IconButton aria-label="facebook">
  <InstagramIcon sx={{color: 'white'}}/>
</IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;