import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetIncidents, RefreshToken } from '../../store/actions';
import { incidentSelector } from '../../store/selectors/AuthSelector';
import Paginator from '../Paginator';

const IncidentBrowserComponent = () => {

    const dispatch = useDispatch();
    const incidents = useSelector(incidentSelector);

    const [currentPage,setCurrentPage] = useState(1);   // eslint-disable-next-line
    const [postsPerPage,setPostsPerPage] = useState(5);
    
    useEffect(() => {
        dispatch(GetIncidents('all'))
        dispatch(RefreshToken());   // eslint-disable-next-line
    },[])

    // Get current incidents..
    const indexOfLastIncident = currentPage * postsPerPage;
    const indexOfFirstIncident = indexOfLastIncident - postsPerPage;
    const currentIncidents = incidents.slice(indexOfFirstIncident, indexOfLastIncident);

    const renderedIncidents = currentIncidents.map((incident) => {
        return <tr key={incident.ID}>
            <td> {incident.ID} </td>
            <td> {incident.VremeRada.slice(0,10)} </td>
            <td> {incident.Pozivi} </td>
            <td> {incident.Status} </td>
            <td> {incident.Voltage} kW </td>
            <td> {incident.AffectedPeople} </td>
            <td> {incident.IdKorisnika === '' ? '-' : incident.IdKorisnika} </td>
        </tr>
    });

    return (
        <div style={{marginLeft: 150, height: 550}}>
            <div className="ui container segment" style={{paddingLeft: 20,marginTop: 100, position: 'fixed', width: 920, right: 1, left: 70, height: 490}}>
                
                {/* HEADER TABELE  */}
                <div style={{overflow: 'hidden'}}>
                    <Link to="/dashboard/new-incident" className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}}> + New </Link>
                    <div className="ui buttons" style={{marginTop : 15, marginLeft: 70}}>
                        <button className="ui button" onClick={() => dispatch(GetIncidents('all'))}>All incidents</button>
                        <div className="or"></div>
                        <button className="ui positive button" onClick={() => dispatch(GetIncidents('my'))}>My Incidents</button>
                    </div>
                    <button className="ui black button" style={{marginLeft: 200}}> Filter </button>
                </div>

                {/* TABELA */}
                <table className="ui green table" style={{marginTop: 30}}>
                    <thead>
                        <tr>
                            <th>
                                Id
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Start Date
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Phone No.
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Status
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Voltage
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Affected people
                                <i className="caret down icon"></i>
                            </th>
                            <th>
                                Id Korisnika
                                <i className="caret down icon"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedIncidents}
                    </tbody>
                </table>

                <div style={{ marginTop: 30 }}>
                    <Paginator incidentsPerPage={postsPerPage} totalIncidents={incidents.length} changePage={(num) => setCurrentPage(num)} />
                </div>
            
            </div>
        </div>
    );

}

export default IncidentBrowserComponent;