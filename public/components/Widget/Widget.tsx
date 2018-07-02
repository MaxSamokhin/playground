import * as React from 'react';
import './Widget.scss';

interface IProps {
    path: string;
    srcIcon: string;
}

export default class Widget extends React.Component<IProps, void> {
    public render(): JSX.Element {
        const {path, srcIcon} = this.props;

        return (
            <a href={path}
               className={'widget'}
               target={'_blank'}>

                <img className={'widget__image'}
                     src={srcIcon}
                     alt={'ссылка'}
                />

            </a>
        );
    }
}
