import * as React from 'react';
import './News.scss';
import NewsArticle from './NewsArticle/NewsArticle';

interface IProps {
    news: Array<{ id: number, title: string, text: string }>;
}

export default class News extends React.Component<IProps, void> {

    public render(): JSX.Element {

        const news = this.props.news;

        const newsContent = news.map(
            (elem) => <NewsArticle
                title={elem.title}
                content={elem.text}
                key={elem.id}
            />
        );

        return (
            <div className='news__article'>
                {newsContent}
            </div>
        );
    }
}
