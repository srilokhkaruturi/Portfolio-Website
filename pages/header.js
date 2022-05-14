import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import {useRouter} from 'next/router';
import {useSession, signIn, signOut } from "next-auth/react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = [];
const settings = ['Logout'];

function Header(){
    // set up theme
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#272727',
          },
        },
      });
    const { data: session } = useSession();
    const router = useRouter()

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

    if(session){
        return (
            <ThemeProvider theme={darkTheme}>
            <AppBar position="static"  elevation={0} style={{background: '#272727'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'sans-serif',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    <ArticleIcon sx={{fontSize: 30, color:"#3c5c93"}}/>
                    Portfolio    
                </Typography>
    
        
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
    
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Profile" enterDelay={300} leaveDelay={200}>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={session.user.name} src={session.user.image} />
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
                    <MenuItem onClick={signOut}> Sign Out </MenuItem>
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
            </ThemeProvider>

        );


    }

    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar position="static" elevation={0} style={{background: '#272727'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'sans-serif',
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    <ArticleIcon sx={{fontSize: 30, color:"#3c5c93"}}/>
                    Portfolio    
                    
                    
                </Typography>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Inter',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                PORTFOLIO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Sign in with Github" enterDelay={300} leaveDelay={200}>
                    <IconButton onClick={() => signIn("github", {callbackUrl: router.query.callbackUrl})}>
                        <GitHubIcon  fontSize='large'/>
                    </IconButton>
                    
                </Tooltip>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
        </ThemeProvider>
    );
};
export default Header;

//<button >Sign in with Github</button>


