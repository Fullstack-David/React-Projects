import React from 'react'

const Navbar = () => {
    
    const handleClick = () => {
        alert("Hello world!")
    }
    return (
        <nav className='navbar'>
            <h3>This is my Navbar button</h3>
            <button className='button' onClick={handleClick}>Home</button>
        </nav>
    );
}

export default Navbar;