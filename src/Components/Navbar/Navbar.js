import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                <ul >
                    <li><a href="#">Size</a></li>
                    <li><a href="#">Crust</a></li>
                    <li><a href="#">Cheeses</a></li>
                    <li><a href="#">Meats</a></li>
                    <li><a href="#">Veggies</a></li>
                </ul>
               </div> 
            </div>
        );
    }
}

export default Navbar;