import {POST_VALUE, DESTROY_VALUES} from '../actions/types';


export default(state = {}, action) => {
    switch (action.type) {
        case POST_VALUE:
            return {
                ...state,
                [action.payload.page]: action.payload.value
            };
        case DESTROY_VALUES:
            return {};
        default:
            return state;
    }
};
