import { useState, useEffect } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHi = () =>{
    console.log('Hi there');
    
  };

  sayHi();

  useEffect(() =>{
    console.log('Hi from Dan')
  }, {});

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        touch me
      </button>
    </div>
  );
};
export default CodeExample;
