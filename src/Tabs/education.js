import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {Divider} from "@material-ui/core";

class Education extends Component {
    componentDidMount() {
        this.props.setNavIndex(2);
    }

    render() {
        return (
            <div>
                <h3>Education</h3>
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