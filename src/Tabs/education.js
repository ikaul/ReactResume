import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";

class Education extends Component {
    componentDidMount() {
        this.props.setNavIndex(2);
    }

    render() {
        return (
            <h3>Education</h3>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex))
    };
};

export default connect(null, mapDispatchToProps)(Education);