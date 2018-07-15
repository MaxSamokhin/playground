import * as React from 'react';
import './NotFound.scss';

export default class NotFound extends React.Component<void, void> {

    public render(): JSX.Element {
        return (
            <div className={'not-found'}>
                <div className={'not-found__text'}>
                    <p>page not found!</p>
                </div>
            </div>
        );
    }
}
