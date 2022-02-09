import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'
import routes from '../../data/routes';

export default function NavLinks() {
    return (
        <ul>
            {routes.map(route => (
                <li>
                    {route.label.includes("images") ? 
                    <Link to ={route.path}><img src={route.label} alt='logo' className='nav-images'/></Link> :
                    <Link to ={route.path}> {route.label} </Link>}
                </li>
            ))}
        </ul>
    )
}