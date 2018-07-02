import * as React from 'react';
import Header from '../../components/Header/Header';
import './BaseView.scss';

export default class BaseView extends React.Component<any, void> {
    public render(): JSX.Element {
        return (
            <div className={'content'}>

                <Header/>

                <section className={'main'}>
                    {this.props.children}
                </section>

            </div>
        );
    }
}
