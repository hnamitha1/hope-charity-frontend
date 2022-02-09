import Main from "../layouts/Main"
import Footer from '../components/Footer/Footer'
import './../styles/index.css'
import home from '../data/home'

export default function Index() {
    return (
        <div className="hope-home">   
            <Main />
            <div id="hope">
                {home.map(home =>(
                    <div id= {home.id} className="img-position">
                        <a href= {home.href}>
                            <img src={home.image} alt={home.alt} className='img-size'/>
                        </a> 
                     </div>
                    )
                )} 
                <a href="/our-app" id="app-link">
                    <div id="download_app" className="img-position"></div>
                </a>
                <Footer />
            </div>
        </div>
    );
}