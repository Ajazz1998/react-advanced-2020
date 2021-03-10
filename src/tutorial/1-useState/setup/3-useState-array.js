import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) =>{
    const newPeople = people.filter((people) => people.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      {people.map((p) => {
        const {id, name} = p;

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick = {() => removeItem(id)}>removeitem</button>
          </div>
        )

      })}

      <button type='button' className='btn' onClick={() => setPeople([])}>clear items</button>
    </>
  );
};

export default UseStateArray;
