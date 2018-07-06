import * as React from 'react';
import './Avatar.scss';

interface IProps {
    src?: string;
    alt: string;
}

export default class Avatar extends React.Component<IProps, null> {
    public render(): JSX.Element {
        const {src, alt} = this.props;
        const srcImage = src || './../../media/images/dafaultAvatar.png';
        return (

            <img
                className={'avatar'}
                src={srcImage}
                alt={alt}
            />
        );
    }
}
