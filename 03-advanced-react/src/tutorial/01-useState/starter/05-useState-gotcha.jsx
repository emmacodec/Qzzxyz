import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  // whe you click the enlarge button any number of times at the space of
  // 3 seconds you get a feedback showing the exact number of times you
  // clicked the button
  const handleClick = () =>{
    setTimeout (() =>{
      setValue((currentState) =>{
        return currentState + 1;
      })
    }, 3000);
    
  };
  return <div>
    <h1>{value}</h1>
    <button type="button" className="btn" onClick={handleClick}>
      Enlarge
    </button>
  </div>
};

export default UseStateGotcha;
