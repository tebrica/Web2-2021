import React, { useState } from 'react';
import BasicInformation from '../new-incident/BasicInformation';
import Calls from '../new-incident/Calls';
import Devices from '../new-incident/Devices';
import NewCall from '../new-incident/NewCall';
import Resolution from '../new-incident/Resolution';
import IncidentMenu from './IncidentMenu';

const NewIncidentComponent = () => {

    const [currentPage,setCurrentPage] = useState(0);

    const [newIncident,setNewIncident] = useState({});

    const renderedPage = () => {
        switch(currentPage)
        {
            case 0: return (<div style={{float: 'left', position: 'fixed', top: 90,left: 410}}>
                <BasicInformation incident={newIncident} setIncident={setNewIncident}/>
            </div>)

            case 1: return (<div style={{float: 'left', position: 'fixed', top: 110,left: 410}}>
                <Devices/>
            </div>)

            case 2: return (<div style={{float: 'left', position: 'fixed', top: 140,left: 410}}>
                <Resolution/>
            </div>)

            case 3: return (<div style={{float: 'left', position: 'fixed', top: 110,left: 410}}>
                <Calls setCurrentPage={setCurrentPage}/>
            </div>)

            case 7: return (<div style={{float: 'left', position: 'fixed', top: 115,left: 410}}>
                <NewCall setCurrentPage={setCurrentPage}/>
            </div>)

            default: <div> Not implemented </div>
        }
    }

    return (
        <div style={{marginLeft: 150, height: 550, overflow: 'hidden'}}>
            <div className="ui container segment" style={{paddingLeft: 20,marginTop: 80, position: 'fixed', width: 920, right: 1, left: 70, height: 510, float: 'left'}}>
                <IncidentMenu setCurrentForm={setCurrentPage} currentForm={currentPage}/>
                {renderedPage()}
            </div>

        </div>
    );
}

export default NewIncidentComponent;