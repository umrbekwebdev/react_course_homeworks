import React, { Component } from 'react'
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { foods } from "./taomlar";


export default class App extends Component {

  state={
    foods:foods,
    searchInputText:""
  }

  onssearchange =(event)=>{
    this.setState({
      searchInputText: event.target.value
    })
  }

  render() {
    const filteredFoods = this.state.foods.filter(food => {
      return food.foodName.toLowerCase().includes(this.state.searchInputText.toLowerCase())
    })

    return (
      <div className="container">
        <SearchBox searchange = {this.onssearchange}/>
        <CardList foods={filteredFoods} />
      </div>
    )
  }
}


