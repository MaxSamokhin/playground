import * as React from 'react';

import classnames from 'classnames';
import './Notification.scss';

interface IProps {
    messages: Array<{
        text: string;
        type?: string;
    }>;
}

export default class Notification extends React.Component<IProps, null> {

    public render(): JSX.Element {

        const notifications = this._getNotifications(this.props.messages);

        return (
            <div className='notification-wrap'>
                {notifications}
            </div>
        );
    }

    private _getNotifications(messages) {
        return messages.map((notify, index) => {

            if (notify.text === '') {
                return;
            }

            const classNotify = classnames({
                notification: true,
                notification_info: notify.type === 'info',
                notification_error: notify.type === 'error'
            });

            return (
                <div className={classNotify}
                     key={index}
                     onAnimationEnd={this._onAnimationEnd}
                >
                    <div className={'notification__text'}>
                        {notify.text}
                    </div>
                </div>);
        });
    }

    private _onAnimationEnd(e) {
        if (e.animationName === 'hide') {
            e.currentTarget.classList.add('notification_delete');
        }
    }
}
