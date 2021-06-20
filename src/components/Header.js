import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pictureMapper from "../constants/PictureHandler";
import { loggedUserSelector } from "../store/selectors/AuthSelector";

const Header = () => {

  const loggedInUser = useSelector(loggedUserSelector);

  const userInfoRendered = () => {
    if (loggedInUser === undefined || loggedInUser === null) {
      return <div></div>
    }
    else {
      //const relativePath = `../../public/photos/${loggedInUser.NazivProfilneSlike}`
      return (
        <div className="ui horizontal list" style={{backgroundColor: "lightgreen", right: 25, position: "fixed", top: 5, width: 260, height: 50}}>
          <div className="item">
            <img className="ui mini circular image" src={pictureMapper(loggedInUser.NazivProfilneSlike)} alt="Nema slike" style={{marginLeft: 10, height: 44, width: 44}}/>
            <div className="content" style={{marginLeft: 15}}>
              <div className="ui sub header">{loggedInUser.Username}</div>
              <p style={{marginTop: 3}}> {loggedInUser.VrsteKorisnika} </p> 
            </div>
          </div>
        </div>)
    }
  }

  const adminPanel = () => {
    if (loggedInUser === undefined || loggedInUser === null || loggedInUser.VrsteKorisnika !== 'ADMINISTRATOR') {
      return <div></div>
    }
    else {
      return (<Link to="/admin" className="ui active button" style={{marginLeft: 810, marginTop: 12}}>
        <i className="user icon"></i>
        Admin
      </Link>)
    }
  }

  return (
    <div style={{width: '100%', backgroundColor: 'green',height: 60, position: "fixed", top: 0}}>
      {adminPanel()}
      {userInfoRendered()}
    </div>
  );
};

export default Header;
