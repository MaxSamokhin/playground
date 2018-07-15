import * as React from 'react';
import './InfoItem.scss';

interface IProps {
    label: string;
    value: string;
}

export default class InfoItem extends React.Component<IProps, null> {
    constructor() {
        super();
    }
    public render(): JSX.Element {
        const {label, value} = this.props;
        return (
            <div className={'info-item'}>
                <div className={'info-item__label'}>{label}: </div>
                <div className={'info-item__value'}>{value}</div>
            </div>
        );
    }
}
