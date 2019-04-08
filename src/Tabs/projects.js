import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

class Projects extends Component {
    componentDidMount() {
        this.props.setNavIndex(3);
    }

    render() {
        return (
            <h3>Projects</h3>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex))
    };
};

export default connect(null, mapDispatchToProps)(Projects);