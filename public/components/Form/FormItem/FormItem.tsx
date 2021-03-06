import * as React from 'react';
import './FormItem.scss';
import Input from '../Input/Input';

interface IProps {
    label: string;
    type: string;
    placeholder: string;
    onChangeInputForm: (e: any) => void;
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
                    <div className={'form-item__input'}>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            onChangeInput={onChangeInputForm}
                        />
                    </div>
                </div>
        );
    }
}
