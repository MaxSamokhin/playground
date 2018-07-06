import * as React from 'react';

export default class HomeView extends React.Component<void, void> {
    public render(): JSX.Element {
        return (
            <div className={'home'}>
                <p>home component</p>
            </div>
        );
    }
}
