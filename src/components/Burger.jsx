import React from 'react';

class Burger extends React.Component {
    render() {
      let burgerDisplay = this.props.burger.map(topping => <div style={{backgroundColor:topping.color, height:topping.height}}></div> )
      return (
        <div>
            <div>
              {burgerDisplay}
            </div>
        </div>
      )
    }
}

export default Burger;

