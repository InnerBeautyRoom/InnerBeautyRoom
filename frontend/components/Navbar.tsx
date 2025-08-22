import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id = 'navbar'>
            <div id = 'navbar-title-logo'>
            <h2 id = 'title'>InnerBeautyRoom</h2>
            <img src = '/newone.png' id = 'navbar-logo' />
            </div>
            <div id = 'navbar-links'>
                <Link to = '/'>Home</Link>
                <Link to = '/services'>Services</Link>
                <Link to = '/pricing'>Pricing</Link>
                <Link to = '/gallery'>Gallery</Link>
                <Link to = '/booking'>Booking</Link>
                <Link to = '/questions'>Questions</Link>
                <Link to = '/contact'>Contact</Link>
                <Link to = '/about'>About</Link>
            </div>
        </nav>
    )
}

export default Navbar