import {NEWS_ERROR_SERVER, NEWS_NOT_FOUND, NEWS_REQUEST, NEWS_SUCCESS} from './News.constants';
import newsState, {initialState} from './News.reducers';

describe('news reducer', () => {
    it('NEWS_REQUEST', () => {
        const action = {
            type: NEWS_REQUEST
        };
        expect(newsState(initialState, action)).toEqual({
            ...initialState,
            isLoadingNews: true
        });
    });

    it('NEWS_SUCCESS', () => {
        const stateBefore = {
            isLoadingNews: true,
            news: null,
            errorMsg: ''
        };
        const action = {
            type: NEWS_SUCCESS,
            payload: {data: [1, 2, 3]}
        };
        expect(newsState(stateBefore, action)).toEqual({
            ...stateBefore,
            isLoadingNews: false,
            news: action.payload.data
        });
    });

    it('NEWS_NOT_FOUND', () => {
        const stateBefore = {
            errorMsg: '',
            news: null,
            isLoadingNews: true
        };
        const action = {
            type: NEWS_NOT_FOUND,
            payload: 'error'
        };
        expect(newsState(stateBefore, action)).toEqual({
            ...stateBefore,
            news: [],
            isLoadingNews: false,
            errorMsg: action.payload
        });
    });

    it('NEWS_ERROR_SERVER', () => {
        const stateBefore = {
            errorMsg: '',
            news: null,
            isLoadingNews: true
        };
        const action = {
            type: NEWS_ERROR_SERVER,
            payload: {errorMsg: 'error'}
        };
        expect(newsState(stateBefore, action)).toEqual({
            ...stateBefore,
            isLoadingNews: false,
            errorMsg: action.payload.errorMsg
        });
    });
});
