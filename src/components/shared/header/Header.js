import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import logo from '../../../../public/assets/Logo.png';

export default function Header() {
    return (
        <div>
            <Router>
                <div>
                    <nav>
                    <ul style={{listStyleType:'none', display: 'flex'}}>
                        <li>
                            <Link to="/"><img src={logo} alt=""/></Link>
                        </li>
                        <li>
                            <Link to="/" className="navLink"><input style={{fontSize:'15px', padding:'15px', border:'none', borderRadius:'5px'}} type="text" placeholder="Search your destination"></input></Link>
                        </li>
                        <li>
                            <Link to="/news" className="navLink">News</Link>
                        </li>
                        <li>
                            <Link to="/destination" className="navLink">Destination</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="navLink">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="navLink">Contact</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </Router>
        </div>
    );
}