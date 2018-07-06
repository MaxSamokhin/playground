import * as React from 'react';
import * as RoutesMap from '../../service/RoutesMap/RoutesMap';
import {Link} from 'react-router-dom';
import './Header.scss';
import Button from '../Button/Button';

const buttons = [
    {
        text: 'To do List',
        type: 'button',
        pathTo: RoutesMap.HOME
    },
    {
        text: 'Войти',
        type: 'button',
        pathTo: RoutesMap.LOGIN
    },
    {
        text: 'Профиль',
        type: 'button',
        pathTo: RoutesMap.PROFILE
    },
    {
        text: 'Новости',
        type: 'button',
        pathTo: RoutesMap.NEWS
    }
];

export default class Header extends React.Component<any, null> {
    constructor() {
        super()
    }
    public render(): JSX.Element {

        const buttonsBlock = buttons.map(({text, type, pathTo}, index) => <li
            className={'header__li'}
            key={index}>

            <Button
                text={text}
                typeBtn={type}
                pathTo={pathTo}
            />

        </li>);

        return (
            <div className={'header'}>
                <ul className={'header__ul'}>
                    {buttonsBlock}
                </ul>
            </div>
        );
    }
}
