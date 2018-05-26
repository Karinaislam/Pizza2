import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div>
                <p className="header">Build Your Own Pizza <i class="material-icons cart_icon">
shopping_cart ()
</i></p>
            </div>
        );
    }
}

export default Header;