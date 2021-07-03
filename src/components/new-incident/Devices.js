import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDevices } from '../../store/actions';
import { devicesSelector } from '../../store/selectors/AuthSelector';
import Paginator from '../Paginator';

const Devices = ({ setCurrentPage, incidentId }) => {

    const dispatch = useDispatch();

    const devices = useSelector(devicesSelector)

    const [currentPagePagin,setCurrentPagePagin] = useState(1);   // eslint-disable-next-line
    const [postsPerPage,setPostsPerPage] = useState(5);

    useEffect(() => {
        dispatch(GetDevices(incidentId)); // eslint-disable-next-line
    },[])

    // Get current incidents..
    const indexOfLastDevice = currentPagePagin * postsPerPage;
    const indexOfFirstDevice = indexOfLastDevice - postsPerPage;
    const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);

    const devicesRendered = currentDevices.map((device) => {
        return (<tr key={device.IdOprema}>
            <td> {device.IdOprema} </td>
            <td> {device.Name} </td>
            <td> {device.OpremaType} </td>
            <td> {device.Coordinates} </td>
            <td> {device.Address} </td>
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

                <tbody><div> { devices.length === 0 ? <div></div> : devicesRendered } </div> </tbody>


            </table>

            { devices.length === 0 ? <div></div> : 
            <div style={{ marginTop: 30 }}>
                <Paginator incidentsPerPage={postsPerPage} totalIncidents={devices.length} changePage={(num) => setCurrentPagePagin(num)} />
            </div>}

        </div>
    );
}

export default Devices;