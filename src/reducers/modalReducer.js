import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modalActions';

const initialState = {
    modalOpen: false
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'OPEN_MODAL':
            return{
                ...state,
                modalOpen: true
            };
        case 'CLOSE_MODAL':
            return{
                ...state,
                modalOpen: false
            }
        default:
            return state;
    }
}