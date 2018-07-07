import * as React from 'react';
import NewsCount from './../../components/NewsCount/NewsCount';
import News from './../../components/News/News';
import * as NewsActions from '../../actions/News/News.actions';
import {connect} from 'react-redux';

interface IProps {
    getNews: () => {};
    news: any;
}

class NewsView extends React.Component<IProps, null> {

    public componentDidMount() {
        this.props.getNews();
    }

    public render(): JSX.Element {
        const news = this.props.news || [];
        return (
            <div className='news'>
                <News news={news}/>
                <NewsCount count={news.length}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.newsState.news
    };
}

const mapDispatchToProps = (dispatch) => ({
    getNews: () => dispatch(NewsActions.getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);
