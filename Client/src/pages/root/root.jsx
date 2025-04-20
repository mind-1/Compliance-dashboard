import {Outlet} from "react-router-dom"
import { Link } from "react-router-dom"
import { NavBarButtons } from "/components/desktop/nav-bar-buttons.jsx";
import "./root.css";

export default function Root() {
    return(
        <div className="appFrame">
           
            <nav id="sidebar">
                <h1>Compliant</h1>
                <ul>
                    <li>
                        <ul>
                            <li>Overview</li>
                            <li><Link to={`home`}>Home</Link></li>
                            <li><Link to={`controls`}>Controls</Link></li>
                            <li>
                                <Link to={`mentors`}>Mentors</Link>
                            </li> 
                        </ul>
                        
                    </li>
                    <li>
                        <ul>
                            <li>Document</li>
                            <li><Link to={`documents`}>Documents</Link></li>
                            <li><Link to={`policies`}>Policies</Link></li>  
                        </ul>
                       
                    </li>
                    <li>
                        <ul>
                        <li>Manage </li>
                        <li><Link to={`people`}>People</Link></li>
                        </ul>          
                    </li>
                    <li>
                        <NavBarButtons/>
                    </li>
                </ul>
            </nav>
            <div id="AppCanvas">
                <Outlet />
            </div>
        </div>
    )
}