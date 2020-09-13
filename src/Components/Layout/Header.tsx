import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
        return (
        <header style={headerStyle}>
            <h1>General Store</h1>           
            <Link to="/" style={linkStyle}>View Inventory</Link> | {' '}
            <Link to="/add" style={linkStyle}>Add Inventory Item</Link> | {' '}
            <Link to="/cart" style={linkStyle}>Checkout</Link>            
        </header>
        );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
} as React.CSSProperties

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}