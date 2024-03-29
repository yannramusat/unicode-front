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

type UserListItemProps = {
  id: number,
  username: string,
  mail: string,
  onDelete: Function
}

function UserListItem({ id, username, mail, onDelete }: UserListItemProps) {
  const handleOnClick = () => {
    onDelete(id);
  };

  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h4 className="text-capitalize">
          {username}
        </h4>
        <small className="text-muted mx-1">{mail}</small>
        <button className={`btn btn-secondary`} onClick={handleOnClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
          Delete
        </button>
      </div>
    </li>);
}

UserListItem.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserListItem;