import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import avatar from '../assets/images/avatar.gif';
import {Avatar, Divider, Grid, Typography, withStyles} from '@material-ui/core';
import {SocialIcon} from 'react-social-icons';
import withRoot from "../withRoot";

const styles = theme => ({
  avatar: {
    margin: 10,
    width: '20vh',
    height: '20vh',
    clear: 'right',
    flexGrow: 1,
  },
  socialIcon: {
    margin: 5,
  }
});

class Overview extends Component {
  componentDidMount() {
    this.props.setNavIndex(0);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className="overview">
        <Typography variant="h4" gutterBottom>Overview</Typography>
        <Divider/>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Avatar alt="Ishan Kaul Avatar" src={avatar} className={classes.avatar}/>
            <SocialIcon className={classes.socialIcon} url='https://linkedin.com/in/kaulishan' target="_blank"
                        style={{width: '5vh', height: '5vh'}}/>
            <SocialIcon className={classes.socialIcon} url='https://github.com/ikaul' target="_blank"
                        style={{width: '5vh', height: '5vh'}}/>
            <SocialIcon className={classes.socialIcon} url='https://www.facebook.com/kaulishan' target="_blank"
                        style={{width: '5vh', height: '5vh'}}/>
            <SocialIcon className={classes.socialIcon}
                        url='mailto:kaulishan2007@gmail.com?Subject=[Resume App] Follow Up Email'
                        style={{width: '5vh', height: '5vh'}}/>
          </Grid>
          <br/>
          <Grid item xs={12}>
            <Typography component="p">
              I work as a Staff Software Engineer in Ivanti.
              I lead the development and management of multiple micro-services related to
              our <a href="https://www.pulsesecure.net/products/pulse-zero-trust-access/" target="_blank"
                     rel="noreferrer">Zero Trust Access
              (ZTA)</a> solution.
              I love working on new features and having architecture discussions with other team members and architects.
            </Typography>
            <Typography component="p">
              Over the period of years, I have gained technological insight into networking and web based
              application development.
              Have taken Ruby on Rails web based tools to completion ranging from simple SPA to complex
              web portals based on business requirements.
              Have a fair amount of experience with Flask, Angular & Python as well.
            </Typography>
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