import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {withStyles} from '@material-ui/core/styles';
import withRoot from './withRoot';
import './App.css';

import Dashboard from './Dashboard/dashboard';

const styles = theme => ({
    root: {
        textAlign: 'center',
        flexGrow: 1,
    },
    navTitle: {
        flexGrow: 1,
    },
    anchorEl: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class App extends Component {
    state = {
        anchorEl: null,
        bottomNavValue: 0
    };

    handleMenuClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
    };

    handleBottomNavChange = (event, bottomNavValue) => {
        this.setState({bottomNavValue});
    };


    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const {bottomNavValue} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.anchorEl} color="inherit" aria-label="Menu"
                                    onClick={this.handleMenuClick}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleMenuClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={this.handleMenuClose}>Experience</MenuItem>
                            <MenuItem onClick={this.handleMenuClose}>Education</MenuItem>
                            <MenuItem onClick={this.handleMenuClose}>Projects</MenuItem>
                            <MenuItem onClick={this.handleMenuClose}>Contact Information</MenuItem>
                        </Menu>
                        <Typography variant="h6" color="inherit" className={classes.navTitle}>
                            Ishan Kaul Resume
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Dashboard/>
                <BottomNavigation
                    value={bottomNavValue}
                    onChange={this.handleBottomNavChange}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction label="Experience" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Education" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Projects" icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction label="Contact Information" icon={<LocationOnIcon/>}/>
                </BottomNavigation>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(App));
