import React, {Component} from 'react';
import {
    Avatar,
    Chip,
} from "@material-ui/core";
import {withStyles} from "@material-ui/core/es/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import withRoot from "../withRoot";
import {blue, grey, red} from "@material-ui/core/colors";

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
        backgroundColor: grey[200]
    },
    railsAvatar: {
        color: grey[50],
        backgroundColor: red[900]
    },
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
            default:
                return (<Avatar className={""}>{technologyName.toUpperCase()[0]}</Avatar>);
        }
    };

    render() {
        const {classes} = this.props;
        return (
                <Chip className={classes.chip} label={this.props.label} variant="outlined"
                      avatar={this.technologyIcon(this.props.label, classes) }/>
        )
    }
}

export default withRoot(withStyles(styles)(Technology));