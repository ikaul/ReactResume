import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";
import {Button, Card, CardActions, CardContent, Divider, Grid, Typography, withStyles} from "@material-ui/core";
import withRoot from "../withRoot";

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  grid: {
    paddingTop: 30
  },
  actionButton: {
    margin: theme.spacing(1),
  }
});

class ContactInfo extends Component {
  componentDidMount() {
    this.props.setNavIndex(4);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>Contact Information</Typography>
        <Divider/>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Phone Number
                </Typography>
                <Typography component="p">
                  +1-773-569-5684
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" className={classes.actionButton}
                        href="tel:1-773-569-5684">Call</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Email Address
                </Typography>
                <Typography component="p">
                  kaulishan2007@gmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" className={classes.actionButton}
                        href="mailto:kaulishan2007@gmail.com?Subject=[Resume App] Follow Up Email">Email</Button>
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

export default connect(null, mapDispatchToProps)(withRoot(withStyles(styles)(ContactInfo)));