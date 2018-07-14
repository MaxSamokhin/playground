import {PROFILE_ERROR_SERVER, PROFILE_NOT_FOUND, PROFILE_REQUEST, PROFILE_SUCCESS} from './Profile.constant';
import Transport from '../../service/Transport/Transport';
import checkResponse from '../../service/helpers/CheckResponse';
import {getRussianTranslation} from '../../service/Dictionary/dictionary';
import {moveIconToTop} from '../../service/helpers/MoveIconToTop';

export const profileRequest = () => ({
    type: PROFILE_REQUEST,
    payload: {isLoadingUser: true}
});

export const profileSuccess = (data: any) => ({
    type: PROFILE_SUCCESS,
    payload: {data}
});

export const profileNotFound = (message: string) => ({
    type: PROFILE_NOT_FOUND,
    payload: getRussianTranslation(message)
});

export const profileErrorServer = () => ({
    type: PROFILE_ERROR_SERVER,
    payload: {
        errorMsg: '500 Error'
    }
});

export function getProfile(id): any {
    return (dispatch) => {
        dispatch(profileRequest());
        Transport.get(`api/v1/user-info/${id}`)
            .then((res) => {
                if (checkResponse(res)) {
                    moveIconToTop(res.social, 'mail');
                    dispatch(profileSuccess(res));
                } else {
                    dispatch(profileNotFound(res.message));
                }
            })
            .catch(() => dispatch(profileErrorServer()));
    };
}
