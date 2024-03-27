import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

type RecipeType = {
  id: number,
  title: string,
  instructions: string,
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
      />))}
  </ul>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired
};

export default RecipeList;