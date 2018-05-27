import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                <ul >
                    <li><a href="/#size">Size</a></li>
                    <li><a href="/#crust">Crust</a></li>
                    <li><a href="/#sauce">Sauce</a></li>
                    <li><a href="/#cheeses">Cheeses</a></li>
                    <li><a href="/#meats">Meats</a></li>
                    <li><a href="/#veggies">Veggies</a></li>
                </ul>
               </div> 
            </div>
        );
    }
}

export default Navbar;