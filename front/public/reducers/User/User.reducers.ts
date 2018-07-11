import {USER_LOG_OUT, USER_NOT_FOUND, USER_REQUEST, USER_SUCCESS, USER_ERROR_SERVER} from '../../constants/User/User.constants';

const initialState = {
    isLoadingUser: false,
    dataUser: null,
    errorMsgUser: ''
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
                dataUser: action.payload.data,
                isLoadingUser: false
            };
        case USER_NOT_FOUND:
            return {
                ...state,
                isLoadingUser: false,
                errorMsgUser: action.payload.message
            };
        case USER_ERROR_SERVER:
            return {
                ...state,
                isLoadingUser: false,
                errorMsgUser: action.payload.errorMsg
            };
        case USER_LOG_OUT:
            return {
                ...state,
                isLoadingUser: false,
                dataUser: null,
                errorMsgUser: ''
            };

        default:
            return state;
    }
}
