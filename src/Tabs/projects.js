import React, {Component} from 'react';
import * as actions from "../actions";
import {connect} from "react-redux";
import {Divider} from "@material-ui/core";

class Projects extends Component {
    componentDidMount() {
        this.props.setNavIndex(3);
    }

    render() {
        return (
            <div>
                <h3>Projects</h3>
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