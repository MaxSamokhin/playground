import * as React from 'react';
import './UserCheckbox.scss';

interface IProps {
    label?: string;
    onCheckRuleClick: (e: any) => void;
    val?: string;
    checked?: boolean;
}

export default class UserCheckbox extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        const {label, onCheckRuleClick, val, checked} = this.props;
        return (
            <div className={'checkbox'}>
                <input
                    className={'checkbox__input'}
                    type='checkbox'
                    onChange={onCheckRuleClick}
                    value={val}
                    checked={checked}
                />
                {label ?
                    <label className={'checkbox__label'}>
                        {label}
                    </label> :
                    ''
                }

            </div>
        );
    }
}
