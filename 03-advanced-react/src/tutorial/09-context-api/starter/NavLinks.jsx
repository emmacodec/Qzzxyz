import UserContainer from "./userContainer"

const NavLinks = () => {
  return ( 
  <div className="nav-container">
    <ul className="nav-links">
        <li>
            <a href="">HOME</a>
        </li>
        <li>
            <a href="">ABOUT</a>
        </li>
    </ul>
    <UserContainer />
  </div>
  );
};

export default NavLinks
