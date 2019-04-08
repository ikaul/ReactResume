import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

class Overview extends Component {
    componentDidMount() {
        this.props.setNavIndex(0);
    }

    render() {
        return (
            <h3>Overview</h3>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex))
    };
};

export default connect(null, mapDispatchToProps)(Overview);