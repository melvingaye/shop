import React from 'react';
import { Item } from './Item'

  interface ItemsProps {
    inventory: Item [],
    addItem: (item: Item, count: number) => any;
}  

const Items: React.FC<ItemsProps> = ({inventory, addItem}: ItemsProps) => {
  return (
      <div style={containerStyle}>
          {inventory.map((item) =>(<Item key={item.id} item={item} addItem={addItem}/>))}
      </div>
  ) ;
}

const containerStyle = {
    display: 'grid',
    gridGap: '10px',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, auto))'
} as React.CSSProperties


export default Items;
