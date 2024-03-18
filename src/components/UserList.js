import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from './UserListItem';

function UserList({ users, onDelete }) {
  return (
  <ul className="list-group d-inline-block w-25">
    {users.map((user) => (
      <UserListItem
        key={user.id}
        id={user.id}
        username={user.username}
        mail={user.mail}
        onDelete={onDelete}
      />))}
  </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserList;