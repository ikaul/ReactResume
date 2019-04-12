import React, {Component} from 'react';
import {IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

class Certificate extends Component {
    render() {
        return (
            <ListItem>
                <ListItemText primary={this.props.title} secondary={this.props.date}/>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Verify" target="_blank" href={this.props.url}>
                        <VerifiedUserIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default Certificate;