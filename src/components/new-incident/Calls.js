import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCalls } from '../../store/actions';
import { callSelector, editIncidentSelector } from '../../store/selectors/AuthSelector';
import Paginator from '../Paginator';

const Calls = ({ setCurrentPage, incidentId }) => {

    const dispatch = useDispatch();
    const allCalls = useSelector(callSelector);
    const editIncident = useSelector(editIncidentSelector);

    const [currentPagePagin,setCurrentPagePagin] = useState(1);   // eslint-disable-next-line
    const [postsPerPage,setPostsPerPage] = useState(5);

    useEffect(() => {
        if (editIncident !== null) {    // eslint-disable-next-line
            incidentId = editIncident.ID;
        }
        dispatch(GetCalls(incidentId)) // eslint-disable-next-line
    },[])

    // Get current incidents..
    const indexOfLastDevice = currentPagePagin * postsPerPage;
    const indexOfFirstDevice = indexOfLastDevice - postsPerPage;
    const currentDevices = allCalls.slice(indexOfFirstDevice, indexOfLastDevice);

    const renderedCalls = currentDevices.map((call) => {
        return (<tr key={call.Id}>
            <td> {call.Id} </td>
            <td> {call.Razlog} </td>
            <td> {call.Kvar} </td>
            <td> {call.Komentar} </td>
        </tr>);
    });

    return <div>
        {/* HEADER TABELE  */}
        <div style={{overflow: 'hidden'}}>
            <button className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}} onClick={() => setCurrentPage(7)}> + New </button>
            <button className="ui black button" style={{marginLeft: 460, marginTop: 18}}> Filter </button>
        </div>

        {/* TABLE */}
        <table className="ui green table" style={{marginTop: 30, width: 660}}>
            <thead>
                <tr>
                    <th>
                        Call Id
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                        Reason
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                        Hazard
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                        Comment
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                            
                    </th>
                </tr>
            </thead>

            <tbody>
               {renderedCalls}
            </tbody>
        </table>

        <div style={{ marginTop: 30 }}>
            <Paginator incidentsPerPage={postsPerPage} totalIncidents={allCalls.length} changePage={(num) => setCurrentPagePagin(num)} />
        </div>
    </div>
}

export default Calls;