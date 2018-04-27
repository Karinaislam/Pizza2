import React, { Component } from 'react';
import "./Size.css";
class Size extends Component {
   constructor(props) {
       super(props);
       this.state = {
       }
   }
   
   handleClick(size){
       this.setState ({size : size});
      console.log('clicked', this.state.size);
   } 


    render() {
        return (
            <div>
                <div>
                    <div onClick={() => this.handleClick(10)} className="pizza10">10"</div>
                    <div onClick={() => this.handleClick(12)} className="pizza12">12"</div>
                    <div onClick={() => this.handleClick(14)} className="pizza14">14"</div>
                    <div onClick={() => this.handleClick(16)} className="pizza16">16"</div>
                </div>
                <p>Selected Size: {this.state.size}</p>
            </div>
        );
    }
}

export default Size;