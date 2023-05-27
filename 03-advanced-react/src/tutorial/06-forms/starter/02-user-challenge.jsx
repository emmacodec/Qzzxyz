import { useState } from "react";
import {data} from '../../../data';

const UserChallenge = () => {

const [name, setName] = useState('');
const [users, setUsers] = useState(data);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!name) return;
  // don't use for serious project
  const scamId = Date.now();
  //console.log(scamId);
  const newUser = {id: scamId,name}
  // ...user copy's all value from users
  const updatedUser = [...users,newUser]
   setUsers(updatedUser);
  //console.log('form-submitted');
  setName('');
}

const removeUser = (id) => {
  const updatedUser = users.filter((person) => person.id !== id);
   setUsers(updatedUser);
}
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label 
          htmlFor='name' 
          className='form-label'>
            name
          </label>
          <input 
          type='text' 
          className='form-input' 
          id='name' 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h2>users</h2>
      {users.map((user)=>{
      return (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button onClick={() => removeUser(user.id)} className="btn">Remove</button>
        </div>
      )
      })}
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
