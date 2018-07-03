import * as React from 'react';
import Button from '../Button/Button';
import './SignInForm.scss';
import FormItem from './FormItem/FormItem';

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

export default class SignInForm extends React.Component<any, void> {

    public render(): JSX.Element {

        const fields = fieldsForm.map(({type, label, placeholder}, index) => <FormItem
            type={type}
            label={label}
            placeholder={placeholder}
            key={index}
        />);

        return (
            <form className={'form'}>
                {fields}
                <Button
                    classBtn={'form__button'}
                    text={'Войти'}
                    typeBtn={'submit'}
                />

            </form>
        );
    }
}
