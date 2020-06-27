import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeMenu(props){




    return(
        <div>

            <img 
            style={{width:300,
                    height:300}}
                src='https://desenio.com/bilder/artiklar/zoom/13272_1.jpg'
            />
            <nav>
                <ul>
                    <ul>

                    <li>
                        <Link to="/OrderPage">Order</Link>
                    </li>

                    <li>
                        <Link to="/ConfirmationPage">Please Confirm your Order!</Link>
                    </li>


                    </ul>
                </ul>
            </nav>
        </div>
    )
}