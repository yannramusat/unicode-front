import React, { useState, useEffect } from 'react'
import Downshift from 'downshift';
import IngredientList from './IngredientList';

function IngredientSelector () {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])

  const inputOnChange = (event) => {
    if (event.target.value.length < 3) { return }
    fetchIngredients(event.target.value)
  }

  const downshiftOnChange = (selectedIngredient) => {
    if (selectedIngredient) {
      //alert(`Your about to choose ${selectedIngredient.name} with id ${selectedIngredient.id} `);
      setSelectedIngredients([...selectedIngredients, selectedIngredient]);
    } else {
      setIngredients([]);
    }
  }

  const fetchIngredients = async (val) => {
    const ingredientsURL = `http://localhost:3000/ingredients?pattern=${val}`;
    const response = await fetch(ingredientsURL)
    const data = await response.json();
    setIngredients(data)
  }

  const handleOnDelete = async (id) => {
    setSelectedIngredients(
      selectedIngredients.filter((item) => item.id != id)
    )
  };

  return (
    <div className="container-fluid text-sm-center p-5 bg-light">
      <h2 className="h3 display-3">Your ingredients</h2>
      <IngredientList ingredients={selectedIngredients} onDelete={handleOnDelete} />
      <Downshift onChange={downshiftOnChange} itemToString={item => (item ? item.name : '')}>
      {({ selectedItem, getInputProps, getItemProps, highlightedIndex, isOpen, inputValue, getLabelProps }) => (
      <div style={{textAlign:'center'}}>
        <label style={{ margin: '1rem', display: 'block' }} {...getLabelProps()}>Add a new ingredient:</label>
        <input {...getInputProps({
          placeholder: "Search ingredients",
          onChange: inputOnChange
        })} />
        {isOpen ? (
        <div className="downshift-dropdown"> {
          ingredients
            .filter(item => !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase()))
            .slice(0, 10)
            .map((item, index) => (
            <div
              className="dropdown-item"
              {...getItemProps({ key: index, index, item })}
              style={{
              backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
              fontWeight: selectedItem === item ? 'bold' : 'normal',
              }}>
              {item.name}
            </div>
            ))
          }
        </div>
        ) : null}
      </div>
      )}
    </Downshift>
    </div>
  )
}

export default IngredientSelector;