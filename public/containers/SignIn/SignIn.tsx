import * as React from 'react';

export default class BaseView extends React.Component<void, void> {

    public render() {
        return (
            <div className='login'>
                <p>login component</p>
            </div>
        );
    }
}
