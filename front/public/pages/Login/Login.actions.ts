import {USER_ERROR_SERVER, USER_NOT_FOUND, USER_REQUEST, USER_SUCCESS} from './Login.constants';
import Transport from '../../service/Transport/Transport';
import checkResponse from '../../service/helpers/CheckResponse';
import {getRussianTranslation} from '../../service/Dictionary/dictionary';

export const userRequest = () => ({
    type: USER_REQUEST,
    payload: {isLoading: true}
});

export const userSuccess = (data: any) => ({
    type: USER_SUCCESS,
    payload: data
});

export const userNotFound = (message: string) => ({
    type: USER_NOT_FOUND,
    payload: message
});

export const userServerError = () => ({
    type: USER_ERROR_SERVER,
    payload: {
        errorMsg: '500 Error'
    }
});

export const userLogOut = () => ({
    type: 'USER_LOG_OUT'
});

export function logIn({email, password}, cb): any {
    return (dispatch) => {
        dispatch(userRequest());
        Transport.post(`api/v1/validate`, {email, password})
            .then((res) => {
                if (checkResponse(res)) {
                    dispatch(userSuccess(res));
                    cb();
                } else {
                    dispatch(userNotFound(getRussianTranslation(res.message)));
                }
            })
            .catch(() => {
                dispatch(userServerError());
            });
    };
}

export function logoutUser(): any {
    return (dispatch) => {
        dispatch(userLogOut());
    };
}
