import * as React from 'react';
import * as RoutesMap from '../../service/RoutesMap/RoutesMap';
import {Link} from 'react-router-dom';

export default class Header extends React.Component<any, void> {
    public render(): JSX.Element {

        console.log(this.props);

        return (
            <div className='header'>
                <ul className='header__ul'>
                    <li className='header__li'><Link to={RoutesMap.HOME}>Главная</Link></li>
                    <li className='header__li'><Link to={RoutesMap.LOGIN}>Войти</Link></li>
                    <li className='header__li'><Link to={RoutesMap.PROFILE}>Профиль</Link></li>
                    <li className='header__li'><Link to={RoutesMap.NEWS}>Новости</Link></li>
                    <li className='header__li'><Link to={RoutesMap.LIST}>To do list</Link></li>
                </ul>
            </div>
        );
    }
}
