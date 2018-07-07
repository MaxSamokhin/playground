import * as React from 'react';
import './Button.scss';
import ButtonLink from './ButtonLink/ButtonLink';

interface IProps {
    typeBtn: string;
    classBtn?: string;
    text: string;
    pathTo?: string;
    onClickButton?: () => {};
}

export default class Button extends React.Component<IProps, null> {
    constructor() {
        super();
    }

    public render(): JSX.Element {

        const {typeBtn, classBtn, text, pathTo, onClickButton} = this.props;
        const className = `button ${classBtn}`;

        return (
            <ButtonLink pathTo={pathTo}>
                <button
                    className={className}
                    type={typeBtn}
                    onClick={onClickButton}>
                    {text}
                </button>
            </ButtonLink>
        );
    }
}
