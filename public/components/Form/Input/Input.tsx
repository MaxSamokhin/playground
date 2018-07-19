import * as React from 'react';
import './Input.scss';

interface IProps {
    type: string;
    placeholder: string;
    onChangeInput?: (e: any) => void;
}

export default class Input extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        const {type, placeholder, onChangeInput} = this.props;
        return (
            <input className={'input'}
                   type={type}
                   placeholder={placeholder}
                   onChange={onChangeInput}
                   required
            />
        );
    }
}
