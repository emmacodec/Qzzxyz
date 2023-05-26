import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // connect to db or API
    setUser({name: 'Gracie restaurant'})
  };
  const logout = () => {
    setUser(null);
  }
  return ( 
  <div>
     {user? (
     <div>
      <h4>Hi there {user.name}</h4>
      <button 
      className="btn" 
      onClick={logout}>
        logout
        </button>
     </div>
    ) : (
      <div>
      <h4>please login</h4>
      <button 
      className="btn" 
      onClick={login}>
        login
        </button>
     </div> 
    )}
  </div>
  );
};

export default UserChallenge;
