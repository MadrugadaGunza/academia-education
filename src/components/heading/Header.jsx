import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Head from "./Head"

const Header = () => {
    const [click, setClick] = React.useState(false);

    return (
        <>
            <Head />
            <header>
                <nav className="flexSB">
                    <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>All Courses</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/team'>Team</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/journal'>Journal</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <div className="start">
                        <button className="button">GET CERTIFICATION</button>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header
