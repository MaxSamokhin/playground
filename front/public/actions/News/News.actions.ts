import {NEWS_REQUEST, NEWS_SUCCESS, NEWS_NOT_FOUND, NEWS_ERROR_SERVER} from '../../constants/News/News.constants';
import Transport from '../../service/Transport/Transport';
import checkResponse from '../../service/CheckResponse/CheckResponse';

export function getNews(): any {
    return (dispatch) => {
        dispatch({
            type: NEWS_REQUEST,
            payload: {isLoading: true}
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
                        payload: res
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