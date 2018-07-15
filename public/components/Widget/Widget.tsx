import * as React from 'react';
import './Widget.scss';

interface IProps {
    link: string;
    srcIcon: string;
}

export default class Widget extends React.Component<IProps, any> {
    public render(): JSX.Element {
        const {link, srcIcon} = this.props;

        return (
            <a href={link}
               className={'widget'}
               target={'_blank'}
               rel={'noreferrer noopener'}
            >
                <img className={'widget__image'}
                     src={srcIcon}
                     alt={'ссылка'}
                />
            </a>
        );
    }
}
