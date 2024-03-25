import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from './UserListItem';

type UserType = {
  id: number,
  username: string,
  mail: string,
}

type UserListProps = {
  users: UserType[]
  onDelete: Function
}

function UserList({ users, onDelete }: UserListProps) {
  return (
  <ul className="list-group d-inline-block w-50">
    {users.map((user) => (
      <UserListItem
        key={user.id}
        id={user.id}
        username={user.username}
        mail={user.mail}
        onDelete={onDelete as Function}
      />))}
  </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserList;