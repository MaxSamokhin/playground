import * as React from 'react';
import './FormItem.scss';

interface IProps {
    label: string;
    type: string;
    placeholder: string;
    key: number;
    onChangeInputForm:any;
}

export default class FormItem extends React.Component<IProps, null> {
    constructor() {
        super();
    }
    public render(): JSX.Element {
        const {label, type, placeholder, onChangeInputForm} = this.props;
        return (
                <div className={'form-item'}>
                    <label className={'form-item__name'}>{label}</label>
                    <input className={'form-item__input'}
                           type={type}
                           placeholder={placeholder}
                           onChange={onChangeInputForm}
                           required
                    />
                </div>
        );
    }
}
