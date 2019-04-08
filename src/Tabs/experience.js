import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from 'react-redux';

class Experience extends Component {
    componentDidMount() {
        this.props.setNavIndex(1);
    }

    render() {
        return (
            <h3>Experience</h3>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex))
    };
};

export default connect(null, mapDispatchToProps)(Experience);