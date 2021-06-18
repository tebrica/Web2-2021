import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { LogoutUser } from '../store/actions';
import { tokenSelector } from '../store/selectors/AuthSelector';
import { Link } from 'react-router-dom'

const SideBar = () => {

  const { push } = useHistory();
  const dispatch = useDispatch();
  const hideShowSidebar = useSelector(tokenSelector)

  const onLogoutClick = () => {
    dispatch(LogoutUser());
    push('/');
  }

  const conditionalReturn = () => {
    if (hideShowSidebar === '' || hideShowSidebar === null || hideShowSidebar === undefined) {
      return <div></div>
    }
    else {
      return (<div id="sidebar">
      <div style={{width: 150,top: 60, position: 'fixed'}} className="ui visible inverted left vertical sidebar menu">
        
        <Link to="/" className="ui black button" style={{width: 150}}>
          <i className="search icon" ></i>
          Search
        </Link>
        <Link className="ui black button" to="/dashboard/home" style={{width: 150}}>
          <i className="home icon"  ></i>
          Home
        </Link>
        <Link className="ui black button" to="/dashboard/incidentbrowser" style={{width: 150}}>
          <i className="chart bar outline icon"></i>
          Incidents
        </Link>
        <Link className="ui black button" to="/dashboard/work-requests" style={{width: 150}}>
          <i className="file icon"></i>
          Documents
        </Link>
        <Link className="ui black button" to="/" style={{width: 150}}>
          <i className="phone icon"></i>
          Calls
        </Link>
        <Link className="ui black button" to="/" style={{width: 150}}>
          <i className="briefcase icon"  ></i>
          Torba
        </Link>
        <Link className="ui black button" to="/" style={{width: 150}}>
          <i className="users icon" ></i>
          Dva coveka
        </Link>
    
        <div style={{marginTop: 125}}>

          <Link className="ui black button" to="/" style={{width: 150}}>
            <i className="wrench icon" ></i>
            Settings
          </Link>
          <Link className="item" to="/" style={{width: 150}}>
            <i className="bell icon" ></i>
            Alerts
          </Link>
          <button className="ui black button" onClick={() => onLogoutClick()} style={{width: 150}}>
            Log Out
            <i className="logout icon" style={{marginLeft: 32}}></i>
          </button>

        </div>
        
      </div>
    </div>);
    }
  }
        
  return (
    conditionalReturn()
  );
}

export default SideBar;