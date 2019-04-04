import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 20,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Dashboard extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Experience</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Education</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Projects</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>Contact Information</Paper>
                </Grid>
            </Grid>);
    }
};

export default withRoot(withStyles(styles)(Dashboard));