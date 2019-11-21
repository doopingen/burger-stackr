import React from 'react';
import './App.css';
import Ingredients from './components/IngredientList';
import Burger from './components/Burger';

class BurgerStacker extends React.Component {

  state = {
    ingredients: [
      {name: 'Kaiser Bun', color: 'saddlebrown', height: '50px'},
      {name: 'Sesame Bun', color: 'sandybrown', height: '50px'},
      {name: 'Gluten Free Bun', color: 'peru', height: '50px'},
      {name: 'Lettuce Wrap', color: 'olivedrab', height: '40px'},
      {name: 'Beef Patty', color: '#3F250B', height: '30px'},
      {name: 'Soy Patty', color: '#3F250B', height: '25px'},
      {name: 'Black Bean Patty', color: '#3F250B', height: '25px'},
      {name: 'Chicken Patty', color: 'burlywood', height: '25px'},
      {name: 'Lettuce', color: 'lawngreen', height: '15px'},
      {name: 'Tomato', color: 'tomato', height: '15px'},
      {name: 'Bacon', color: 'maroon', height: '15px'},
      {name: 'Onion', color: 'lightyellow', height: '15px'},
      {name: 'Cheese', color: 'orange', height: '15px'}
    ],
    burger: []
  }

  addToBurger = (e) => {
    var newBurger = [...this.state.burger];
    newBurger.unshift(this.state.ingredients[e.target.id]);
    this.setState({ burger: newBurger });
  }

  clearBurger = () => {
    this.setState({ burger: [] });
  }

  render() {

    return (
      <div className="parent">
        <div className="ingredient-area">
            <Ingredients ingr={this.state.ingredients} add={this.addToBurger} clear={this.clearBurger}/>
        </div>
        <div className="burger-area">
          <Burger burger={this.state.burger} />
        </div>
      </div>
    )
  }
}

export default BurgerStacker;
