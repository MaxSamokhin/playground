import {NEWS_NOT_FOUND, NEWS_SUCCESS, NEWS_REQUEST, NEWS_ERROR_SERVER} from '../../constants/News/News.constants';

const initialState = {
    isLoadingNews: false,
    news: null,
    errorMsg: ''
};

export default function newsState(state = initialState, action): any {
    switch (action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                isLoadingNews: true
            };
        case NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload.data,
                isLoadingNews: false
            };
        case NEWS_NOT_FOUND:
            return {
                ...state,
                news: [],
                isLoadingNews: false
            };
        case NEWS_ERROR_SERVER:
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
                isLoadingNews: false
            };
        default:
            return state;
    }
}
