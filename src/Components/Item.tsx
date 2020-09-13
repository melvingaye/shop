import React, { useState } from 'react'

export interface Item {
    id: number,
    name: string,
    category: string,
    imported: boolean,
    price: number,
}

export interface Props {
    item: Item
    addItem: (item: Item, count: number) => any;
}

export const Item: React.FC<Props> = ({item, addItem}: Props) => {
        const [count, setCount] = useState(0);
        let itemCount: number = 0;

        let onAddBtnClick = () =>{
            setCount(count => count +1);
            itemCount = count + 1;
            addItem(item, itemCount);

        }
       
        let onRemoveBtnClick = () => {
            setCount(count > 0 ? count - 1 : 0)
        }
        
        return (
            <div style={itemStyle}>
                <h1>{item.name}</h1>
                <h3>{item.category}</h3>
                <h4>${item.price}</h4>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <button onClick={onAddBtnClick} style={btnStyle}>Add Item ({count})</button>
                <button  onClick={onRemoveBtnClick} style={btnRemoveStyle}>Remove Item</button>
                </div>
            </div>
        );
}

const itemStyle = {
    textAlign: 'center',
    flex: '0 1 21%',
    margin: '5px',
    padding: '10px',
    backgroundColor: '#f4f4f4'
} as React.CSSProperties

const btnStyle = {
    padding: '10px',
    background: '#98FB98',
    borderRadius: '5px',
    border: 'none'
} as React.CSSProperties

const btnRemoveStyle = {
    padding: '10px',
    background: '#FFCCCB',
    borderRadius: '5px',
    border: 'none'
} as React.CSSProperties