import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";

class ContactInfo extends Component {
    componentDidMount() {
        this.props.setNavIndex(4);
    }

    render() {
        return (
            <h3>Contact Information</h3>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavIndex: (selectedIndex) => dispatch(actions.setNavIndex(selectedIndex))
    };
};

export default connect(null, mapDispatchToProps)(ContactInfo);