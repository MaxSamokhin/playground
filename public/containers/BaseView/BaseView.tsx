import * as React from 'react';
import * as RoutesMap from '../../service/RoutesMap/RoutesMap';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';

export default class BaseView extends React.Component<void, void> {
    public render(): JSX.Element {
        return (
            <div className='content'>

                <Header/>

                <section className='content__container'>
                    {this.props.children}
                </section>

            </div>
        );
    }
}
