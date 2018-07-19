import * as React from 'react';
import './Button.scss';
import classnames from 'classnames';
import ButtonLink from './ButtonLink/ButtonLink';

interface IProps {
    typeBtn: string;
    text: string;
    pathTo?: string;
    onClickButton?: () => void;
    formBtn?: boolean;
}

export default class Button extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {

        const {typeBtn, text, pathTo, onClickButton, formBtn} = this.props;

        const componentClasses = classnames({
            button: true,
            form__button: formBtn
        });

        return (
            <ButtonLink pathTo={pathTo}>
                <button
                    className={componentClasses}
                    type={typeBtn}
                    onClick={onClickButton}>
                    {text}
                </button>
            </ButtonLink>
        );
    }
}
