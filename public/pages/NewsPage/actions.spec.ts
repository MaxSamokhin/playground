import {newsErrorServer, newsRequest, newsSuccess} from './News.actions';
import {NEWS_ERROR_SERVER, NEWS_REQUEST, NEWS_SUCCESS} from './News.constants';

describe('News actions', () => {
    it('newsRequest()', () => {
        const expectedAction = {
            type: NEWS_REQUEST,
            payload: {isLoadingUser: true}
        };
        expect(newsRequest()).toEqual(expectedAction);
    });

    it('newsSuccess', () => {
        const expectedAction = {
            type: NEWS_SUCCESS,
            payload: [1, 2, 3]
        };
        expect(newsSuccess(expectedAction.payload)).toEqual(expectedAction);
    });

    it('newsErrorServer', () => {
        const expectedAction = {
            type: NEWS_ERROR_SERVER,
            payload: {
                errorMsg: '500 Error'
            }
        };
        expect(newsErrorServer()).toEqual(expectedAction);
    });
});
