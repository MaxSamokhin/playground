import * as React from 'react';

export default class NotFoundView extends React.Component<void, void> {

    public render(): JSX.Element {
        return (
            <div className={'not-found'}>
                <p>Not Found!</p>
                </div>
        );
    }
}
