import '../../styles/Footer.css'
import { Link } from 'react-router-dom';
import routes_segment from '../../data/routes-footer-segment'
import routes_content from '../../data/routes-footer-content'

export default function Footer() {
    return (
        <div className="footer">
          <div className="footer-content">
            <ul className="footer-segment">       
                {routes_content.map(route => (
                    <li className={route.class}>
                        <Link to ={route.path}>{route.label}</Link> 
                    </li>
                ))}
            </ul>
            <ul className="footer-segment">
                {routes_segment.map(route => (
                    <li className={route.class}>
                        <Link to ={route.path}>{route.label}</Link> 
                    </li>
                ))}
            </ul>
          </div>
        </div>
      );
}