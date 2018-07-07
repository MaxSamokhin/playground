import {USER_LOG_OUT, USER_NOT_FOUND, USER_REQUEST, USER_SUCCESS} from '../../constants/User/User.constants';

const initialState = {
    isLoading: false,
    data: null
};

export default function userState(state = initialState, action): any {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case USER_NOT_FOUND:
            return {
                ...state,
                isLoading: false
            };
        case USER_LOG_OUT:
            return {
                ...state,
                data: null
            };

        default:
            return state;
    }
}
