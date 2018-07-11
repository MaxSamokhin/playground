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

        const notifications = this.props.messages.map((notify, index) => {

            const classNotify = classnames({
                notification: true,
                notification_info: notify.type === 'info',
                notification_error: notify.type === 'error'
            });

            return (
                <div className={classNotify}
                     ref={'notify'}
                     key={index}
                     onAnimationEnd={this.onAnimationEnd}
                >
                    <div className={'notification__text'}>
                        {notify.text}
                    </div>
                </div>);
        });

        return (
            <div className='notification-wrap'>
                {notifications}
            </div>
        );
    }

    private onAnimationEnd(e) {
        if (e.animationName === 'hide') {
            e.target.classList.add('notification_delete');
        }
    }
}
