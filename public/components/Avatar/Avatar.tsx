import * as React from 'react';
import './Avatar.scss';
import {DEFAULT_IMAGE_AVATAR} from './Avatar.constant';

interface IProps {
    src?: string;
    alt: string;
}

export default class Avatar extends React.Component<IProps, null> {
    public render(): JSX.Element {
        const {src, alt} = this.props;
        const srcImage = src || DEFAULT_IMAGE_AVATAR;
        return (

            <img
                className={'avatar'}
                src={srcImage}
                alt={alt}
            />
        );
    }
}
