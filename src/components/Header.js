import React from "react";
import { useSelector } from "react-redux";
import { loggedUserSelector } from "../store/selectors/AuthSelector";

const Header = () => {

  const loggedInUser = useSelector(loggedUserSelector);

  return (
    <div style={{width: '100%', backgroundColor: 'green',height: 60, position: "fixed", top: 0}}>
      <h4 style={{marginTop: 20, marginLeft: 30}}> Welcome {loggedInUser.Username} </h4>
    </div>
  );
};

export default Header;
