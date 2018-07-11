import {PROFILE_ERROR_SERVER, PROFILE_NOT_FOUND, PROFILE_REQUEST, PROFILE_SUCCESS} from '../../constants/Profile/Profile.constant';

const initialState = {
    infoUser: null,
    errorMsgProfile: '',
    isLoadingProfile: true
};

export default function profileState(state = initialState, action): any {
    switch (action.type) {
        case PROFILE_REQUEST:
            return {
                ...state,
                isLoadingProfile: true
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                infoUser: action.payload.data,
                isLoadingProfile: false
            };
        case PROFILE_NOT_FOUND:
            return {
                ...state,
                infoUser: null,
                errorMsgProfile: action.payload,
                isLoadingProfile: false
            };
        case PROFILE_ERROR_SERVER:
            return {
                ...state,
                errorMsgProfile: action.payload.errorMsg,
                isLoadingProfile: false
            };
        default:
            return state;
    }
}
