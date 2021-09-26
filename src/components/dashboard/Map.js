import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';
import { GetAllDevices, SaveEditIncident } from '../../store/actions';
import { devicesSelector } from '../../store/selectors/AuthSelector';
import makeid from '../../constants/RandomGenerator';

const MapG = () => {

    const dispatch = useDispatch();
    const devices = useSelector(devicesSelector);

    const { push } = useHistory();

    useEffect(() => {
        dispatch(GetAllDevices()); // eslint-disable-next-line
    },[])

    const loadIncidentInfo = (incidentId) => {
        dispatch(SaveEditIncident(incidentId));
        push('/dashboard/new-incident')
    }

    const devicesPinsRendered = devices.map(device => {
        return <Placemark key={makeid(10)} geometry={[device.CoordinateX, device.CoordinateY]} onClick={() => loadIncidentInfo(device.IncidentId)}/>
            
    })
      
    return (
        <div>
            <YMaps>
                <Map defaultState={{ center: [45.24732342138606, 19.832377209934805], zoom: 12.5 }} style={{ height: 560, width: 1210 }} >
                    <Clusterer options={{
                        preset: "islands#invertedVioletClusterIcons",
                        groupByCoordinates: false,
                        clusterDisableClickZoom: true,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false
                    }}>
                        { devicesPinsRendered } 
                    </Clusterer>
                    
                </Map>
            </YMaps>
        </div>
    )
}

export default MapG;