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
      <div style={{width: 145,top: 60, position: 'fixed', paddingTop: 10}} className="ui visible inverted left vertical sidebar menu">
        
        <Link to="/" className="ui black button" style={{width: 150, height: 40}}>
          <p> Search
          <i className="search icon" style={{marginLeft: 35}}></i>
          </p>
        </Link>

        <Link className="ui black button" to="/dashboard/home" style={{width: 150, height: 40}}>
          <p> Home
          <i className="home icon" style={{marginLeft: 35}}></i>
          </p>
        </Link>

        <Link className="ui black button" to="/dashboard/incidentbrowser" style={{width: 150, height: 40}}>
          <p> Incidents
          <i className="chart bar outline icon" style={{marginLeft: 22}}></i>
          </p>
        </Link>

        <Link className="ui black button" to="/dashboard/work-requests" style={{width: 150, height: 40}}>
          <p> Documents 
          <i className="file icon" style={{marginLeft: 10}}></i>
          </p>
        </Link>

        <Link className="ui black button" to="/calls" style={{width: 150, height: 40}}>
          <p> Calls
          <i className="phone icon" style={{marginLeft: 45}}></i>
          </p>
        </Link>

        <Link className="ui black button" to="/" style={{width: 150, height: 40}}>
          <p> Torba 
          <i className="briefcase icon" style={{marginLeft: 45}}></i>
          </p>
        </Link>

        <Link className="ui black button" to="/map" style={{width: 150, height: 40}}>
          <p> Maps
            <i className="map icon" style={{marginLeft: 44}}></i>
          </p>
        </Link>
    
        <div style={{marginTop: 125}}>

          <Link className="ui black button" to="/settings" style={{width: 150, height: 40}}>
            <p> Settings 
            <i className="wrench icon" style={{marginLeft: 30}}></i>
            </p>
          </Link>

          <Link className="ui black button" to="/" style={{width: 150, height: 40}}>
            <p> Alerts 
              <i className="bell icon" style={{marginLeft: 40}}></i>
            </p>
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