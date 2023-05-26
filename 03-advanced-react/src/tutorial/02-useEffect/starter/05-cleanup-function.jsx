import {  useState } from "react";
import { useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return ( 
  <div>
     <button 
     className="btn"
      onClick={()=>setToggle(!toggle)}>
        toggle component
        </button>
        {toggle && <RandomComponent />}
  </div>
  );
};


const RandomComponent = () =>{
  useEffect(() =>{
    console.log('wawww, this is awesome');
    const danFunc = () =>{
      // some logic
    }
    window.addEventListener('scroll', danFunc);
    return () => window.removeEventListener('scroll',danFunc);
   const Dan = setInterval(()=>{
      console.log('hala from interval');
    }, 1000);
    return () =>{
      clearInterval(Dan)
      console.log('cleanup')
    }
    
  }, [])
  return <h1>hello universe</h1>
}

export default CleanupFunction;
