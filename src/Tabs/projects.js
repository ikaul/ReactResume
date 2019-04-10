import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {Divider, Typography} from "@material-ui/core";

class Projects extends Component {
    componentDidMount() {
        this.props.setNavIndex(3);
    }

    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>Projects</Typography>
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

export default connect(null, mapDispatchToProps)(Projects);