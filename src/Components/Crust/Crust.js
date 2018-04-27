import React, { Component } from 'react';
import './Crust.css';
class Crust extends Component {
 constructor(props) {
     super(props);
     this.state={}
 }
 


    handelChanged(crust){
        this.setState({ crust: crust });
    }

    render() {
        return (
            <div>
                <div>
                    <p className="crust_header">Crust</p>
                    <form>

                    
                    <label> <input type="radio" value="pan" name="Crust" onChange = {() => {this.handelChanged('Pan Pizza')} } />Pan Pizza</label>
                    <label><input type="radio" value="handTossed" name="Crust"onChange = {() =>{this.handelChanged('Hand Tossed')} } />Hand Tossed</label>
                    <label><input type="radio" value="thin" name="Crust" onChange = {() =>{this.handelChanged('Thin N Crispy')} } />Thin N Crispy</label>
                    <label><input type="radio" value="stuffed" name="Crust" onChange = {() =>{this.handelChanged('Stuffed crust')}}   />Stuffed crust</label>
                </form>
                    <p>Selected Crust: {this.state.crust}</p>
                </div>
            </div>
        );
    }
}

export default Crust;

