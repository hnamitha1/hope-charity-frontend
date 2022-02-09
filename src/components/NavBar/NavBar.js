import '../../styles/NavBar.css'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

export default function NavBar(){
    return(
        <div className="nav-bar">
            <Navigation />
            <MobileNavigation />
        </div>
    )
}