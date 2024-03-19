
const Footer = () => {

    const year = new Date().getFullYear();
    return (
        
            <div className="footer">
            
                <ul className="footer-ul-list">
                <li className="footer-li-list"><strong>Adress</strong>
                    <p>Göteborg</p>
                    <p>414 57</p>
                    <p>Kabelgatan 14</p>
                
                </li>
                <li className="footer-li-list"><strong>Phone-number</strong>
                <p>0765- 58 58 88</p>
                </li>
                <li className="footer-li-list"><strong>E-mail adress</strong>
                <p>Batman@hmail.com</p>
                </li>
            </ul>
            <p className="copy">Upphovsrätten &copy; {year}</p>
            </div>
        
    );
}

export default Footer;