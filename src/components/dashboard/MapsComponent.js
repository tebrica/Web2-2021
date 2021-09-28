import React from 'react';
import MapG from './Map';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';

const MapsComponent = () => {

    const { push } = useHistory();

    const user = useSelector(loggedUserSelector);
    
    if (user === undefined || user === null) {
        push('/Unauthorized')
    }

    return (<div style={{ backgroundColor: 'grey', height: 720 }}> 
        <div style={{marginLeft: 150, height: 620}}>
            <div className="ui container segment" 
                style={{paddingLeft: 20, marginTop: 85, position: 'fixed', width: 1350, right: 1, left: 140, height: 620, background: 'lightgreen'}} >
                <MapG/>
            </div>
        </div>
        </div>
    )
}

export default MapsComponent;