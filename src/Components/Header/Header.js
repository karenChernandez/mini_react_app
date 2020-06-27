import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props){ 



    return(
        <div>
            <h1>Welcome PAGE!!!</h1>
            <nav>
                <ul>
                    <li>
                    <Link to='/HomeMenu'>HomeMenu</Link>
                    </li>
        
                        
                    <li>
                        <Link to="/OrderPage">Orders</Link>
                    </li>

                
                </ul>
            </nav>
        </div>
    )
}
