import {NEWS_REQUEST, NEWS_SUCCESS, NEWS_NOT_FOUND, NEWS_ERROR_SERVER} from './News.constants';
import Transport from '../../service/Transport/Transport';
import checkResponse from '../../service/helpers/CheckResponse';
import {getRussianTranslation} from '../../service/Dictionary/dictionary';

export const newsRequest = () => ({
    type: NEWS_REQUEST,
    payload: {isLoadingUser: true}
});

export const newsSuccess = (data: any) => ({
    type: NEWS_SUCCESS,
    payload: data
});

export const newsNotFound = (error: string) => ({
    type: NEWS_NOT_FOUND,
    payload: error
});

export const newsErrorServer = () => ({
    type: NEWS_ERROR_SERVER,
    payload: {
        errorMsg: '500 Error'
    }
});

export function getNews(): any {
    return (dispatch) => {
        dispatch(newsRequest());
        Transport.get(`news`)
            .then((res) => {
                checkResponse(res) ?
                    dispatch(newsSuccess(res)) :
                    dispatch(newsNotFound(getRussianTranslation(res.message)));
            })
            .catch(() => {
                dispatch(newsErrorServer());
            });
    };
}
