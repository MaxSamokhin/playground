import * as React from 'react';
import './NewsCount.scss';

interface IProps {
    count: number;
}

export default class NewsCount extends React.Component<IProps, void> {

    public render(): JSX.Element {

        const count = this.props.count;

        return (
            <div className={'news__count'}>
                {
                    count ?
                        <div>Всего новостей: {count} </div> :
                        <div>Нет новостей</div>
                }

            </div>
        );
    }
}
