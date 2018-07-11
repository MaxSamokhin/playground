import {USER_LOG_OUT, USER_NOT_FOUND, USER_REQUEST, USER_SUCCESS, USER_ERROR_SERVER} from '../../constants/User/User.constants';

const initialState = {
    isLoadingUser: false,
    data: null,
    errorMsg: ''
};

export default function userState(state = initialState, action): any {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                isLoadingUser: action.payload.isLoading
            };
        case USER_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoadingUser: false
            };
        case USER_NOT_FOUND:
            return {
                ...state,
                isLoadingUser: false,
                errorMsg: action.payload.message
            };
        case USER_ERROR_SERVER:
            return {
                ...state,
                isLoadingUser: false,
                errorMsg: action.payload.errorMsg
            };
        case USER_LOG_OUT:
            return {
                ...state,
                isLoadingUser: false,
                data: null,
                errorMsg: ''
            };

        default:
            return state;
    }
}
