import * as React from 'react';
import './Loader.scss';

export default class Loader extends React.Component<any, void> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        return (
            <div className='loader'>
                <div className='spinner'>
                    <div className='rect1'/>
                    <div className='rect2'/>
                    <div className='rect3'/>
                    <div className='rect4'/>
                    <div className='rect5'/>
                </div>
            </div>
        );
    }
}
