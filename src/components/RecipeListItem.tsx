import React from 'react';
import PropTypes from 'prop-types';

type RecipeListItemProps = {
  id: number,
  title: string,
  instructions: string,
  category: string,
  ingredient_count: number
}

function RecipeListItem({ id, title, instructions, category, ingredient_count }: RecipeListItemProps) {
  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="text-capitalize" style={{marginBottom : 0}}>
          {title}
        </h5>
        <span className="badge bg-primary badge-pill">{ingredient_count}</span>
      </div>
    </li>
  );
}

RecipeListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ingredient_count: PropTypes.number.isRequired
};

export default RecipeListItem;