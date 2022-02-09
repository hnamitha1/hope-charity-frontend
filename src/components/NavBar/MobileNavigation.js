import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'
import {CgMenu} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'
import {useState} from 'react'
import MobileNavLinks from './MobileNavLinks';
import routes from '../../data/routes-mobile';

export default function MobileNavigation() {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <CgMenu className="hamburger" 
                            size='40px' color='white'
                            onClick={() => setOpen(!open)}
                         />

    const CloseIcon = <CgClose className="hamburger" 
                         size='40px' color='white'
                         onClick={() => setOpen(!open)}
                      />              
                      
    const closeMobileMenu = () => setOpen(false);                  

    return(
        <nav className="MobileNavigation">
            {routes.filter((l) => l.index).map((route) => (
                <Link to ={route.path}><img src={route.label} alt='logo' className='hope-logo'/></Link> 
            ))}
            {open ? CloseIcon : hamburgerIcon}
            {open && <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav> 
    ); 
}