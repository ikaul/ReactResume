import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import classnames from 'classnames';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Collapse,
    Divider,
    Grid,
    GridList,
    GridListTile,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Typography,
    withStyles
} from "@material-ui/core";
import withRoot from "../withRoot";
import utd from '../assets/images/utd.svg';
import hpu from '../assets/images/hpu.png';
import coursera from '../assets/images/coursera.svg';
import Certificate from '../CustomComponents/certificate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    minWidth: 400,
    minHeight: 250,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto'
  },
  title: {
    fontSize: 18,
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
  }
});

const certificates = [
  {
    title: 'Ruby on Rails: An Introduction',
    date: 'June 12, 2016',
    url: 'https://www.coursera.org/account/accomplishments/verify/A8RFLEPJD7UZ'
  },
  {
    title: 'Rails with Active Record and Action Pack',
    date: 'June 22, 2016',
    url: 'https://www.coursera.org/account/accomplishments/verify/ZHUQA7FE4JZC'
  },
  {
    title: 'Ruby on Rails Web Services and Integration with MongoDB',
    date: 'July 17, 2016',
    url: 'https://www.coursera.org/account/accomplishments/verify/JKXTAGGCPMBT'
  },
  {
    title: 'HTML, CSS, and Javascript for Web Developers',
    date: 'August 30, 2016',
    url: 'https://www.coursera.org/account/accomplishments/verify/S8RX55DEW95G'
  },
  {
    title: 'Single Page Web Applications with AngularJS',
    date: 'October 25, 2016',
    url: 'https://www.coursera.org/account/accomplishments/verify/63XDUQZP2RVK'
  },
];

const courses = [
  'Advanced Operating Systems',
  'Design & Analysis of Computer Algorithms',
  'Advanced Computer Networks',
  'Database Design',
  'Artificial Intelligence',
  'Big Data Analytics & Management',
  'Machine Learning',
  'Object Oriented Analysis & Design'
];

class Education extends Component {
  state = {masters_dropdown: false, bachelors_dropdown: false};

  /* Toggle Card Drop Downs */
  handleExpandClick = (eduType) => {
    if (eduType === 'Masters') {
      this.setState(state => ({masters_dropdown: !state.masters_dropdown}));
    } else if (eduType === 'Bachelors') {
      this.setState(state => ({bachelors_dropdown: !state.bachelors_dropdown}));
    }
  };

  componentDidMount() {
    this.props.setNavIndex(2);
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>Education</Typography>
        <Divider/>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} lg={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.brand}
                image={utd}
                title="University of Texas at Dallas"
              />
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Masters of Science in Computer Science
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  University of Texas at Dallas
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  2011-2013
                </Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.masters_dropdown,
                  })}
                  onClick={() => this.handleExpandClick('Masters')}
                  aria-expanded={this.state.masters_dropdown}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon/>
                </IconButton>
              </CardActions>
              <Collapse in={this.state.masters_dropdown} timeout="auto" unmountOnExit
                        className={classes.dropdown}>
                <CardContent>
                  <GridList cellHeight={50} spacing={1} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                      <ListSubheader component="div">Relevant Coursework</ListSubheader>
                    </GridListTile>
                    {
                      courses.map((course, index) => {
                        return (
                          <GridListTile key={index}>
                            <ListItemText primary={course}/>
                          </GridListTile>
                        )
                      })
                    }
                  </GridList>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.brand}
                image={hpu}
                title="Himachal Pradesh University"
              />
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  Bachelor of Technology in Information Technology
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Himachal Pradesh University
                </Typography>
              </CardContent>
              <CardActions className={classes.actions}>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.bachelors_dropdown,
                  })}
                  onClick={() => this.handleExpandClick('Bachelors')}
                  aria-expanded={this.state.bachelors_dropdown}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon/>
                </IconButton>
              </CardActions>
              <Collapse in={this.state.bachelors_dropdown} timeout="auto" unmountOnExit
                        className={classes.dropdown}>
                <CardContent>
                  <List subheader={<ListSubheader component="div">Relevant Projects</ListSubheader>}>
                    <ListItem>
                      <ListItemText primary="Online Handwriting Recognition System"
                                    secondary="Using Java Swings & AWT for implementing the GUI. Also, Finite State Automata is implemented using XML Database which is embedded in the code for faster processing. Major Challenges in this project were to code for conversion of strokes into an object, series of which can be matched in the database against a given letter and to code for the trainer which fine tunes the results according to the user."/>
                      <ListItemText primary="Analysis & Design for Teacher Evaluation System"
                                    secondary="Web based portal for analyzing the current feedback and suggestions about the teaching faculty given by the students and providing solutions for the better and effective learning process."/>
                    </ListItem>
                  </List>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
        <br/>
        <br/>
        <Typography variant="h4" gutterBottom>Certifications</Typography>
        <Divider/>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.brand}
                         image={coursera}
                         title="Coursera Certifications"/>
              <CardContent className={classes.content}>
                <List>
                  {
                    certificates.map((cert) => {
                      return <Certificate {...cert} key={cert.url} className={classes.cert}/>
                    })
                  }
                </List>
              </CardContent>
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

export default connect(null, mapDispatchToProps)(withRoot(withStyles(styles)(Education)));