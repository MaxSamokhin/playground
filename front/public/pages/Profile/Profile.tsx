import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Widget from '../../components/Widget/Widget';
import InfoItem from '../../components/InfoItem/InfoItem';
import Loader from '../../components/Loader/Loader';
import Avatar from '../../components/Avatar/Avatar';
import Notification from '../../components/Notification/Notification';

import * as ProfileActions from './Profile.actions';
import './Profile.scss';
import {FIELDS_USER_INFO, SRC_ICON} from './Profile.constant';

interface IProps {
    dataUser: {
        id: number
    };
    errorMsg: string;
    infoUser: {
        city: string,
        languages: Array<string>,
        name: string,
        social: Array<{
            label: string,
            link: string
        }>
    };
    getInfoUser: (id: number) => {};
    isLoading: boolean;
}

class Profile extends React.Component<IProps, null> {
    public componentDidMount() {
        this.props.getInfoUser(this.props.dataUser.id);
    }

    public render(): JSX.Element {
        if (this.props.isLoading) {
            return (<div className={'profile'}>
                <Loader/>
            </div>);
        }

        const data = this.props.infoUser;
        const userInfo = this._getUserInfo(data);
        const widgets = this._getWidgets(data.social);
        const notificationMsg = this._getNotificationMsg();

        return (
            <div className={'profile'}>
                <Notification messages={notificationMsg}/>

                <div className={'profile__data'}>
                    <Avatar alt='аватaр'/>
                    <div className={'profile__user'}>
                        {userInfo}
                    </div>
                </div>

                <div className={'profile__social-info'}>
                    {widgets}
                </div>

            </div>
        );
    }

    private _getNotificationMsg() {
        return [{
            text: this.props.errorMsg,
            type: 'error'
        }];
    }

    private _getWidgets(data) {
        return data.map(({label, link}, index) => {
            return <Widget
                link={link}
                key={index}
                srcIcon={SRC_ICON[label] || SRC_ICON.default}
            />;
        });
    }

    private _getUserInfo(data) {
        const badKey = new Set(['social', 'userId', 'status']);
        return Object.entries(data)
            .map(([key, value], index) => {
                if (badKey.has(key)) {
                    return;
                }

                return <InfoItem
                    label={FIELDS_USER_INFO[key]}
                    value={Array.isArray(value) ?
                        value.join(' ') :
                        value.toString()}
                    key={index}
                />;
            });
    }
}

function mapStateToProps(state) {
    return {
        infoUser: state.profileState.infoUser,
        isLoading: state.profileState.isLoadingProfile,
        errorMsg: state.profileState.errorMsgProfile,
        dataUser: state.loginState.dataUser
    };
}

const mapDispatchToProps = (dispatch) => ({
    getInfoUser: (id) => dispatch(ProfileActions.getProfile(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
