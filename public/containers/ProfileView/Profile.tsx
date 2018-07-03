import * as React from 'react';
import Widget from '../../components/Widget/Widget';
import InfoItem from '../../components/InfoItem/InfoItem';
import './ProfileView.scss';
import Avatar from '../../components/Avatar/Avatar';

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

export default class Profile extends React.Component<void, void> {

    private fields = {
        name: 'Имя',
        city: 'Город',
        languages: 'Язык'
    };

    private srcIcon = {
        vk: './../../media/images/vk.png',
        telegram: './../../media/images/telegram.png',
        mail: './../../media/images/mail.png',
        youtube: './../../media/images/youtube.png',
        yandex: './../../media/images/ya.jpg',
        default: './../../media/images/defaultWidget.png'
    };

    public render(): JSX.Element {

        const userInfo = Object.entries(data).map(([key, value], index) => {
            if (key === 'social' || key === 'userId') {
                return;
            }

            return <InfoItem
                label={this.fields[key]}
                value={Array.isArray(value) ? value.join(' ') : value.toString()}
                key={index}
            />;
        });

        const widgets = data.social.map(({label, link}, index) => <Widget
            link={link}
            key={index}
            srcIcon={this.srcIcon[label] || this.srcIcon.default}
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
