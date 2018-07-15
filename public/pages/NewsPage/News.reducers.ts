import {NEWS_NOT_FOUND, NEWS_SUCCESS, NEWS_REQUEST, NEWS_ERROR_SERVER} from './News.constants';

export const initialState = {
    isLoadingNews: false,
    news: null,
    errorMsg: ''
};

export default function newsState(state = initialState, action): any {
    switch (action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                isLoadingNews: true,
                errorMsg: ''
            };
        case NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload.data,
                isLoadingNews: false,
                errorMsg: ''
            };
        case NEWS_NOT_FOUND:
            return {
                ...state,
                news: [],
                isLoadingNews: false,
                errorMsg: action.payload
            };
        case NEWS_ERROR_SERVER:
            return {
                ...state,
                isLoadingNews: false,
                errorMsg: action.payload.errorMsg
            };
        default:
            return state;
    }
}
