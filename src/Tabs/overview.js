import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import avatar from '../assets/images/avatar.gif';
import {withStyles} from '@material-ui/core/styles';
import {Avatar, Divider, Grid} from '@material-ui/core';
import withRoot from "../withRoot";

const styles = theme => ({
    paper: {
        textAlign: 'center',
        padding: theme.spacing.unit * 20,
        color: theme.palette.text.secondary,
    },
    avatar: {
        margin: 10,
        width: 200,
        height: 200,
    }
});

class Overview extends Component {
    componentDidMount() {
        this.props.setNavIndex(0);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <h3>Overview</h3>
                <Divider/>
                <Grid container spacing={24}>
                    <Grid item xs={4} className={classes.paper}>
                        <Avatar alt="Ishan Kaul Avatar" src={avatar} className={classes.avatar}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex))
    };
};

export default connect(null, mapDispatchToProps)(withRoot(withStyles(styles)(Overview)));