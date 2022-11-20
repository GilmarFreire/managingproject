import React from "react";
import { Link } from "react-router-dom";


export function NavRoutes() {
    return(
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/company">Company</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/newproject">New Project</Link>                
            </div>
        </div>
    )
}
