import * as React from 'react';
import * as RoutesMap from '../../service/RoutesMap/RoutesMap';
import {Link} from 'react-router-dom';
import './Header.scss';
import Button from '../Button/Button';
import {connect} from 'react-redux';
import * as UserAction from '../../actions/User/User.actions';

const buttons = [
    {
        text: 'To do List',
        type: 'button',
        pathTo: RoutesMap.HOME
    },
    {
        text: 'Новости',
        type: 'button',
        pathTo: RoutesMap.NEWS
    },
    {
        text: 'Профиль',
        type: 'button',
        pathTo: RoutesMap.PROFILE
    },
    {
        text: 'Войти',
        type: 'button',
        pathTo: RoutesMap.LOGIN
    }
];

interface IProps {
    data: any;
    onLogoutUser: () => {};
}

class Header extends React.Component<IProps, null> {
    private onClickHandle: any;

    constructor() {
        super();
    }

    public render(): JSX.Element {

        const buttonsBlock = buttons.map(({text, type, pathTo}, index) => {
            this.onClickHandle = () => void 0;
            if (this.props.data !== null && text === 'Войти') {
                this.onClickHandle = this.props.onLogoutUser;
                text = 'Выйти';
            }

            return <li className={'header__li'}
                       key={index}>
                <Button
                    text={text}
                    typeBtn={type}
                    pathTo={pathTo}
                    onClickButton={this.onClickHandle}
                />
            </li>;
        });

        return (
            <div className={'header'}>
                <ul className={'header__ul'}>
                    {buttonsBlock}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.userState.data
    };
}

const mapDispatchToProps = (dispatch) => ({
    onLogoutUser: () => dispatch(UserAction.logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
