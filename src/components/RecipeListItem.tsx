import React from 'react';
import PropTypes from 'prop-types';

type RecipeListItemProps = {
  id: number,
  title: string,
  instructions: string,
}

function RecipeListItem({ id, title, instructions }: RecipeListItemProps) {
  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h4 className="text-capitalize">
          {title}
        </h4>
      </div>
    </li>);
}

RecipeListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired
};

export default RecipeListItem;