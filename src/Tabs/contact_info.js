import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions";
import {Divider} from "@material-ui/core";

class ContactInfo extends Component {
    componentDidMount() {
        this.props.setNavIndex(4);
    }

    render() {
        return (
            <div>
                <h3>Contact Information</h3>
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

export default connect(null, mapDispatchToProps)(ContactInfo);