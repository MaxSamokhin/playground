import * as React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import Button from '../Button/Button';
import {connect} from 'react-redux';
import * as UserAction from '../../containers/Login/Login.actions';
import {buttons} from './Header.config';

interface IProps {
    data: any;
    onLogoutUser: () => {};
}

class Header extends React.Component<IProps, null> {
    private _onClickHandle: any;

    constructor() {
        super();
    }

    public render(): JSX.Element {

        const buttonsBlock = this._getButtons(buttons);

        return (
            <div className={'header'}>
                <ul className={'header__ul'}>
                    {buttonsBlock}
                </ul>
            </div>
        );
    }

    private _getButtons(btns) {
        return btns.map(({text, type, pathTo}, index) => {
            this._onClickHandle = () => void 0;
            if (this.props.data !== null && text === 'Войти') {
                this._onClickHandle = this.props.onLogoutUser;
                text = 'Выйти';
            }

            return <li className={'header__li'}
                       key={index}>
                <Button
                    text={text}
                    typeBtn={type}
                    pathTo={pathTo}
                    onClickButton={this._onClickHandle}
                />
            </li>;
        });
    }
}

function mapStateToProps(state) {
    return {
        data: state.loginState.dataUser
    };
}

const mapDispatchToProps = (dispatch) => ({
    onLogoutUser: () => dispatch(UserAction.logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
