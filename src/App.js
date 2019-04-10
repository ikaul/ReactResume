import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
    Fade,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@material-ui/core';
import {
    Assignment as AssignmentIcon,
    Code as CodeIcon,
    Dashboard as DashboardIcon,
    LocationOn as LocationOnIcon,
    Menu as MenuIcon,
    Work as WorkIcon
} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';
import withRoot from './withRoot';
import Dashboard from './Dashboard/dashboard';
import * as actions from './actions/index';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        textAlign: 'center',
        flexGrow: 1,
    },
    navTitle: {
        flexGrow: 1,
        textAlign: 'center',
    },
    anchorEl: {
        marginLeft: -12,
        marginRight: 20,
    },
    dashboard: {
        flexGrow: 1,
    },
    footer: {
        flexGrow: 1,
    }
});

class App extends Component {
    state = {
        anchorEl: null,
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
                            <MenuItem onClick={this.handleMenuClose} component={Link} to="/">
                                <ListItemIcon className={classes.icon}>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText classes={{primary: classes.primary}} inset primary="Overview"/>
                            </MenuItem>
                            <MenuItem onClick={this.handleMenuClose} component={Link} to="/experience">
                                <ListItemIcon className={classes.icon}>
                                    <WorkIcon/>
                                </ListItemIcon>
                                <ListItemText classes={{primary: classes.primary}} inset primary="Experience"/>
                            </MenuItem>
                            <MenuItem onClick={this.handleMenuClose} component={Link} to="/education">
                                <ListItemIcon className={classes.icon}>
                                    <AssignmentIcon/>
                                </ListItemIcon>
                                <ListItemText classes={{primary: classes.primary}} inset primary="Education"/>
                            </MenuItem>
                            <MenuItem onClick={this.handleMenuClose} component={Link} to="/projects">
                                <ListItemIcon className={classes.icon}>
                                    <CodeIcon/>
                                </ListItemIcon>
                                <ListItemText classes={{primary: classes.primary}} inset primary="Projects"/>
                            </MenuItem>
                            <MenuItem onClick={this.handleMenuClose} component={Link} to="/contact_info">
                                <ListItemIcon className={classes.icon}>
                                    <LocationOnIcon/>
                                </ListItemIcon>
                                <ListItemText classes={{primary: classes.primary}} inset primary="Contact Information"/>
                            </MenuItem>
                        </Menu>
                        <Typography variant="h6" color="inherit" className={classes.navTitle}>
                            Ishan Kaul Resume
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Dashboard className={classes.dashboard}/>
                <BottomNavigation
                    value={this.props.bottomNavValue}
                    onChange={this.handleBottomNavChange}
                    showLabels
                    className={classes.footer}
                >
                    <BottomNavigationAction component={Link} to="/" label="Overview" icon={<DashboardIcon/>}/>
                    <BottomNavigationAction component={Link} to="/experience" label="Experience"
                                            icon={<WorkIcon/>}/>
                    <BottomNavigationAction component={Link} to="/education" label="Education"
                                            icon={<AssignmentIcon/>}/>
                    <BottomNavigationAction component={Link} to="/projects" label="Projects"
                                            icon={<CodeIcon/>}/>
                    <BottomNavigationAction component={Link} to="/contact_info" label="Contact Information"
                                            icon={<LocationOnIcon/>}/>
                </BottomNavigation>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex)),
        getNavIndex: () => dispatch(actions.getNavIndex())
    };
};

const mapStateToProps = (state) => {
    return {
        bottomNavValue: state.nav.selected
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRoot(withStyles(styles)(App)));
