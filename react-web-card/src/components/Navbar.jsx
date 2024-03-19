import logo from "../assets/logo.png"


const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="" />
            <ul className="navbar-ul-list">              
                <li className="navbar-li-list">Home</li>
                <li className="navbar-li-list">About me</li>
                <li className="navbar-li-list">Services</li>
                <li className="btn btn-primary">Conatct</li>
            </ul>
           <hr />
        </div>
    );
}

export default Navbar