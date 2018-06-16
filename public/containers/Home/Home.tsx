import * as React from 'react';

export default class BaseView extends React.Component<void, void> {

    public render() {
        return (
            <div className='home'>
                <p>home component</p>
            </div>
        );
    }
}
