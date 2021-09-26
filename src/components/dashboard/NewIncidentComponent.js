import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import makeid from '../../constants/RandomGenerator';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import BasicInformation from '../new-incident/BasicInformation';
import Calls from '../new-incident/Calls';
import Crew from '../new-incident/Crew';
import Devices from '../new-incident/Devices';
import MultimediaAttachments from '../new-incident/MultimediaAttachments';
import NewCall from '../new-incident/NewCall';
import NewDeviceComponent from '../new-incident/NewDeviceComponent';
import Resolution from '../new-incident/Resolution';
import IncidentMenu from './IncidentMenu';
import { useHistory } from 'react-router';

const NewIncidentComponent = () => {

    const [incidentId,setIncidentId] = useState('');

    const [currentPage,setCurrentPage] = useState(0);

    const [headerPosted,setHeaderPosted] = useState(false);

    const { push } = useHistory();

    const user = useSelector(loggedUserSelector);
    
    if (user === undefined || user === null) {
        push('/Unauthorized')
    }

    useEffect(() => {
        setIncidentId('INC_' + makeid(6));
    },[]);

    const renderedPage = () => {
        switch(currentPage)
        {
            case 0: return (<div style={{float: 'left', position: 'fixed', top: 120,left: 450}}>
                <h2 className="ui header" style={{ marginLeft: 150 }}> Basic information about incident </h2>
                <BasicInformation incidentId={incidentId} setHeaderPosted={setHeaderPosted} setCurrentPage={setCurrentPage} setIncidentId={setIncidentId} />
            </div>)

            case 1: return (<div style={{float: 'left', position: 'fixed', top: 120,left: 450}}>
                <h2 className="ui header" style={{ marginLeft: 190 }}> Affected Devices </h2>
                <Devices setCurrentPage={setCurrentPage} incidentId={incidentId} />
            </div>)

            case 2: return (<div style={{float: 'left', position: 'fixed', top: 130,left: 420}}>
                <Resolution setCurrentPage={setCurrentPage} headerPosted={headerPosted} incidentId={incidentId}  />
            </div>)

            case 3: return (<div style={{float: 'left', position: 'fixed', top: 130,left: 450}}>
                <h2 className="ui header" style={{ marginLeft: 190 }}> Calls for this incident </h2>
                <Calls setCurrentPage={setCurrentPage} incidentId={incidentId}/>
            </div>)

            case 4: return (<div style={{float: 'left', position: 'fixed', top: 110,left: 450}}>
                <Crew setCurrentPage={setCurrentPage} incidentId={incidentId} headerPosted={headerPosted}/>
            </div>)

            case 5: return (<div style={{float: 'left', position: 'fixed', top: 110,left: 450}}>
                <MultimediaAttachments/>
            </div>)

            case 7: return (<div style={{float: 'left', position: 'fixed', top: 115,left: 450}}>
                <NewCall setCurrentPage={setCurrentPage} incidentId={incidentId} headerPosted={headerPosted}/>
            </div>)

            case 8: return (<div style={{float: 'left', position: 'fixed', top: 115,left: 410}}>
                <NewDeviceComponent setCurrentPage={setCurrentPage} incidentId={incidentId} headerPosted={headerPosted}  />                
            </div>)

            default: <div> Not implemented </div>
        }
    }

    return (
        <div style={{marginLeft: 150, height: 600, overflow: 'hidden', marginTop: 15}}>
            <div className="ui container segment" style={{paddingLeft: 20,marginTop: 80, position: 'fixed', width: 1160, right: 1, left: 160, height: 520, float: 'left'}}>
                <IncidentMenu setCurrentForm={setCurrentPage} currentForm={currentPage}/>
                {renderedPage()}
            </div>

        </div>
    );
}

export default NewIncidentComponent;