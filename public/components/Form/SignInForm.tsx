import * as React from 'react';
import Button from '../Button/Button';
import './SignInForm.scss';
import FormItem from '../FormItem/FormItem';

export default class SignInForm extends React.Component<any, void> {

    public render(): JSX.Element {

        console.log(this.props);

        return (
            <form className={'form'}>

                <FormItem type={'email'} label={'Почта'} placeholder={'почта'}/>
                <FormItem type={'password'} label={'Пароль'} placeholder={'пароль'}/>

                <Button
                    classBtn={'form__button'}
                    text={'Войти'}
                    typeBtn={'submit'}
                />

            </form>
        );
    }
}
