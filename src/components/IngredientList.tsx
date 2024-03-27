import React from 'react';
import PropTypes from 'prop-types';
import IngredientListItem from './IngredientListItem';

type IngredientType = {
  id: number,
  name: string,
}

type IngredientListProps = {
  ingredients: IngredientType[]
  onDelete: Function
}

function IngredientList({ ingredients, onDelete }: IngredientListProps) {
  return (
  <ul className="list-group d-inline-block w-50">
    {ingredients.map((ingredient) => (
      <IngredientListItem
        key={ingredient.id}
        id={ingredient.id}
        name={ingredient.name}
        onDelete={onDelete as Function}
      />))}
  </ul>
  );
}

IngredientList.propTypes = {
  ingredient: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IngredientList;