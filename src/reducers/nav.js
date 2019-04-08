import * as actionTypes from '../actions/actions';

const initialState = {
    selected: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_NAV_INDEX:
            return {...state.selected};
        case actionTypes.SET_NAV_INDEX:
            return {
                ...state,
                selected: action.selectedIndex
            };
        default:
            return state;
    }
}