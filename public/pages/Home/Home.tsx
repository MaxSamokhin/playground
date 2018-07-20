import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './Home.scss';
import Button from '../../components/Button/Button';
import Input from '../../components/Form/Input/Input';
import UserCheckbox from '../../components/UserCheckbox/UserCheckbox';
import StorageLocal from '../../service/StorageLocal/StorageLocal';
import Notification from '../../components/Notification/Notification';

interface IState {
    error: string;
    disabledButtonDelete: boolean;
    checkAll: boolean;
    notes: Array<{
        id: string;
        text?: string;
        isChecked?: boolean;
    }>;
}

export default class Home extends React.Component<void, IState> {
    private _store: StorageLocal;
    private _selectId: Array<any>;

    constructor() {
        super();

        this._store = new StorageLocal();
        this._selectId = [];
        this.state = {
            error: '',
            notes: this._store.getAll().store,
            disabledButtonDelete: true,
            checkAll: false
        };

        this._onCheckRuleClick = this._onCheckRuleClick.bind(this);
        this._onClickAddData = this._onClickAddData.bind(this);
        this._onClickDelete = this._onClickDelete.bind(this);
        this._onClickSelectAll = this._onClickSelectAll.bind(this);
    }

    public render(): JSX.Element {
        const {error, disabledButtonDelete, checkAll} = this.state;
        const list = this._getList();
        return (
            <div className={'home'}>
                <Notification messages={[{
                    text: error,
                    type: 'error'
                }]}/>

                <form className={'home__form'}>
                    <UserCheckbox
                        onCheckRuleClick={this._onClickSelectAll}
                        checked={checkAll}
                    />
                    <Button
                        text={'Удалить'}
                        typeBtn={'button'}
                        onClickButton={this._onClickDelete}
                        disabled={disabledButtonDelete}/>
                    <Button
                        text={'Добавить'}
                        typeBtn={'button'}
                        onClickButton={this._onClickAddData}/>
                    <Input
                        type={'text'}
                        placeholder={'To do item'}
                        ref={'myInput'}
                    />
                </form>

                <main className={'home__item'}>
                    {list}
                </main>

            </div>
        );
    }

    private _getList() {
        return this.state.notes.map((elem) =>
            <UserCheckbox
                label={elem.text}
                onCheckRuleClick={this._onCheckRuleClick}
                key={elem.id}
                val={elem.id}
                checked={elem.isChecked}
            />
        );
    }

    private _onClickSelectAll(e) {
        if (this.state.notes.length === 0) {
            return;
        }

        this._selectId = [];
        const currentChecked = e.currentTarget.checked;

        const res = this.state.notes.map((elem) => {
            elem.isChecked = !!currentChecked;
            if (currentChecked) {
                this._selectId.push(elem.id);
            }
            return elem;
        });

        const disabledButtonDelete = !e.currentTarget.checked;
        this.setState({
            notes: res,
            disabledButtonDelete,
            checkAll: !!currentChecked
        });
    }

    private _onClickDelete() {
        this._store.delete(this._selectId);
        this.setState({
            notes: this._store.getAll().store,
            disabledButtonDelete: true,
            checkAll: false
        });
        this._selectId = [];
    }

    private _onClickAddData() {
        const inputValue = (ReactDOM.findDOMNode(this.refs.myInput)as HTMLInputElement);
        if (inputValue.value.trim().length === 0) {
            this.setState({error: 'Введите данные'});
            return;
        }
        this._store.add(inputValue.value);
        inputValue.value = '';
        this.setState({notes: this._store.getAll().store});
    }

    private _onCheckRuleClick(e) {
        const id = e.currentTarget.value;
        const newNotes = this.state.notes.map((elem) => {
            if (elem.id === id) {
                elem.isChecked = !elem.isChecked;
            }
            return elem;
        });

        if (e.currentTarget.checked) {
            this._selectId.push(id);
        }

        if (!e.currentTarget.checked) { // если убрали отметку, то ищем и удаляем
            const index = this._selectId.indexOf(id);
            if (index === -1) {
                return;
            }
            this._selectId.splice(index, 1);
        }

        const disabledButton = this._selectId.length === 0;
        this.setState({
            disabledButtonDelete: disabledButton,
            notes: newNotes
        });
    }
}
