import * as React from 'react';
import './Button.scss';
import MyLink from '../../components/MyLink/MyLink';

interface IProps {
    typeBtn: string;
    classBtn?: string;
    text: string;
    pathTo?: string;
}

export default class Button extends React.Component<IProps, void> {
    public render(): JSX.Element {

        const {typeBtn, classBtn, text, pathTo} = this.props;
        const className = `button ${classBtn}`;

        return (
            <MyLink pathTo={pathTo}>
                <button
                    className={className}
                    type={typeBtn}>
                    {text}
                </button>
            </MyLink>
        );
    }
}
