import * as React from 'react';
import './NewsArticle.scss';

interface IProps {
    title: string;
    content: string;
}

export default class NewsArticle extends React.Component<IProps, void> {
    public render(): JSX.Element {

        const {title, content} = this.props;

        return (
            <div className={'article'}>
                <div className={'article__title'}>
                    {title}
                </div>
                <div className={'article__content'}>
                    {content}
                </div>
            </div>
        );
    }
}
