import React, { useState } from 'react'
import Downshift from 'downshift';
import IngredientList from './IngredientList';
import RecipeList from './RecipeList';

function IngredientSelector () {
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [bestRecipes, setBestRecipes] = useState([])
  const [valueInput, setValueInput] = useState("")

  const inputOnChange = (event) => {
    if (event.target.value.length < 3) { return }
    fetchIngredients(event.target.value)
  }
  const downshiftOnChange = (selectedIngredient, {clearSelection}) => {
    if (selectedIngredient) {
      //alert(`Your about to choose ${selectedIngredient.name} with id ${selectedIngredient.id} `);
      setSelectedIngredients([...selectedIngredients, selectedIngredient]);
      clearSelection()
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
      selectedIngredients.filter((item) => item.id !== id)
    )
  };

  const findBestRecipes = async () => {
    const recipesURL = `http://localhost:3000/recipes?`;
    const params = selectedIngredients.map( 
      (ingredient) => (`ingredients[]=${ingredient.id}`)
    ).join("&");
    //alert(`Querying ${recipesURL} with params ${params} `);
    const response = await fetch(recipesURL+params)
    const data = await response.json();
    setBestRecipes(data);
  }

  return (
    <div className="container-fluid text-sm-center p-5 bg-light">
      <h3 className="h3 display-3">Your ingredients</h3> <br />
      <IngredientList ingredients={selectedIngredients} onDelete={handleOnDelete} />
      <Downshift onChange={downshiftOnChange} itemToString={item => (item ? item.name : '')}>
      {({ selectedItem, getInputProps, getItemProps, highlightedIndex, isOpen, inputValue, getLabelProps, clearSelection }) => (
      <div style={{textAlign:'center'}}>
        <label style={{ margin: '1rem', display: 'block', fontSize: 20 }} {...getLabelProps()}>Add a new ingredient:</label>
        <input {...getInputProps({
          placeholder: "Search ingredients",
          onChange: inputOnChange,
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
      <button className={`btn btn-primary`} style={{margin: 20}} onClick={findBestRecipes}>
        Find the best recipes for you!
      </button> <br />
      <RecipeList recipes={bestRecipes} />
    </div>
  )
}

export default IngredientSelector;