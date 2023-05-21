import React,{ useState } from "react";

const UseStateBasics = () => {

  const [count, setCount] = useState(0);

  const handlClick = () =>{
    setCount(count + 1);
  }

  return <div>
    <h4>You clicked me {count} times</h4>
    <button type="button" className="btn" onClick={handlClick}>
      Hit 
    </button>
  </div>
};

export default UseStateBasics;
