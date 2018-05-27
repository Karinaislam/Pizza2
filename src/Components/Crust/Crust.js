import React, { Component } from 'react';
import './Crust.css';
class Crust extends Component {


    render() {
       
        return (
            <div>
                <div>
                    <p id="crust" className="crust_header">Crust</p>
                    <form>

                                                                              
                    <label> <input type="radio" value="pan" name="crust" onChange = {() => {this.props.onCrustChange('crust', "Pan Pizza")} } />Pan Pizza</label>
                    <label><input type="radio" value="handTossed" name="crust"onChange = {() =>{this.props.onCrustChange('crust', "Hand Tossed")} } />Hand Tossed</label>
                    <label><input type="radio" value="thin" name="crust" onChange = {() =>{this.props.onCrustChange('crust','Thin N Crispy')}} />Thin N Crispy</label>
                    <label>
                        <input type="radio" value="stuffed" name="crust" onChange = {() =>{this.props.onCrustChange('crust','Stuffed crust')}}/>Stuffed crust</label>
                </form>
                    <p>Selected Crust: {this.props.showCrust}</p>
                </div>
            </div>
        );
    }
}

export default Crust;

