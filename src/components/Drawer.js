import React from 'react';
import clsx from 'clsx';
import { Link } from "gatsby"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LayersIcon from '@material-ui/icons/Layers';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserMenu from './UserMenu'
import {
    Button,
    Snackbar,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'rgba(36, 36, 36, 0.993)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'rgba(36, 36, 36, 0.993)',
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100%",
    width: '100%',
  },
}));

const MiniDrawer = ({ Element }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mapChoice, setMapChoice] = React.useState('string')
  const [snackOpen, setSnackOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const HandleOverlayClick = () => {
      alert('Menu for map design options will go here')
  }

    const onSnackOpen = () => {
        setSnackOpen(true)
    }

    const onSnackClose = () => {
        setSnackOpen(false)
    }

    const handleClick = (event) => {
        console.log(event)
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
    setAnchorEl(null);
    };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sightings Map
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <List>
            <Link to="/">
                <ListItem button key={'Home'}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
            </Link>
            <ListItem button key={'Add Sighting'} onClick={() => setSnackOpen(true)}>
                <ListItemIcon><AddBoxIcon /></ListItemIcon>
                <ListItemText primary={'Add Sighting'} />
            </ListItem>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackOpen}
                autoHideDuration={6000}
                onClose={() => setSnackOpen(false)}
                message="Predator Reported"
                action={
                <>
                    <Button color="secondary" size="small" onClick={() => setSnackOpen(false)}>
                    UNDO
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSnackOpen(false)}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </>
                }
            />
            <ListItem button key={'Map Settings'} onClick={handleClick}>
                <ListItemIcon><LayersIcon /></ListItemIcon>
                <ListItemText primary={'Map Settings'} />
            </ListItem>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {setMapChoice('mapbox/dark-v10'); handleClose()}}><img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01810f9a5b1c55841ee6f_ipad-map%20dark-p-800.png" alt="darkmap"/></MenuItem>
                <MenuItem onClick={() => {setMapChoice('mapbox/streets-v11'); handleClose()}}><img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01b977fb48a501b898a93_ipad-map%20streets.png" alt="streetsmap"/></MenuItem>
                <MenuItem onClick={() => {setMapChoice('mapbox/outdoors-v11'); handleClose()}}><img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01bd0779fa266f900ba3c_ipad-map%20outdoors-p-800.png" alt="terrainmap"/></MenuItem>
                <MenuItem onClick={() => {setMapChoice('mapbox/satellite-streets-v11'); handleClose()}}><img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01c39578be545290d4aae_ipad-map%20satellite-p-800.png" alt="satellitemap"/></MenuItem>
                <MenuItem onClick={() => {setMapChoice('mapbox/light-v10'); handleClose()}}><img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea012c7779fa2ca49008383_ipad-map.png" alt="lightmap"/></MenuItem>
            </Menu>
        </List>
        <Divider />
        {/* <UserMenu /> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {Element}
      </main>
    </div>
  );
}

export default MiniDrawer
