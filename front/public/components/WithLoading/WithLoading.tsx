import * as React from 'react';
import Loader from '../Loader/Loader';
import classnames from 'classnames';
import './WithLoading.scss';

interface IProps {
    isLoading: boolean;
    isFlexBlock?: boolean;
}

export default class WithLoading extends React.Component<IProps, void> {
    public render(): JSX.Element {
        const {isLoading, isFlexBlock} = this.props;
        const classSection = classnames({
            flex_block: isFlexBlock
        });

        return (
            isLoading ?
                <Loader/> :
                <div className={classSection}>{this.props.children}</div>
        );
    }
}
