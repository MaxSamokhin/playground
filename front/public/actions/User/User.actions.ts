import {USER_ERROR_SERVER, USER_NOT_FOUND, USER_REQUEST, USER_SUCCESS} from '../../constants/User/User.constants';
import Transport from '../../service/Transport/Transport';
import checkResponse from '../../service/CheckResponse/CheckResponse';

export function getUser(email, password, cb): any {
    return (dispatch) => {
        dispatch({
            type: USER_REQUEST,
            payload: {isLoading: true}
        });
        Transport.post(`api/v1/validate`, {email, password})
            .then((res) => {
                if (checkResponse(res)) {
                    dispatch({
                        type: USER_SUCCESS,
                        payload: res
                    });
                    cb();
                } else {
                    dispatch({
                        type: USER_NOT_FOUND,
                        payload: res
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: USER_ERROR_SERVER,
                    payload: {
                        errorMsg: '500 Error'
                    }
                });
            });
    };
}

export function logoutUser(): any {
    return (dispatch) => {
        dispatch({
            type: 'USER_LOG_OUT'
        });
    };
}
