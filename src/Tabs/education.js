import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {Divider, Typography} from "@material-ui/core";

class Education extends Component {
    componentDidMount() {
        this.props.setNavIndex(2);
    }

    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>Education</Typography>
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

export default connect(null, mapDispatchToProps)(Education);