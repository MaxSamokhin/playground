import * as React from 'react';
import classnames from 'classnames';
import './Notification.scss';

interface IProps {
    text: string;
    type?: string;
}

export default class Notification extends React.Component<IProps, void> {

    public render(): JSX.Element {
        const {text, type} = this.props;

        const classNotify = classnames({
            notification: true,
            notification_info: type === 'info',
            notification_error: type === 'error'
        });

        return (
            <div className={classNotify}>
                <div className={'notification__text'}>
                    {text}
                </div>
                <div className='notify__close'>
                    &times;
                </div>
            </div>
        );
    }
}
