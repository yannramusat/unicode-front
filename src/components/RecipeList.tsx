import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

type RecipeType = {
  id: number,
  title: string,
  instructions: string,
  category: string,
  ingredient_count: number
}

type RecipeListProps = {
  recipes: RecipeType[]
}

function RecipeList({ recipes }: RecipeListProps) {
  return (
  <ul className="list-group d-inline-block w-50">
    {recipes.map((recipe) => (
      <RecipeListItem
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        instructions={recipe.instructions}
        category={recipe.category}
        ingredient_count={recipe.ingredient_count}
      />))}
  </ul>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({ 
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    ingredient_count: PropTypes.string.isRequired,
  })).isRequired
};

export default RecipeList;