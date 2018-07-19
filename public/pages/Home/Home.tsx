import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Home.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Form/Input/Input';
import UserCheckbox from '../../components/UserCheckbox/UserCheckbox';
import StorageLocal from '../../service/StorageLocal/StorageLocal';
import Notification from '../../components/Notification/Notification';
import eventEmitter from '../../service/EventEmitter/eventEmitter';
import {ADD_NOTE} from './Home.events';

interface IState {
    inputValue: string;
    error: string
}

export default class Home extends React.Component<void, IState> {
    private store: StorageLocal;

    constructor() {
        super();

        this.state = {
            inputValue: '',
            error: ''
        };

        this._onCheckRuleClick = this._onCheckRuleClick.bind(this);
        this._onClickBtn = this._onClickBtn.bind(this);
        this._onChangeInput = this._onChangeInput.bind(this);
    }

    public componentWillMount() { // до первого рендера
        this.store = new StorageLocal;
    }

    public componentDidMount() { // после рендера
        eventEmitter.on('ADD_NOTE', this._listeStorageAdd.bind(this));
    }

    public componentWillUnmount() {
        eventEmitter.off('ADD_NOTE');
    }

    public render(): JSX.Element {
        const list = this._getList();
        console.log(this.store.getAll());
        return (
            <div className={'home'}>
                <Notification messages={[{
                    text: this.state.error,
                    type: 'info'
                }]}/>

                <form className={'home__form'}>
                    <Input
                        type={'text'}
                        placeholder={'To do item'}
                        ref={'myInput'}
                    />
                    <Button
                        text={'Добавить'}
                        typeBtn={'button'}
                        onClickButton={this._onClickBtn}
                    />
                </form>

                <div className={'home__item'}>
                    {list}
                </div>
            </div>
        );
    }

    private _listeStorageAdd() {
        console.log('asdasd');
        this.forceUpdate(); //Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().
    }

    private _getList() {
        return this.store.getAll().store.map((elem) =>
            <UserCheckbox
                label={elem.text}
                defaultChecked={false}
                onCheckRuleClick={this._onCheckRuleClick}
                key={elem.id}
            />
        );
    }

    private _onClickBtn() {
        let val = (ReactDOM.findDOMNode(this.refs.myInput)as HTMLInputElement);
        if (val.value.trim().length === 0) {
            this.setState({error: 'Введите данные'});
            return;
        }

        this.store.add(val.value);
        val.value= '';
    }

    private _onChangeInput(e) {
        this.setState({inputValue: e.currentTarget.value});
    }

    private _onCheckRuleClick(e) {
        console.log(e.currentTarget);
        this.setState({
            [e.currentTarget.name]: e.currentTarget.checked
        });
    }
}
