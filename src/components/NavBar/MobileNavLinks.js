import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css'
import routes from '../../data/routes-mobile';

export default function MobileNavLinks() {
    return (
        <ul>
            {routes.filter((l) => !l.index).map(route => (
                <li>
                    <Link to ={route.path}> {route.label} </Link>
                </li>
            ))}
        </ul>
    )
}