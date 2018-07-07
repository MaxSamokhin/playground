import * as React from 'react';
import Widget from '../../components/Widget/Widget';
import InfoItem from '../../components/InfoItem/InfoItem';
import './ProfileView.scss';
import Avatar from '../../components/Avatar/Avatar';
import {FIELDS_USER_INFO, SRC_ICON} from '../../constants/Profile/Profile.constant';
import {LOGIN} from '../../service/RoutesMap/RoutesMap';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const data = {
    userId: 1,
    name: 'Имя',
    city: 'Москва',
    languages: [
        'English',
        'Русский'
    ],
    social: [
        {
            label: 'vk',
            link: 'https://vk.com'
        },
        {
            label: 'telegram',
            link: 'https://ru.wikipedia.org/wiki/Telegram'
        },
        {
            label: 'mail',
            link: 'https://mail.ru/',
            icon: './../../media/images/mail.png'
        },
        {
            label: 'youtube',
            link: 'https://www.youtube.com'
        },
        {
            label: 'yandex',
            link: 'https://ya.ru'
        },
        {
            label: 'qqqwe',
            link: 'https://ya.ru'
        }
    ]
};

interface IProps {
    dataUser: boolean;
}

class Profile extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {

        if (this.props.dataUser === null) {
            return <Redirect to={LOGIN}/>;
        }

        const userInfo = Object.entries(data).map(([key, value], index) => {
            if (key === 'social' || key === 'userId') {
                return;
            }

            return <InfoItem
                label={FIELDS_USER_INFO[key]}
                value={Array.isArray(value) ? value.join(' ') : value.toString()}
                key={index}
            />;
        });

        const widgets = data.social.map(({label, link}, index) => <Widget
            link={link}
            key={index}
            srcIcon={SRC_ICON[label] || SRC_ICON.default}
        />);

        return (
            <div className={'profile'}>

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
        dataUser: state.userState.data
    };
}

export default connect(mapStateToProps)(Profile);
