import { useState } from 'react';

// a set of interface that allows you to set a pair of key values
// presenting form fields and their values

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // <= DOM element that triggers the event
    console.log(e.currentTarget); // <= DOM element that event listener is listening on

    const formData = new formData(e.currentTarget); // formData logic that contains array of arrays
    //console.log(formData);
    //const email = formData.get('email');
    //console.log([...formData.entries()]);


    // if you want to connect with the server
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value +1);
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
