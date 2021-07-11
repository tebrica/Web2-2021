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

    return (
        <div style={{marginLeft: 150, height: 550}}>
            <div className="ui container segment" style={{paddingLeft: 20,marginTop: 80, position: 'fixed', width: 1030, right: 1, left: 140, height: 510}} >
                <MapG/>
            </div>
        </div>
    )
}

export default MapsComponent;