import * as React from 'react';
import NewsCount from './../../components/NewsCount/NewsCount';
import News from './../../components/News/News';
import * as NewsActions from './News.actions';
import {connect} from 'react-redux';
import Notification from '../../components/Notification/Notification';
import WithLoading from '../../components/WithLoading/WithLoading';

interface IProps {
    getNews: () => {};
    news: Array<{
        id: number,
        title: string,
        text: string
    }>;
    error: string;
    isLoading: boolean;
}

class NewsPage extends React.Component<IProps, null> {
    public componentDidMount() {
        this.props.getNews();
    }

    public render(): JSX.Element {
        const news = this.props.news || [];
        const notificationMsg = this._getNotificationMsg();

        return (
            <WithLoading isLoading={this.props.isLoading}>
                <div className='news'>
                    <Notification messages={notificationMsg}/>
                    <News news={news}/>
                    <NewsCount count={news.length}/>
                </div>
            </WithLoading>
        );
    }

    private _getNotificationMsg() {
        return [{
            text: this.props.error,
            type: 'error'
        }];
    }
}

function mapStateToProps(state) {
    return {
        news: state.newsState.news,
        error: state.newsState.errorMsg,
        isLoading: state.newsState.isLoadingNews
    };
}

const mapDispatchToProps = (dispatch) => ({
    getNews: () => dispatch(NewsActions.getNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
