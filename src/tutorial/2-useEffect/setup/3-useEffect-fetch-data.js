import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
      const responce = await fetch(url);
      const users = await responce.json();
      setUsers(users)
  }

  useEffect(() => {
    getUsers();
  }, [])

  return <>
        <h2>fetch data</h2>
  </>;
};

export default UseEffectFetchData;
