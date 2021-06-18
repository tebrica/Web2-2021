import React from "react";
import { useSelector } from "react-redux";
import { loggedUserSelector } from "../store/selectors/AuthSelector";

const Header = () => {

  const loggedInUser = useSelector(loggedUserSelector);

  const userInfoRendered = () => {
    if (loggedInUser === undefined || loggedInUser === null) {
      return <div></div>
    }
    else {
      const relativePath = `../../public/photos/${loggedInUser.NazivProfilneSlike}`
      return (
        <div className="ui horizontal list" style={{backgroundColor: "lightgreen", right: 25, position: "fixed", top: 5, width: 200, height: 50}}>
          <div className="item">
            <img className="ui mini circular image" src={relativePath} alt="NOP" style={{marginLeft: 15, marginTop: 8}}/>
            <div className="content" style={{marginLeft: 15}}>
              <div className="ui sub header">{loggedInUser.Username}</div>
              {loggedInUser.VrsteKorisnika}
            </div>
          </div>
        </div>)
    }
  }

  return (
    <div style={{width: '100%', backgroundColor: 'green',height: 60, position: "fixed", top: 0}}>
      {userInfoRendered()}
    </div>
  );
};

export default Header;
