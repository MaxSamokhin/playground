import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Button from './../../components/Button/Button';
import FormItem from './../../components/Form/FormItem/FormItem';
import Notification from '../../components/Notification/Notification';

import * as UserAction from './Login.actions';
import {PROFILE} from '../../constants/RoutesMap/RoutesMap';
import './Login.scss';
import {fieldsForm} from './Login.config';
import WithLoading from '../../components/WithLoading/WithLoading';
import {EMAIL, PASSWORD} from './Login.constants';

interface IProps {
    logIn: ({email, password}, any) => {};
    isLoading: boolean;
    data: {
        id: number
    };
    errorMsg: string;
}

interface IState {
    redirect: boolean;
    email: string;
    password: string;
}

class Login extends React.Component<IProps, IState> {
    constructor() {
        super();
        this.state = {
            redirect: false,
            email: '',
            password: ''
        };

        this._handleInputField = this._handleInputField.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
        this.changeStateRedirect = this.changeStateRedirect.bind(this);
    }

    public render(): JSX.Element {
        if (this.state.redirect) {
            return <Redirect to={PROFILE}/>;
        }

        const fields = this._getFields(fieldsForm);
        const notificationMsg = this._getNotificationMsg();

        return (
            <div className={'signin'}>
                <WithLoading
                    isLoading={this.props.isLoading}
                    isFlexBlock={true}>
                    <form
                        className={'form'}
                        onSubmit={this._onFormSubmit}>
                        {fields}
                        <Button formBtn={true}
                                text={'Войти'}
                                typeBtn={'submit'}
                        />
                    </form>
                    <Notification messages={notificationMsg}/>
                </WithLoading>
            </div>
        );
    }

    public changeStateRedirect() {
        this.setState({redirect: true});
    }

    private _getNotificationMsg() {
        return [{
            text: this.props.errorMsg,
            type: 'error'
        }];
    }

    private _getFields(fields) {
        return fields.map(
            ({type, label, placeholder}, index) => <FormItem
                type={type}
                label={label}
                placeholder={placeholder}
                key={index}
                onChangeInputForm={this._handleInputField}
            />);
    }

    private _handleInputField(e) {
        const fieldType = e.currentTarget.type;
        if (fieldType !== EMAIL && fieldType !== PASSWORD) {
            return;
        }
        this.setState({
            [fieldType]: e.currentTarget.value
        });
    }

    private _onFormSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;

        this.props.logIn(
            {email, password},
            this.changeStateRedirect
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.loginState.isLoadingUser,
        data: state.loginState.dataUser,
        errorMsg: state.loginState.errorMsgUser
    };
}

const mapDispatchToProps = (dispatch) => ({
    logIn: (params, cb) => dispatch(UserAction.logIn(params, cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
