import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDevice, GetDevices } from '../../store/actions';
import { devicesSelector, editIncidentSelector } from '../../store/selectors/AuthSelector';
import Paginator from '../Paginator';

const Devices = ({ setCurrentPage, incidentId }) => {

    const dispatch = useDispatch();

    const devices = useSelector(devicesSelector)
    const editIncident = useSelector(editIncidentSelector);

    const [currentPagePagin,setCurrentPagePagin] = useState(1);   // eslint-disable-next-line
    const [postsPerPage,setPostsPerPage] = useState(4);

    useEffect(() => {
        if (editIncident !== null) {    // eslint-disable-next-line
            incidentId = editIncident.ID;
        }   
        dispatch(GetDevices(incidentId)); // eslint-disable-next-line
    },[])

    // Get current incidents..
    const indexOfLastDevice = currentPagePagin * postsPerPage;
    const indexOfFirstDevice = indexOfLastDevice - postsPerPage;
    const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);

    const devicesRendered = currentDevices.map((device) => {
        return (<tr key={device.IdOprema}>
            <td>{device.IdOprema}</td>
            <td>{device.Name}</td>
            <td>{device.OpremaType}</td>
            <td>{device.CoordinateX} <br/> {device.CoordinateY} </td>
            <td>{device.Address}</td>
            <td>
                <button className="ui tiny inverted red button" style={{ width: 46 }} onClick={() => dispatch(DeleteDevice({ device: device.IdOprema, incident: editIncident === null ? incidentId : editIncident.ID }))}>
                    <i className="x icon"></i>
                </button>
            </td>
        </tr>);
    })

    return (
        <div>
            {/* HEADER TABELE  */}
            <div style={{overflow: 'hidden'}}>
                <button className="ui small primary button" onClick={() => setCurrentPage(8)}> + New Device </button>
                <button className="ui black button" style={{marginLeft: 460, marginTop: 18}}> Filter </button>
            </div>

            {/* TABELA */}
            <table className="ui green table" style={{ marginTop: 30, width: 660 }}>
                <thead>
                    <tr>
                        <th>
                            Id
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Name
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Type
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Coordinates
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Address
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>

                <tbody>{devices.length === 0 ? 'No devices' : devicesRendered}</tbody>


            </table>

            {devices.length === 0 ? <div></div> : 
            <div style={{ marginTop: 30 }}>
                <Paginator incidentsPerPage={postsPerPage} totalIncidents={devices.length} changePage={(num) => setCurrentPagePagin(num)} />
            </div>}

        </div>
    );
}

export default Devices;