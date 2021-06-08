import React from 'react';

const SideBar = () => {
    if (window.location.pathname == '/')
        return <div></div>
        
    return (<div>
        <div style={{width: 150,top: 70}} className="ui visible inverted left vertical sidebar menu">
          <a className="item">
            <i className="search icon" ></i>
            Search
          </a>
          <a className="item">
            <i className="home icon"  ></i>
            Home
          </a>
          <a className="item" >
            <i className="chart bar outline icon"></i>
            Incidents
          </a>
          <a className="item">
            <i className="file icon"></i>
            Documents
          </a>
          <a className="item" >
            <i className="phone icon"  ></i>
            Calls
          </a>
          <a className="item">
            <i className="briefcase icon"  ></i>
            Torba
          </a>
          <a className="item">
            <i className="users icon" ></i>
            Dva coveka
          </a>
      
          <div style={{marginTop: 125}}>
            <a className="item">
              <i className="wrench icon" ></i>
              Settings
            </a>
            <a className="item" >
              <i className="bell icon" ></i>
              Alerts
            </a>
            <a className="item">
              <i className="logout icon" ></i>
              Log Out
            </a>
          </div>
          
        </div>
      </div>);
}

export default SideBar;