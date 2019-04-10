import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from 'react-redux';
import {Divider, Typography} from "@material-ui/core";

class Experience extends Component {
    componentDidMount() {
        this.props.setNavIndex(1);
    }

    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>Experience</Typography>
                <Divider/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex))
    };
};

export default connect(null, mapDispatchToProps)(Experience);