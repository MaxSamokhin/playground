import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Widget from '../../components/Widget/Widget';
import InfoItem from '../../components/InfoItem/InfoItem';
import Loader from '../../components/Loader/Loader';
import Avatar from '../../components/Avatar/Avatar';
import Notification from '../../components/Notification/Notification';

import * as ProfileActions from '../../actions/Profile/Profile.actions';
import './ProfileView.scss';

import {LOGIN} from '../../service/RoutesMap/RoutesMap';
import {FIELDS_USER_INFO, SRC_ICON} from '../../constants/Profile/Profile.constant';

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
        if (this.props.dataUser === null) {
            return;
        }

        this.props.getInfoUser(this.props.dataUser.id);
    }

    public render(): JSX.Element {

        if (this.props.dataUser === null) {
            return <Redirect to={LOGIN}/>;
        }

        if (this.props.isLoading) {
            return (
                <div className={'profile'}>
                    <Loader/>
                </div>);
        }
        const data = this.props.infoUser;

        const userInfo = Object.entries(data)
            .map(([key, value], index) => {
                const badKey = new Set(['social', 'userId', 'status']);
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

        const widgets = data.social
            .map(({label, link}, index) => <Widget
                link={link}
                key={index}
                srcIcon={SRC_ICON[label] || SRC_ICON.default}
            />);

        return (
            <div className={'profile'}>
                <Notification
                    messages={[
                        {
                            text: this.props.errorMsg,
                            type: 'error'
                        }
                    ]}/>

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
}

function mapStateToProps(state) {
    return {
        infoUser: state.profileState.infoUser,
        isLoading: state.profileState.isLoadingProfile,
        errorMsg: state.profileState.errorMsgProfile,
        dataUser: state.userState.dataUser
    };
}

const mapDispatchToProps = (dispatch) => ({
    getInfoUser: (id) => dispatch(ProfileActions.getProfile(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
