import React, { Component } from "react";
import "./Pizza.css";
import topping_Beef from '../image/topping_Beef.png';
import topping_Chicken from '../image/topping_Chicken.png';
import topping_Ham from '../image/topping_Ham.png';
import topping_ItalianSausage from '../image/topping_ItalianSausage.png';
import topping_Meatball from '../image/topping_Meatball.png';
import topping_Pepperoni from '../image/topping_Pepperoni.png';

import topping_GreenBellPepper from '../image/topping_GreenBellPepper.png';
import topping_Mushroom from '../image/topping_Mushroom.png';
import topping_Olives_black from '../image/topping_Olives_black.png';
import topping_Onion_red from '../image/topping_Onion_red.png';

const imageSources = {
        Beef: topping_Beef,
        Chicken: topping_Chicken,
        Ham:topping_Ham,
        ItalianSausage:topping_ItalianSausage,
        Meatball:topping_Meatball,
        Pepperoni:topping_Pepperoni,
        BellPepper : topping_GreenBellPepper,
        Mushrooms :topping_Mushroom,
        Olives :topping_Olives_black,
        Onions:topping_Onion_red
    }

class Pizza extends Component {

  render() {
      const meats = this.props.meats;
      
    return (
      <div>
        <div className="mainPizza">
            {meats.map(meat => 
            <img className={'toppings toppings_'+ meat} src={imageSources[meat]}/>)}







            
         
            </div>
         </div>

    );
}
}

export default Pizza;
