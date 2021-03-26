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

  return (
    <>
        <h2>fetch data</h2>
        <ul className="users">
            {
              users.map((users) => {
                const{id, login, avatar_url, html_url} = users;

                return (
                  <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <div>
                      <h4>{login}</h4>
                      <a href={html_url}>Profile</a>
                    </div>
                  </li>
                )
              })
            }
        </ul>

  </>);
};

export default UseEffectFetchData;
