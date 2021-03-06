import React, {ChangeEvent, useEffect, useState} from "react";
import Confirm from "../../Confirm/Confirm";
import './expense.scss';
import Button from "../../Button/Button";
import edit from "../../../assets/images/edit.svg";
import save from "../../../assets/images/save.svg";
import {CategoryType} from "../../../redux/settings-reducer";

interface Props {
    id: number,
    name: string,
    category: string,
    count: number,
    price: number,
    spent: number,
    date: string,
    categories: Array<CategoryType>,
    chosenItems: Array<any>,
    checkedAll: boolean,

    setChosenItems(val?: any): void,

    deleteExpense(id: any): void,
    getExpensesThunkCreator(par?: any): void,
    changeExpenseThunkCreator(id: number, name: string, category: string, spent: number, count: number, price: number): void
}

const Expense: React.FC<Props> = (props) => {
    const [name, setName] = useState(props.name);
    const [editMode, setEditMode] = useState(false);
    const [category, setCategory] = useState(props.category);
    const [price, setPrice] = useState(props.price);
    const [spent, setSpent] = useState(props.spent);
    const [count, setCount] = useState(props.count);
    const [showConfirm, setShowConfirm] = useState(false);
    const [checked, setChecked] = useState(props.checkedAll);

    useEffect(() => {
        setSpent(price * count)
    }, [count, price]);

    useEffect(() => {
        setChecked(props.checkedAll);
    }, [props.checkedAll]);

    const isIterable = (object: any) => object != null && typeof object[Symbol.iterator] === 'function';

    useEffect(() => {
        if (checked) {
            const itemsIter = isIterable(props.chosenItems);
            if (itemsIter) {
                props.setChosenItems(Array.from(new Set([...props.chosenItems, props.id])));
            }
        } else {
            props.chosenItems.splice(props.chosenItems.indexOf(props.id), props.chosenItems.indexOf(props.id) === -1 ? 0 : 1);
            props.setChosenItems([...props.chosenItems]);
        }
    }, [checked]);

    const onDeleteExpense = () => {
        props.deleteExpense(props.id);
    };

    const onEditCategory = () => {
        setEditMode(true)
    };

    const onSaveCategory = () => {
        props.changeExpenseThunkCreator(props.id, name, category, spent, count, price);
        setEditMode(false);
    };

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    };

    const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value)
    };

    const onChooseItem = () => {
        setChecked(!checked);
    };

    return (
        <div className={checked ? 'expense expense--chosen' : 'expense'}>
            {showConfirm ? <Confirm className={'confirm'} title={'Are you sure?'} func={onDeleteExpense}
                                    close={() => setShowConfirm(false)}/> : null}
            {!editMode ?
                <>
                    <div className={'checkbox-element'}>
                        <input checked={checked} onChange={onChooseItem} type="checkbox"/>
                        <label>
                            <div className={'checked'}/>
                        </label>
                    </div>

                    <p>{props.name}</p>
                    <p>{props.category}</p>
                    <p>{props.price}</p>
                    <p>{props.count}</p>
                    <p>{props.spent}</p>

                    <div>
                        <p>{props.date}</p>
                    </div>
                    <Button image={edit} func={onEditCategory} className={'button button--edit'}/>
                </> :
                <>
                    <p/>
                    <input type="text" onChange={onChangeName} value={name}/>
                    <select value={category} onChange={onChangeCategory} name="filter" id="filter">
                        {props.categories.map((item: any) => <option key={item.name}
                                                                     value={item.name}>{item.name}</option>)}
                    </select>
                    <input type="number" id={'price'} value={price} min={0} onChange={(e) => setPrice(+e.target.value)}/>
                    <input type="number" id={'count'} value={count} min={1} onChange={(e) => setCount(+e.target.value)}/>

                    <p>{spent}</p>

                    <div>
                        <p>{props.date}</p>
                    </div>
                    <Button image={save} func={onSaveCategory} className={'button button--save'}/>
                </>}
        </div>
    )
};

export default Expense;