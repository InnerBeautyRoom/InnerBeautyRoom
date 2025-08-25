import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [burger, setBurger] = useState<boolean>(false)

    return (
        <nav id = 'navbar'>
            <div id = 'navbar-title-logo'>
            <h2 id = 'title'>InnerBeautyRoom</h2>
            <img src = '/newone.png' id = 'navbar-logo' />
            </div>
            <div id = 'navbar-burger'>
                <button onClick = {() => setBurger(prev => !prev)}><p></p><p></p><p></p></button>
            </div>
            <div id = {`navbar-links-${burger ? 'open' : 'off'}`}>
                <Link to = '/' onClick = {() => setBurger(false)}>Home</Link>
                <Link to = '/services' onClick = {() => setBurger(false)}>Services</Link>
                <Link to = '/pricing' onClick = {() => setBurger(false)}>Pricing</Link>
                <Link to = '/gallery' onClick = {() => setBurger(false)}>Gallery</Link>
                <Link to = '/booking' onClick = {() => setBurger(false)}>Booking</Link>
                <Link to = '/questions' onClick = {() => setBurger(false)}>Questions</Link>
                <Link to = '/contact' onClick = {() => setBurger(false)}>Contact</Link>
                <Link to = '/about' onClick = {() => setBurger(false)}>About</Link>
                <Link to = '/admin' onClick = {() => setBurger(false)}>Admin</Link>
            </div>
        </nav>
    )
}

export default Navbar