import React, { Component } from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

class OrderSummary extends Component {
    getItem(){
        return JSON.parse(localStorage["Storage_Items"])
     }
    render() {
        const selection = this.getItem();
        return (
            <div>
                <Header />
                <Navbar />
                <div>
                {Object.keys(selection).map((key, i) =>
                        <div>
                            <p><span style={{fontWeight:'bold'}}>{key}: </span>{selection[key]}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default OrderSummary;