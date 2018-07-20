import * as React from 'react';
import './Button.scss';
import classnames from 'classnames';
import ButtonLink from './ButtonLink/ButtonLink';

interface IProps {
    typeBtn: string;
    text: string;
    pathTo?: string;
    onClickButton?: (e: any) => void;
    formBtn?: boolean;
    disabled?: boolean;
}

export default class Button extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {

        const {typeBtn, text, pathTo, onClickButton, formBtn, disabled} = this.props;

        const componentClasses = classnames({
            button: true,
            form__button: formBtn,
            button_disabled: disabled
        });

        return (
            <ButtonLink pathTo={pathTo}>
                <button
                    className={componentClasses}
                    type={typeBtn}
                    onClick={onClickButton}
                    disabled={disabled}>
                    {text}
                </button>
            </ButtonLink>
        );
    }
}
