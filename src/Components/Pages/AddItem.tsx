import React from 'react'

interface AddItemProps {

}

export const AddItem: React.FC<AddItemProps> = () => {
        return (
            <React.Fragment>
            <div>
                <form>
                    <input type="text" name="name"/>
                    <input type="checkbox" />
                </form>
            </div>
            </React.Fragment>
        );
}