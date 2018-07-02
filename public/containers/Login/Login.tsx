import * as React from 'react';
import './Login.scss';

import SignInForm from '../../components/Form/SignInForm';

export default class Login extends React.Component<void, void> {

    public render(): JSX.Element {
        return (
            <div className={'signin'}>
                <SignInForm />
            </div>
        );
    }
}
