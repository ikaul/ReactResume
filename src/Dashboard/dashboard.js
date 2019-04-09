import React, {Component} from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";
import Overview from '../Tabs/overview';
import Experience from '../Tabs/experience';
import Education from '../Tabs/education';
import Projects from '../Tabs/projects';
import ContactInfo from '../Tabs/contact_info';
import NotFound from '../not_found';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 5,
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '80vh'
    },

});

class Dashboard extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                        <Switch>
                            <Route exact path="/" component={Overview}/>
                            <Route exact path="/experience" component={Experience}/>
                            <Route exact path="/education" component={Education}/>
                            <Route exact path="/projects" component={Projects}/>
                            <Route exact path="/contact_info" component={ContactInfo}/>
                            <Route component={NotFound} />
                        </Switch>
                    </Paper>
                </Grid>
            </Grid>);
    }
}

export default withRoot(withStyles(styles)(Dashboard));