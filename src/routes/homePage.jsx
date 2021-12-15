import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import * as React from "react";
import {Box, CssBaseline, Divider, IconButton, Link, List, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MainListItems from './listItems';
import SecondaryListItems from './seondaryListItems';
import {useState} from "react";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {      // Code taken from Material UI examples
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


// Code taken from Material UI examples
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);


const mdTheme = createTheme({
    palette: {
        primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#263238',
        },
        secondary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#ffffff',
        },
    },
});

let HomePage = () => {
    let [open, setOpen] = useState(false);
    let toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
              <Box sx={{display: 'flex'}}>
                  <CssBaseline />
                  <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px',
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Blood Bank Management
                        </Typography>
                    </Toolbar>
                  </AppBar>
                  <Drawer variant="permanent" open={open}>
                      <Toolbar
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                              px: [1],
                          }}
                      >
                          <IconButton onClick={toggleDrawer}>
                              <ChevronLeftIcon />
                          </IconButton>
                      </Toolbar>
                      <Divider />
                      <List>{<MainListItems/>}</List>
                      <Divider />
                      <List>{<SecondaryListItems/>}</List>
                  </Drawer>
                  <Box
                      component="main"
                      sx={{
                          backgroundColor: (theme) =>
                              theme.palette.mode === 'light'
                                  ? theme.palette.grey[100]
                                  : theme.palette.grey[900],
                          flexGrow: 1,
                          height: '100vh',
                          overflow: 'auto',
                      }}
                  >
                      <Toolbar />
                  </Box>
              </Box>
        </ThemeProvider>




    );
}

// {/*// <div>*/}
// {/*//     <h1>Blood Bank Management</h1>*/}
// {/*//     <h4>Siloam Springs Bank Location</h4>*/}
// {/*//     <nav*/}
// {/*//         style={{*/}
// {/*//             borderBottom: "solid 1px",*/}
// {/*//             paddingBottom: "1rem"*/}
// {/*//         }}*/}
// {/*//     >*/}
// {/*//         <Link to="/patients">Patients</Link>  |{" "}*/}
// {/*//         <Link to="/donors">Donors</Link>*/}
// {/*//     </nav>*/}
// {/*//     <Outlet />*/}
// {/*// </div>*/}

export default HomePage;