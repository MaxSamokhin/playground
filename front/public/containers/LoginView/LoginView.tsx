import * as React from 'react';
import './LoginView.scss';

import SignInForm from '../../components/Form/SignInForm';

export default class LoginView extends React.Component<void, void> {

    public render(): JSX.Element {
        return (
            <div className={'signin'}>
                <SignInForm />
            </div>
        );
    }
}
