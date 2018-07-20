import * as React from 'react';
import './Input.scss';

interface IProps {
    type: string;
    placeholder: string;
    onKeyPress?: (e?: any) => void;
    onChangeInput?: (e?: any) => void;
}

export default class Input extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        const {type, placeholder, onChangeInput, onKeyPress} = this.props;
        return (
            <input className={'input'}
                   onKeyPress={onKeyPress}
                   type={type}
                   placeholder={placeholder}
                   onChange={onChangeInput}
                   required
            />
        );
    }
}
