import React, { useState, useEffect } from 'react';
import UserList from './UserList';

function Users() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState();

  const loadData = async () => {
    const response = await fetch('http://localhost:3000/api/v1/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    loadData();
  }, []);

/*   const handleOnSubmit = async (todo) => {
    setErrors();
    await axios.post('/api/v1/todos', todo, { headers: headers() });
    await loadData();
  };

  const handleOnError = async (nextErrors) => {
    setErrors(nextErrors);
  };

  const handleOnDone = async (id) => {
    await axios.patch(`/api/v1/todos/${id}`, { status: 'done' }, { headers: headers() });
    await loadData();
  }; */

  const handleOnDelete = async (id) => {
    await fetch(`http://localhost:3000/api/v1/users/${id}`, {
        method: 'DELETE' 
    });
    await loadData();
  };

  return (
    <>
      {/* <UserForm onSubmit={handleOnSubmit} onError={handleOnError} /> */}
      {/* <ErrorList errors={errors} /> */}
      <div className="mt-5 px-3 py-4">
        <h1 className="h1 display-1">Users</h1>
        <UserList users={users} onDelete={handleOnDelete} />
      </div>
    </>
  );
}

export default Users;