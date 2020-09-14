import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Items  from './Components/Items';
import { Header } from './Components/Layout/Header';
import { CreateItem } from './Components/Pages/CreateItem';
import { Cart } from './Components/Pages/Cart';
import { Item } from './Components/Item'

const App: React.FC = () => {
 const [inventory, setInventory] = useState([]);
 let cartItems: any = [];

 useEffect(() => {
   axios.get('https://my-json-server.typicode.com/melvingaye/shop/items')
   .then( res =>{ console.log(res);  setInventory(res.data);})
   .catch( err => console.log(err))},[])

   let addItem = (addedItem: Item, count: number) => {
     //debugger;
     var found = cartItems.findIndex((element: any)=>{ return element.addedItem.id === addedItem.id})
     if(found > -1){
       cartItems[found].count = count;
     } else {
      cartItems.push({addedItem, count})
     }
   }

   let createItem = (name: string, category: string, price: number, imported: boolean) =>{
     var id = inventory.length + 1;
     var locPrice = price.toString()
     price = parseFloat(locPrice)
     axios.post(`https://my-json-server.typicode.com/melvingaye/shop/items`,{id, name, category, price, imported})
     .then(res => {
       debugger
       var loclItem = (res.data as never)
       setInventory([...inventory, loclItem])
      })
     .catch(err => console.log(err))
   }
   
  return (
    <Router>
    <div className="App">
      <div className="container-root"> 
      <Header />
      <Switch>
      <Route path="/" render={()=><Items inventory={inventory} addItem={addItem}/>} exact/>
      <Route path="/add" render={()=><CreateItem createItem={createItem}/>}/>
      <Route path="/cart" render={()=><Cart cartItems={cartItems}/>}/>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
