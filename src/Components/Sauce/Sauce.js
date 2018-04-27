import React, { Component } from 'react';
import './Sauce.css';
class Sauce extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    handelChanged(sauce){
        this.setState({sauce : sauce});
    }  
    
    handelChangedAmount (amaount){
        this.setState({amaount : amaount});
    }
    
    render() {
        return (
            <div>
                 <p className="sauce_header">Sauce</p>
                 <form>
                    <label><input type="radio" value="option1" name="Sauce" onChange = {()=> this.handelChanged('Classic Marinara')} />Classic Marinara</label>
                    <label><input type="radio" value="option2" name="Sauce" onChange = {()=> this.handelChanged('Creamy Garlic')} />Creamy Garlic</label>
                    <label><input type="radio" value="option3" name="Sauce" onChange = {()=> this.handelChanged('Barbeque')} />Barbeque</label>
                    <label><input type="radio" value="option4" name="Sauce" onChange = {()=> this.handelChanged('Buffalo')} />Buffalo</label>
                </form>

                <form>
                    <label><input type="radio" value="option1" name="Amaount" onChange ={()=>{this.handelChangedAmount('Extra')}} /> Extra</label>
                    <label><input type="radio" value="option2" name="Amaount" onChange ={()=>{this.handelChangedAmount('Regular')}} />Regular</label>
                    <label><input type="radio" value="option3" name="Amaount" onChange ={()=>{this.handelChangedAmount('Light')}} />Light</label>
                    <label><input type="radio" value="option4" name="Amaount" onChange ={()=>{this.handelChangedAmount('None')}}/>None</label>
                </form>

                <p>Selected Sauce:{this.state.sauce}</p>
                <p>Selected Amaount:{this.state.amaount}</p>
            </div>
        );
    }
}

export default Sauce;