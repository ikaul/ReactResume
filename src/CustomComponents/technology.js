import React, {Component} from 'react';
import {
    Avatar,
    Chip,
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/es/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import withRoot from "../withRoot";
import {blue, grey, red, blueGrey} from "@material-ui/core/colors";
import postgres from '../assets/images/psql.svg';
import rails from '../assets/images/rails.png';

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
    },
    reactAvatar: {
        color: blue[200],
        backgroundColor: grey[900]
    },
    angularAvatar: {
        color: grey[50],
        backgroundColor: red[900]
    },
    pythonAvatar: {
        color: blue[500],
        backgroundColor: blueGrey[200]
    },
    railsAvatar: {
        color: grey[50],
        backgroundColor: red[900]
    },
    postgresAvatar: {
        backgroundColor: blueGrey[50]
    },
    defaultAvatar: {
        color: blueGrey[50],
        backgroundColor: blueGrey[900]
    }
});

class Technology extends Component {
    technologyIcon = (technologyName, classes) => {
        switch (technologyName.toLowerCase()) {
            case 'react':
                return (<Avatar className={classes.reactAvatar}>
                    <FontAwesomeIcon icon={['fab', 'react']}/>
                </Avatar>);
            case 'python':
                return (<Avatar className={classes.pythonAvatar}>
                    <FontAwesomeIcon icon={['fab', 'python']}/>
                </Avatar>);
            case 'angular':
                return (<Avatar className={classes.angularAvatar}>
                    <FontAwesomeIcon icon={['fab', 'angular']}/>
                </Avatar>);
            case 'postgresql':
                return (<Avatar className={classes.postgresAvatar} src={postgres} />);
            case 'ruby on rails':
                return (<Avatar className={classes.railsAvatar} src={rails} />);
            default:
                return (<Avatar className={classes.defaultAvatar}>{technologyName.toUpperCase()[0]}</Avatar>);
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <Chip className={classes.chip} label={this.props.label} variant="outlined"
                  avatar={this.technologyIcon(this.props.label, classes)}/>
        )
    }
}

export default withRoot(withStyles(styles)(Technology));