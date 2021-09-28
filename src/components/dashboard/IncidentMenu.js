import React from 'react';

const IncidentMenu = ({setCurrentForm,currentForm}) => {
    return (
        <div className="ui vertical pointing menu" style={{ width: 150, marginLeft: 5, marginTop: 50 }}>
        <button className={`ui green button item ${currentForm === 0 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(0)}>
          Basic Information
        </button>
        <button className={`ui green button item ${currentForm === 1 ? 'active' : ''}`} style={{width: '100%'}} onClick={() => setCurrentForm(1)}>
          Devices
        </button>
        <button className={`ui green button item ${currentForm === 2 ? 'active' : ''}`} style={{width: '100%'}} onClick={() => setCurrentForm(2)}>
          Resolution
        </button>
        <button className={`ui green button item ${currentForm === 3 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(3)}>
          Calls
        </button>
        <button className={`ui green button item ${currentForm === 4 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(4)}>
          Crew
        </button>
        <button className={`ui green button item ${currentForm === 5 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(5)}>
          Multimedia Attachments
        </button>
      </div>
    );
}

export default IncidentMenu;