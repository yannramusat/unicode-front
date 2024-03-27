import React from 'react';
import PropTypes from 'prop-types';

type IngredientListItemProps = {
  id: number,
  name: string,
  onDelete: Function
}

function IngredientListItem({ id, name, onDelete }: IngredientListItemProps) {
  const handleOnClick = () => {
    onDelete(id);
  };

  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="text-capitalize" style={{marginBottom : 0}}>
          {name}
        </h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={handleOnClick} ></button>
      </div>
    </li>);
}

IngredientListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default IngredientListItem;