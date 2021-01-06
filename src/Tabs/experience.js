import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles
} from "@material-ui/core";
import pulse from "../assets/images/pulse.jpg";
import juniper from "../assets/images/juniper.png";
import withRoot from "../withRoot";
import classnames from "classnames";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Technology from '../CustomComponents/technology';

const styles = theme => ({
  card: {
    minWidth: 400,
    minHeight: 250,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'auto'
  },
  title: {
    fontSize: 24,
  },
  brand: {
    flexBasis: '30%',
    backgroundSize: 'contain',
  },
  content: {
    flexBasis: '70%',
  },
  dropdown: {
    flexBasis: '100%',
  },
  grid: {
    paddingTop: 30
  },
  cert: {
    borderBlockEnd: 1
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actions: {
    display: 'flex',
    paddingTop: 100,
  },
  gridList: {
    height: '20'
  },
  subheader: {
    paddingTop: 20
  },
  projects: {
    paddingTop: 0
  }
});

class Experience extends Component {
  state = {pulse: false, juniper: false};

  /* Toggle Card Drop Downs */
  handleExpandClick = (jobName) => {
    if (jobName === 'JuniperNetworks') {
      this.setState(state => ({juniper: !state.juniper}));
    } else if (jobName === 'PulseSecure') {
      this.setState(state => ({pulse: !state.pulse}));
    }
  };

  componentDidMount() {
    this.props.setNavIndex(1);
    this.handleExpandClick('PulseSecure');
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>Experience</Typography>
        <Divider/>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.brand}
                image={pulse}
                title="Pulse Secure LLC."
              />
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Staff Software Engineer
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Oct 2014 - Present
                </Typography>
              </CardContent>

              <CardActions className={classes.actions}>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.pulse,
                  })}
                  onClick={() => this.handleExpandClick('PulseSecure')}
                  aria-expanded={this.state.pulse}
                  aria-label="Show More"
                >
                  <ExpandMoreIcon/>
                </IconButton>
              </CardActions>
              <Collapse in={this.state.pulse} timeout="auto" unmountOnExit
                        className={classes.dropdown}>
                <CardContent>
                  <Typography className={classes.subheader} variant='subtitle2' color='textSecondary'
                              gutterBottom>
                    Relevant Technologies
                  </Typography>
                  <Technology label='Python'/>
                  <Technology label='React'/>
                  <Technology label='Ruby on Rails'/>
                  <Technology label='Flask'/>
                  <Typography className={classes.subheader} variant='subtitle2' color='textSecondary'
                              gutterBottom>
                    Overview
                  </Typography>
                  <Typography variant='body2' gutterBottom>
                    <p>
                      Working as part of PZT team on proving a solution for zero trust secure access.
                      Leading development for one of the main components of the UI related to configuring the PZT
                      products.
                      Leading development for one of the core micro-services for configuration management of the new PZT
                      products.
                    </p>
                    <p>
                      Earlier worked as part of Solution's team to integrate different products
                      and enhance customer usage, developer productivity and sales.
                      Create tools to analyze various product metrics, customer environments, etc to
                      help Sales and Marketing teams
                      make more informed decisions.
                    </p>
                  </Typography>

                  <Typography className={classes.subheader} variant='subtitle2' color='textSecondary'>
                    Internal Tools / Projects
                  </Typography>
                  <List disablePadding>
                    <ListItem>
                      <Grid container spacing={1}>
                        <Grid item xs={12} lg={12}>
                          <ListItemText
                            primary="Pulse Zero Trust Access (ZTA)"
                            secondary="The Pulse Zero Trust Access (PZTA) service enables diverse users from any location to easily, directly and securely access public, private, and multi-cloud applications as well as data center resources.
                            My work focused mostly around helping configure the appliances using React in UI and Python Flask micro-services in backend."/>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={4}>
                          <ListItemText primary=" Pulse Analytics Portal"
                                        secondary="Web Portal to import & analyze telemetry data along with NetSuite Customer data
                                                          to see how the customer uses our equipment and how our products are doing in the market."/>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <ListItemText primary="Bill of Materials Generator"
                                        secondary="Tool to help sales team generate bill of materials for customer orders with ease
                                                          and import them into SalesForce to convert to opportunity."/>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <ListItemText primary="Secure Access as a Service"
                                        secondary="POC for orchestration of Pulse VPN over AWS as a service. "/>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <ListItemText primary="Hackathon Portal"
                                        secondary="Web Portal to host internal hackathon events. Participants can create projects
                                                          and follow other projects and judges can review & rate projects. "/>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <ListItemText primary="Welcome Sign-in Portal"
                                        secondary="Web Portal where guests can sign-in and emails are sent to the host to receive their guests.
                                                          Also, prints a name tag for the guests with guest & host details."/>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                          <ListItemText primary="Suite Capacity Estimator"
                                        secondary="Used by Sales Engineers to estimate the equipment the customer needs."/>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.brand}
                image={juniper}
                title="Juniper Networks Inc."
              />
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Software Engineer II
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Aug 2013 - Oct 2014
                </Typography>
              </CardContent>

              <CardActions className={classes.actions}>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.juniper,
                  })}
                  onClick={() => this.handleExpandClick('JuniperNetworks')}
                  aria-expanded={this.state.juniper}
                  aria-label="Show More"
                >
                  <ExpandMoreIcon/>
                </IconButton>
              </CardActions>
              <Collapse in={this.state.juniper} timeout="auto" unmountOnExit
                        className={classes.dropdown}>
                <CardContent>
                  <Typography variant='subtitle2' color='textSecondary' gutterBottom>Relevant
                    Technologies</Typography>
                  <Technology label='Python'/>
                  <Technology label='Perl'/>
                  <Technology label='Ruby on Rails'/>

                  <Typography className={classes.subheader} variant='subtitle2' color='textSecondary'
                              gutterBottom>Relevant Experience</Typography>
                  <List disablePadding>
                    <ListItem>
                      <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                          <ListItemText primary="Pulse Automation Team"
                                        secondary="Developing framework to enable automation of test suites in Perl, AutoIT, vSphere, Jenkins.
                                                                     Writing perl scripts to automate various test suites in Pulse."/>

                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <ListItemText primary="Web Development / Internal Tools"
                                        secondary="Developed a new portal for collect, analyze and display job results and various statistics
                                                          for daily and historical data using Ruby on Rails, Highcharts.
                                                          Enhancements to PBU Dashboard Components."/>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </CardContent>
              </Collapse>
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

export default connect(null, mapDispatchToProps)(withRoot(withStyles(styles)(Experience)));