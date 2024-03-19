import React from 'react'

const Header = (isToggled) => {
    function toggled() {
        
    }

    return (
        <header className='header'>
            <h3>This is my Header</h3>
            <button onChange={isToggled} className='button'>Header</button>
        </header>
    );
}

export default Header;