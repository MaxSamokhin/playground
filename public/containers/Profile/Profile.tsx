import * as React from 'react';
import Widget from '../../components/Widget/Widget';
import InfoItem from '../../components/InfoItem/InfoItem';
import './Profile.scss';

export default class Profile extends React.Component<void, void> {

    public render(): JSX.Element {
        return (
            <div className={'profile'}>
                <div className={'profile__data'}>

                    <img className={'profile__avatar'} src={'./../../media/images/img.png'} alt={'аватар'}/>

                    <div className={'profile__user'}>

                        <InfoItem label={'Имя'} value={'Имя'}/>
                        <InfoItem label={'Годод'} value={'Москва'}/>
                        <InfoItem label={'Языки'} value={'Русский, Английский'}/>

                    </div>

                </div>

                <div className={'profile__social-info'}>

                    <Widget
                        path={'http://ya.ru'}
                        srcIcon={'./../../media/images/img.png'}
                    />

                    <Widget path={'ya.ru'} srcIcon={'./../../media/images/img.png'}/>
                    <Widget path={'ya.ru'} srcIcon={'./../../media/images/img.png'}/>
                    <Widget path={'ya.ru'} srcIcon={'./../../media/images/img.png'}/>
                    <Widget path={'ya.ru'} srcIcon={'./../../media/images/img.png'}/>
                    <Widget path={'ya.ru'} srcIcon={'./../../media/images/img.png'}/>
                    <Widget path={'ya.ru'} srcIcon={'./../../media/images/img.png'}/>

                </div>

            </div>
        );
    }
}
