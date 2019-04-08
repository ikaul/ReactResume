import * as actionTypes from './actions';

export const setNavIndex = (selectedIndex) => {
    return {
        type: actionTypes.SET_NAV_INDEX,
        selectedIndex: selectedIndex
    };
};

export const getNavIndex = () => {
    return {
        type: actionTypes.GET_NAV_INDEX,
    };
};

