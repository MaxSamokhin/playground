import {NEWS_REQUEST, NEWS_SUCCESS, NEWS_NOT_FOUND, NEWS_ERROR_SERVER} from './News.constants';
import Transport from '../../service/Transport/Transport';
import checkResponse from '../../service/CheckResponse/CheckResponse';
import {getRussianTranslation} from '../../service/Dictionary/dictionary';

export function getNews(): any {
    return (dispatch) => {
        dispatch({
            type: NEWS_REQUEST,
            payload: {isLoadingUser: true}
        });
        Transport.get(`api/v1/news`)
            .then((res) => {
                if (checkResponse(res)) {
                    dispatch({
                        type: NEWS_SUCCESS,
                        payload: res
                    });
                } else {
                    dispatch({
                        type: NEWS_NOT_FOUND,
                        payload: getRussianTranslation(res.message)
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: NEWS_ERROR_SERVER,
                    payload: {
                        errorMsg: '500 Error'
                    }
                });
            });
    };
}