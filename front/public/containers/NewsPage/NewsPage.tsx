import * as React from 'react';
import NewsCount from './../../components/NewsCount/NewsCount';
import News from './../../components/News/News';
import * as NewsActions from './News.actions';
import {connect} from 'react-redux';
import Notification from '../../components/Notification/Notification';

interface IProps {
    getNews: () => {};
    news: Array<{
        id: number,
        title: string,
        text: string
    }>;
    error: string;
}

class NewsPage extends React.Component<IProps, null> {
    public componentDidMount() {
        this.props.getNews();
    }

    public render(): JSX.Element {
        const news = this.props.news || [];
        return (
            <div className='news'>
                <Notification
                    messages={[{
                        text: this.props.error,
                        type: 'error'
                    }]}/>
                <News news={news}/>
                <NewsCount count={news.length}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.newsState.news,
        error: state.newsState.errorMsg
    };
}

const mapDispatchToProps = (dispatch) => ({
    getNews: () => dispatch(NewsActions.getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
