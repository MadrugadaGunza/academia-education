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
                        <li><Link to='/courses'>Cursos</Link></li>
                        <li><Link to='/about'>Sobre</Link></li>
                        <li><Link to='/team'>Equipa</Link></li>
                        <li><Link to='/pricing'>Preços</Link></li>
                        <li><Link to='/journal'>Jornal</Link></li>
                        <li><Link to='/contact'>Contacto</Link></li>
                    </ul>
                    <div className="start">
                        <button className="button">OBTENHA CERTIFICAÇÃO</button>
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
