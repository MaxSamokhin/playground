import * as React from 'react';
import './UserCheckbox.scss';

interface IProps {
    label: string;
    defaultChecked: boolean;
    onCheckRuleClick: (e: any) => void;
}

export default class UserCheckbox extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        const {label, defaultChecked, onCheckRuleClick} = this.props;
        return (
            <div className="checkbox">
                <input
                    className={'checkbox__input'}
                    type='checkbox'
                    defaultChecked={defaultChecked}
                    onChange={onCheckRuleClick}
                />
                <label className={'checkbox__label'}>
                    {label}
                </label>
            </div>
        );
    }
}
