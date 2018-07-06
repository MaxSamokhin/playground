import * as React from 'react';
import './FormItem.scss';

interface IProps {
    label: string;
    type: string;
    placeholder: string;
    key: number;
}

export default class FormItem extends React.Component<IProps, void> {

    public render(): JSX.Element {
        const {label, type, placeholder} = this.props;
        return (
                <div className={'form-item'}>
                    <label className={'form-item__name'}>{label}</label>
                    <input className={'form-item__input'}
                           type={type}
                           placeholder={placeholder}
                           required
                    />
                </div>
        );
    }
}
