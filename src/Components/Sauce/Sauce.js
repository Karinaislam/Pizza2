import React, { Component } from 'react';
import './Sauce.css';
class Sauce extends Component {
    
    
 
    
    
    render() {
        console.log (this.props.showSauce)
        return (
            <div>
                 <p className="sauce_header">Sauce</p>
                 <form>
                    <label><input type="radio" value="Classic Marinara" name="sauce" onChange = {(value)=> {this.props.onSauceChange('sauce','Classic Marinara')} }/>Classic Marinara</label>
                    <label><input type="radio" value="Creamy Garlic" name="sauce" onChange = {(value)=> {this.props.onSauceChange('sauce','Creamy Garlic')} }/>Creamy Garlic</label>
                    <label><input type="radio" value="Barbeque" name="sauce" onChange = {(value)=> {this.props.onSauceChange('sauce','Barbeque')} }/>Barbeque</label>
                    <label><input type="radio" value="Buffalo" name="sauce" onChange = {(value)=> {this.props.onSauceChange('sauce','Buffalo')} }/>Buffalo</label>
                </form>

                <form>
                    <label><input type="radio" value="option1" name="Amaount" onChange ={(value)=>{this.props.onSauceChange('amount','Extra')}} /> Extra</label>
                    <label><input type="radio" value="option2" name="Amaount" onChange ={(value)=>{this.props.onSauceChange('amount','Regular')}} />Regular</label>
                    <label><input type="radio" value="option3" name="Amaount" onChange ={(value)=>{this.props.onSauceChange('amount','Light')}} />Light</label>
                    <label><input type="radio" value="option4" name="Amaount" onChange ={(value)=>{this.props.onSauceChange('amount','None')}}/>None</label>
                </form>

                <p>Selected Sauce:{this.props.showSauce}</p>
                 <p>Selected Amaount:{this.props.showAmount}</p>
            </div>
        );
    }
}

export default Sauce;