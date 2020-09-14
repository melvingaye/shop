import React from 'react'
import {Item} from '../../Components/Item'

export interface cartItemProp {
    addedItem: Item
    count: number
}
export interface CartProps {
     cartItems: cartItemProp[]
}

export const Cart: React.FC<CartProps> = ({cartItems}) => {
        //debugger;
        
        enum TaxConstants {
            ImportedExempt = .05,
            StandardTax = .1,
            ImportedNonExempt = .15
        }

        var exemptCategories = ["Medical", "Food", "Book"]
        var calculatedTax: number = 0, itemTotal: number = 0
        var totalPrice: any = [], 
        taxTotal: any = []

        function roundToTwo(value: number) {
            return (Math.ceil(value * 100) / 100);
        }

        function calculateItemPrice(item: Item, count: number): number {
            //debugger;
            if(!item.imported && exemptCategories.includes(item.category)){
                itemTotal = item.price * count 
                calculatedTax = 0;
            }

            if(item.imported && exemptCategories.includes(item.category)){
               calculatedTax = roundToTwo(item.price * TaxConstants.ImportedExempt)
               itemTotal = parseFloat(((item.price + calculatedTax) * count).toFixed(2))                           
            }

            if(!item.imported && !exemptCategories.includes(item.category)){
                calculatedTax = roundToTwo(item.price * TaxConstants.StandardTax)
                itemTotal = parseFloat(((item.price + calculatedTax) * count).toFixed(2))                               
            }

            if(item.imported && !exemptCategories.includes(item.category)){
                calculatedTax = roundToTwo(item.price * TaxConstants.ImportedNonExempt)
                itemTotal = parseFloat(((item.price + calculatedTax) * count).toFixed(2))               
            }

            totalPrice.push(itemTotal)
            taxTotal.push(calculatedTax*count)
            return itemTotal;
        }

        function calculateTotalTax(){
            var tax: number = taxTotal.reduce((a: number, b: number)=>{return a + b},0)
            return parseFloat(tax.toFixed(2))
        }

        function CalculateTotalPrice(){
           var price: number = totalPrice.reduce((a: number, b: number)=>{return a + b}, 0)
           return parseFloat(price.toFixed(2))
        }

        return (
        <div style={{display: "flex", flexDirection: "column", textAlign: "center", paddingTop: "50px", listStyle: "none"}}>
            <div>
            {cartItems.map((item) =>(
            <li key={item.addedItem.id}>
                {item.addedItem.name}:{' '}
                ${calculateItemPrice(item.addedItem, item.count)}{' '}
                {item.count > 1 && <span>{' '}({item.count}{' '}@{' '}{parseFloat((item.addedItem.price+calculatedTax).toFixed(2))})</span>}              
            </li>
            ))}
            </div>
            <div>
            <li>Sales tax: ${calculateTotalTax()}</li>
            <li>Total price: ${CalculateTotalPrice()}</li>
            </div>
        </div>
        );
}

/**Book: 24.98 (2 @ 12.49)
Music CD: 16.49
Chocolate bar: 0.85
Sales Taxes: 1.50
Total: 42.32 */