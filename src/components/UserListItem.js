import React from 'react';
import PropTypes from 'prop-types';

const statusButtonClassMapping = {
  pending: 'update-button',
  done: 'delete-button',
};

const statusButtonTextMapping = {
  pending: 'Done',
  done: 'Delete',
};

function UserListItem({ id, username, mail, onDelete }) {
  const handleOnClick = () => {
    onDelete(id);
  };

  return (
    <li className="user-list-item">
      <span className={`user-list-item-text`}>{username}</span>
      <span className={`user-list-item-action`}>
        <button className={`delete-button`} onClick={handleOnClick}>
          {`Delete`}
        </button>
      </span>
    </li>);
}

UserListItem.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserListItem;