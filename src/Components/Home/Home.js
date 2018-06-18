import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import Navbar from "../Navbar/Navbar";
import Size from "../Size/Size";
import Crust from "../Crust/Crust";
import Sauce from "../Sauce/Sauce";
import Cheese from "../Cheese/Cheese";
import Meats from "../Meats/Meats";
import Veggies from "../Veggies/Veggies";
import Order from "../Order/Order";
import Header from "../Header/Header";
import Pizza from "../Pizza/Pizza";
class Home extends Component {
  constructor(props) {
    super(props);
    this.handelChecked = this.handelChecked.bind(this);
    this.handelChanged = this.handelChanged.bind(this);
    this.state = {
        size: "",
      crust: "",
      sauce: "",
      cheese:"",
      quantity:"",
      amount:"",
      meats: [],
      veggies:[]
    };
  }

  handelChanged(key, value) {
    const newItem = {};
    newItem[key]= value;
    this.setState(newItem);
    console.log(newItem);

    var selecteditems = this.state;
    var JSONArray = JSON.stringify(selecteditems)

    localStorage.setItem("Storage_Items",JSONArray);
    console.log(JSON.parse(localStorage["Storage_Items"]))
  }

  handelChecked(key,meat, e) {
    const currentMeats = this.state[key];
    let newMeats;
    //   this.setState ({meats : meat})

    if (e.target.checked == true) {
      newMeats = [...currentMeats, meat]; // copy & add
    } else {
      newMeats = currentMeats.filter(item => item != meat);
    }
    const newItem = {};
    newItem[key]= newMeats;
    this.setState(newItem);

    var selecteditems = this.state;
    var JSONArray = JSON.stringify(selecteditems)

    localStorage.setItem("Storage_Items",JSONArray);
    console.log(JSON.parse(localStorage["Storage_Items"]))

  }


  sendLocalStorage(){
      var selecteditems = this.state
      var JSONArray = JSON.stringify(selecteditems)

      localStorage.setItem("Storage_Items",JSONArray);
      console.log(JSON.parse(localStorage["Storage_Items"]))
  }



  render() {
   
    return (
      <div>
        <Header />
        <Navbar />
        <Pizza  meats={this.state.meats} />
        <Size  
        showSize={this.state.size} 
        onSizeChange={this.handelChanged}/>

        <Crust  showCrust={this.state.crust} onCrustChange={this.handelChanged} />
        <Sauce  showSauce={this.state.sauce} showAmount={this.state.amount}showQuantity={this.state.quantity} onSauceChange={this.handelChanged} />
        <Cheese showCheese={this.state.cheese} showQuantity={this.state.quantity} onCheeseChange={this.handelChanged}/>
        <Meats  meats={this.state.meats} onMeatChange={this.handelChecked} />
        <Veggies id="veggies" veggies={this.state.veggies} onMeatChange={this.handelChecked} />
        <Order allData={this.state} />
      </div>
    );
  }
}

export default Home;
