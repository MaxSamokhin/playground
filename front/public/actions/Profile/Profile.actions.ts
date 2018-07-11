import {PROFILE_ERROR_SERVER, PROFILE_NOT_FOUND, PROFILE_REQUEST, PROFILE_SUCCESS} from '../../constants/Profile/Profile.constant';
import Transport from '../../service/Transport/Transport';
import checkResponse from '../../service/CheckResponse/CheckResponse';

export function getProfile(id): any {
    return (dispatch) => {
        dispatch({
            type: PROFILE_REQUEST,
            payload: {isLoadingUser: true}
        });
        Transport.get(`api/v1/user-info/${id}`)
            .then((res) => {
                if (checkResponse(res)) {
                    dispatch({
                        type: PROFILE_SUCCESS,
                        payload: {data: res}
                    });
                } else {
                    dispatch({
                        type: PROFILE_NOT_FOUND,
                        payload: res.message
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: PROFILE_ERROR_SERVER,
                    payload: {
                        errorMsg: '500 Error'
                    }
                });
            });
    };
}