import React, { useState, ChangeEvent, FormEvent } from 'react'


interface CreateItemProps {
    createItem: (name: string, category: string, price: number, imported: boolean ) => any
}

export const CreateItem: React.FC<CreateItemProps> = ({createItem}: CreateItemProps) =>{
    const [values, setValues] = useState({name: "", category: "", price: 0, imported: false})
    
    function onSubmit(event: FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        createItem(values.name, values.category, values.price, values.imported)
        setValues({name: "", category: "", price: 0, imported: false})
    }
        function handleChange(e: ChangeEvent<HTMLInputElement>) {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }

        return (
            <div>
            <form onSubmit={onSubmit}  style={{display: 'flex', flexDirection: "column"}}>
                <input 
                    type="text" 
                    name="name" 
                    style={{ flex: '1', padding: '5px', margin: "5px"}}
                    placeholder="Item name"
                    value={values.name}
                    onChange={handleChange}
                />
                 <input 
                    type="text" 
                    name="category" 
                    style={{ flex: '1', padding: '5px', margin: "5px"}}
                    placeholder="Item Category"
                    value={values.category}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    step="any"
                    min="0"
                    name="price" 
                    style={{ flex: '1', padding: '5px', margin: "5px"}}
                    placeholder="Item price"
                    value={values.price}
                    onChange={handleChange}
                />
                <label
                style={{ flex: '1', padding: '5px', margin: "5px"}}>
                    Imported:
                    <input 
                    type="checkbox" 
                    name="imported" 
                    style={{ flex: '1', padding: '5px', margin: "5px"}}
                    checked={values.imported}
                    onChange={handleChange}
                />
                </label>
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1', margin: "5px"}}/>
            </form>
        </div>
        );
}