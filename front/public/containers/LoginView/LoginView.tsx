import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './LoginView.scss';
import Button from './../../components/Button/Button';
import FormItem from './../../components/Form/FormItem/FormItem';
import * as UserAction from '../../actions/User/User.actions';
import Loader from '../../components/Loader/Loader';
import {PROFILE} from '../../service/RoutesMap/RoutesMap';
import Notification from '../../components/Notification/Notification';

const fieldsForm = [
    {
        type: 'email',
        label: 'Почта',
        placeholder: 'почта'
    },
    {
        type: 'password',
        label: 'Пароль',
        placeholder: 'пароль'
    }
];

interface IProps {
    getUser: any;
    isLoading: any;
    data: any;
}

interface IState {
    redirect: boolean;
    email: string;
    password: string;
}

class LoginView extends React.Component<IProps, IState> {
    constructor() {
        super();
        this.state = {
            redirect: false,
            email: '',
            password: ''
        };

        this.handleInputField = this.handleInputField.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    public handleInputField(e) {
        switch (e.target.type) {
            case 'email':
                this.setState({email: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
        }
    }

    public render(): JSX.Element {

        const fields = fieldsForm.map(
            ({type, label, placeholder}, index) => <FormItem
                type={type}
                label={label}
                placeholder={placeholder}
                key={index}
                onChangeInputForm={this.handleInputField}
            />);

        if (this.state.redirect || this.props.data !== null) {
            return <Redirect to={PROFILE}/>;
        }

        return (
            <div className={'signin'}>
                {
                    this.props.isLoading ?
                        <Loader/> :
                        <div className={'signin'}>
                            <Notification type={'info'} text={'test text'}/>
                            <form
                                className={'form'}
                                onSubmit={this.onFormSubmit}>
                                {fields}
                                <Button
                                    formBtn = {true}
                                    text={'Войти'}
                                    typeBtn={'submit'}
                                />
                            </form>
                        </div>
                }
            </div>
        );
    }

    private onFormSubmit(e) {
        e.preventDefault();

        this.props.getUser(
            this.state.email,
            this.state.password,
            function() {
                this.setState({redirect: true}).bind(this);
            }
        );

    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.userState.isLoading,
        data: state.userState.data
    };
}

const mapDispatchToProps = (dispatch) => ({
    getUser: (email, password, cb) => dispatch(UserAction.getUser(email, password, cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
