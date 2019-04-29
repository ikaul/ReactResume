import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {
    Button,
    Card,
    CardActionArea, CardActions,
    CardContent,
    Divider,
    Grid,
    Tooltip,
    Typography
} from "@material-ui/core";
import withRoot from "../withRoot";
import {withStyles} from '@material-ui/core/styles';
import Technology from "../CustomComponents/technology";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        maxWidth: 600,
        minHeight: 300,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto'
    },
    title: {
        fontSize: 18,
    },
    content: {
        flexBasis: '70%',
    },
    grid: {
        paddingTop: 30
    },
    socialIcon: {
        margin: 5,
        alignItems: 'left'
    }
});

class Projects extends Component {
    componentDidMount() {
        this.props.setNavIndex(3);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography variant="h4" gutterBottom>Projects</Typography>
                <Divider/>
                <Grid container spacing={24} className={classes.grid}>
                    <Grid item xs={12} lg={4}>
                        <Tooltip title="Click to open Source Code in new tab.">
                            <Card className={classes.card}>
                                <CardActionArea href="https://github.com/ikaul/ReactResume" target="_blank">
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            React Resume App
                                        </Typography>
                                        <Typography className={classes.content}>
                                            My Resume as a Single Page Application (SPA) made using React & Material UI.
                                            Hosted on Google Cloud Platform.
                                        </Typography>
                                        <br/>
                                        <Typography variant='subtitle2' color='textSecondary' gutterBottom>
                                            Technologies Used
                                        </Typography>
                                        <Technology label='React'/>
                                        <Technology label='Material UI'/>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Bill of Materials Generator
                                </Typography>
                                <Typography className={classes.content}>
                                    Tool to help sales team generate bill of materials for customer orders
                                    with ease and import them into SalesForce to convert to opportunity.
                                    Sales engineer enters customer environment specific information
                                    and the sizing part of the tool, recommends the type and quantity of devices
                                    needed
                                    and displays the bill of material for the same.
                                    The SE could then choose to export the bill of materials in either
                                    CSV or PDF format or directly import it into Sales Force as an opportunity.
                                </Typography>
                                <br/>
                                <Typography variant='subtitle2' color='textSecondary' gutterBottom>
                                    Technologies Used
                                </Typography>
                                <Technology label="React"/>
                                <Technology label='Ruby on Rails'/>
                                <Technology label='SalesForce'/>
                                <Technology label='MySQL'/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Pulse Analytics Portal
                                </Typography>
                                <Typography className={classes.content}>
                                    Web portal created to display and maintain telemetry data about devices calling
                                    home.
                                    Customer & device information is pulled from NetSuite using NetSuite ODBC drivers.
                                    Customer specific & across customers dashboards created using D3JS to analyze
                                    customer usage trends.
                                </Typography>
                                <br/>
                                <Typography variant='subtitle2' color='textSecondary' gutterBottom>
                                    Technologies Used
                                </Typography>
                                <Technology label='Ruby on Rails'/>
                                <Technology label='NetSuite'/>
                                <Technology label='PostgreSQL'/>
                                <Technology label="D3JS"/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Evaluation License Generator
                                </Typography>
                                <Typography className={classes.content}>
                                    Sales Engineers use this tool to generate and send licenses to customers for their
                                    new devices.
                                    They enter customer and device details and the backend generates the evaluation
                                    license.
                                    AD/LDAP group membership checks added while authenticating to ensure
                                    only authorized users are generating licenses.
                                    Visualizations also created using Chartkick to see types of licenses generated.
                                    Mobile first design to ensure licenses can be generated on the move.
                                </Typography>
                                <br/>
                                <Typography variant='subtitle2' color='textSecondary' gutterBottom>
                                    Technologies Used
                                </Typography>
                                <Technology label='Ruby on Rails'/>
                                <Technology label='Devise'/>
                                <Technology label="Chartkick"/>
                                <Technology label='MySQL'/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Pulse Secure's Guest Sign-in Portal [Welcome Portal]
                                </Typography>
                                <Typography className={classes.content}>
                                    Created a web application to sign in guest's at the lobby.
                                    On the iPad hosting the web application, the guest selects the host they are here to
                                    visit
                                    and enter their details and sign's the NDA if needed.
                                    An email is sent to the host to let them know they have a guest waiting at the
                                    lobby.
                                    A DYMO label is printed with their name and other details.
                                </Typography>
                                <br/>
                                <Typography variant='subtitle2' color='textSecondary' gutterBottom>
                                    Technologies Used
                                </Typography>
                                <Technology label='Ruby on Rails'/>
                                <Technology label='PostgreSQL'/>
                                <Technology label='DYMO Label Generator APIs'/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Pulse Secure's Hackathon Portal
                                </Typography>
                                <Typography className={classes.content}>
                                    Created a portal for hosting Hackathon's at Pulse Secure.
                                    Participants can formulate teams, work on their projects,
                                    update their progress by writing small snippets (blog posts) of progress made and
                                    updating the progress bar.
                                    Judges can view the projects and give a rating to each project 0-5.
                                    Top 5 projects are displayed in a dashboard.
                                </Typography>
                                <br/>
                                <Typography variant='subtitle2' color='textSecondary' gutterBottom>
                                    Technologies Used
                                </Typography>
                                <Technology label='Ruby on Rails'/>
                                <Technology label='jQuery'/>
                                <Technology label='PostgreSQL'/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Fun Games in Python
                                </Typography>
                                <Typography className={classes.content}>
                                    As part of coursework, created simple GUI based games in Python.
                                </Typography>
                                <br/>
                                <Typography variant='subtitle2' color='textSecondary' gutterBottom>
                                    Technologies Used
                                </Typography>
                                <Technology label='Python'/>
                                <Technology label='Coursera'/>
                            </CardContent>
                            <CardActions>
                                <Button target="_blank" color="primary" variant="contained" className={classes.button}
                                        href="http://www.codeskulptor.org/#user5-2KuSwnaExR8digD-0.py">
                                    Stop Watch Game
                                </Button>
                                <Button target="_blank" color="secondary" variant="contained" className={classes.button}
                                        href="http://www.codeskulptor.org/#user5-Hnf19cl6FwaIhKg-1.py">
                                    Ping Pong Game
                                </Button>
                                <Button target="_blank" variant="contained" className={classes.button}
                                        href="http://www.codeskulptor.org/#user6-cVcDLo22NexURv9-1.py">
                                    Memory Game
                                </Button>
                            </CardActions>
                        </Card>
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

export default connect(null, mapDispatchToProps)(withRoot(withStyles(styles)(Projects)));