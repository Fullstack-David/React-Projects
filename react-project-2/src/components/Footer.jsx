import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='copyright'>
                <p>Upphovsrätten &copy;{year}</p>
            </div>
            <ul className='social-media'>
                <li className='media-contact'>Facebook</li>
                <li className='media-contact'>Instagram</li>
                <li className='media-contact'>LinkedIn</li>
            </ul>
            
        </footer>
    );
}

export default Footer