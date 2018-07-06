import * as React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
    pathTo?: string;
}

export default class ButtonLink extends React.Component<IProps, null> {
    constructor() {
        super()
    }
    public render(): JSX.Element {

        const pathTo = this.props.pathTo;
        return (
            <div>
                {
                    pathTo ?
                        <Link to={pathTo}>{this.props.children}</Link> :
                        <div>{this.props.children}</div>
                }
            </div>
        );
    }
}
