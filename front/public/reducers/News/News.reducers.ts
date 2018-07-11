import {NEWS_NOT_FOUND, NEWS_SUCCESS, NEWS_REQUEST, NEWS_ERROR_SERVER} from '../../constants/News/News.constants';

const initialState = {
    isLoadingNews: false,
    news: null
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
        default:
            return state;
    }
}
