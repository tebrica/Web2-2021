import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCalls } from '../../store/actions';
import { callSelector } from '../../store/selectors/AuthSelector';
import Paginator from '../Paginator';

const CallsComponent = () => {

    const dispatch = useDispatch();
    const calls = useSelector(callSelector);

    const [currentPage,setCurrentPage] = useState(1);   // eslint-disable-next-line
    const [postsPerPage,setPostsPerPage] = useState(5);

    useEffect(() => {
        dispatch(GetCalls('all'));  // eslint-disable-next-line
    },[])

    // Get current incidents..
    const indexOfLastIncident = currentPage * postsPerPage;
    const indexOfFirstIncident = indexOfLastIncident - postsPerPage;
    const currentIncidents = calls.slice(indexOfFirstIncident, indexOfLastIncident); 

    const callsRendered = currentIncidents.map(call => {
        return <tr key={call.Id}>
            <td> {call.Razlog} </td>
            <td> {call.Kvar} </td>
            <td> {call.UsernameKor} </td>
            <td> {call.Komentar} </td>
            <td> {call.IncidentId} </td>
        </tr>
    })

    return (<div style={{marginLeft: 150, height: 550}}>
        <div className="ui container segment" style={{paddingLeft: 20,marginTop: 80, position: 'fixed', width: 920, right: 1, left: 50, height: 490}} >
            {/* TABELA */}
            <h2 className="ui header" style={{ marginLeft: 5 }}> All Calls </h2>
            <table className="ui green table" style={{marginTop: 12}}>
                    <thead>
                        <tr>
                            <th>
                                Razlog
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Kvar
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Username korisnika
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Komentar
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Incident Id
                                <i className="caret down icon"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {callsRendered}
                    </tbody>
                </table>

                <div style={{ marginTop: 30 }}>
                    <Paginator incidentsPerPage={postsPerPage} totalIncidents={calls.length} changePage={(num) => setCurrentPage(num)} />
                </div>
        </div>
    </div>);
}

export default CallsComponent;