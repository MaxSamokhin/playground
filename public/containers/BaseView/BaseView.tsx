import * as React from 'react';
import * as RoutesMap from "../../service/RoutesMap/RoutesMap";
import {Link} from 'react-router-dom';


export default class BaseView extends React.Component<void, void> {
    constructor() {
        super();
    }

    public render() {
        return (
            <div className='wrapper'>

                <Link to={RoutesMap.HOME}>Главная</Link>
                <Link to={RoutesMap.SIGNIN}>Войти</Link>

                {this.props.children}
            </div>
        );
    }
}
