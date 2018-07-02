import * as React from 'react';
import * as RoutesMap from '../../service/RoutesMap/RoutesMap';
import {Link} from 'react-router-dom';
import './Header.scss';
import Button from '../Button/Button';

export default class Header extends React.Component<any, void> {
    public render(): JSX.Element {
        return (
            <div className={'header'}>
                <ul className={'header__ul'}>
                    <li className={'header__li'}>
                        <Button
                            text={'To do List'}
                            typeBtn={'button'}
                            pathTo={RoutesMap.HOME}
                        />
                    </li>
                    <li className={'header__li'}>
                        <Button
                            text={'Войти'}
                            typeBtn={'button'}
                            pathTo={RoutesMap.LOGIN}
                        />
                    </li>
                    <li className={'header__li'}>
                        <Button
                            text={'Профиль'}
                            typeBtn={'button'}
                            pathTo={RoutesMap.PROFILE}
                        />
                    </li>
                    <li className={'header__li'}>
                        <Button
                            text={'Новости'}
                            typeBtn={'button'}
                            pathTo={RoutesMap.NEWS}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}
