import React from 'react';

class Ingredients extends React.Component {

    render() {
        let mappedIngredients = this.props.ingr.map((ingr, id )=> {
            return (
                <li key={id}>
                    <span className="ingredient-name">{ingr.name}</span>
                    <button id={id} name={ingr.name} onClick={this.props.add}>Add</button>
                </li>
            )
        })
        return(
            <>
                <ul className="no-style">
                    <h2>Ingredients</h2>
                    {mappedIngredients}
                </ul>
                <div className="clear">
                    <button className="burger-clear-btn" onClick={this.props.clear}>New Burger</button>
                </div>
            </>
        )
    }
}


export default Ingredients;
