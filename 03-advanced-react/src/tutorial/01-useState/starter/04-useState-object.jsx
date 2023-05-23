import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Joshua',
    age: 24,
    hobby: 'coding'
  });
  

  const displayPerson = () =>{
     setPerson({name: 'Dan', age: 28, hobby: 'coding as an ardent frontend engineer/developer'}) 
  };
  return  <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>Enjoys : {person.hobby}</h3>
    <button className='btn' onClick={displayPerson}>
      Show Dan
    </button>
  </>
};

export default UseStateObject;
