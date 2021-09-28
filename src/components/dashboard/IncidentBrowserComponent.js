import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { DeleteEditIncident, GetIncidents, RefreshToken, SaveEditIncident, SortIncidents } from '../../store/actions';
import { incidentSelector, loggedUserSelector } from '../../store/selectors/AuthSelector';
import Paginator from '../Paginator';

const IncidentBrowserComponent = () => {

    const dispatch = useDispatch();
    const incidents = useSelector(incidentSelector);
    const user = useSelector(loggedUserSelector);
    const { push } = useHistory();

    const [currentPage,setCurrentPage] = useState(1);   // eslint-disable-next-line
    const [postsPerPage,setPostsPerPage] = useState(5);

    const onIdClicked = (incidentId) => {
        dispatch(SaveEditIncident(incidentId));
        push('/dashboard/new-incident')
    }

    if (user === undefined || user === null) {
        push('/Unauthorized')
    }
    
    useEffect(() => {
        dispatch(DeleteEditIncident());
        dispatch(GetIncidents('all'))
        dispatch(RefreshToken());   // eslint-disable-next-line
    },[])

    // Get current incidents..
    const indexOfLastIncident = currentPage * postsPerPage;
    const indexOfFirstIncident = indexOfLastIncident - postsPerPage;
    const currentIncidents = incidents.slice(indexOfFirstIncident, indexOfLastIncident);

    const renderedIncidents = currentIncidents.map((incident) => {
        return <tr key={incident.ID}>
            <td> <button onClick={() => onIdClicked(incident.ID)} className="ui small inverted green button"> {incident.ID} </button> </td>
            <td> {incident.VremeRada.slice(0,10)} </td>
            <td> {incident.IncidentType === 0 ? 'Planirani incident' : 'Neplanirani incident'} </td>
            <td> {incident.Voltage} kW </td>
            <td> {incident.AffectedPeople} </td>
            <td> {incident.Status} </td>
            <td> {incident.IdKorisnika === '' ? '-' : incident.IdKorisnika} </td>
        </tr>
    });

    return (<div style={{ backgroundColor: 'grey', height: 720 }}>
        <div style={{marginLeft: 150, height: 600}}>
            <div className="ui container segment" style={{paddingLeft: 20, marginTop: 110, position: 'fixed', width: 1300, right: 1, left: 140, height: 550}}>
                
                {/* HEADER TABELE  */}
                <div style={{overflow: 'hidden'}}>
                    <Link to="/dashboard/new-incident" className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}}> + New </Link>
                    <div className="ui buttons" style={{marginTop : 15, marginLeft: 270}}>
                        <button className="ui button" onClick={() => dispatch(GetIncidents('all'))}>All incidents</button>
                        <div className="or"></div>
                        <button className="ui positive button" onClick={() => dispatch(GetIncidents('my'))}>My Incidents</button>
                    </div>
                </div>

                {/* TABELA */}
                <table className="ui green table" style={{marginTop: 50}}>
                    <thead>
                        <tr>
                            <th>
                                Id
                                <button type="button" style={{ marginLeft: 10, width: 32 }} onClick={() => dispatch(SortIncidents('ID'))}>
                                    <i className="caret down icon"></i>
                                </button>
                                
                            </th>
                            <th>
                                Start Date
                                <button type="button" style={{ marginLeft: 10, width: 32 }} onClick={() => dispatch(SortIncidents('StartDate'))}>
                                    <i className="caret down icon"></i>
                                </button>
                            </th>
                            <th>
                                Incident type
                                <button type="button" style={{ marginLeft: 10, width: 32 }} onClick={() => dispatch(SortIncidents('IncidentType'))}>
                                    <i className="caret down icon"></i>
                                </button>
                            </th>
                            <th>
                                Voltage
                                <button type="button" style={{ marginLeft: 10, width: 32 }} onClick={() => dispatch(SortIncidents('Voltage'))}>
                                    <i className="caret down icon"></i>
                                </button>
                            </th>
                            <th>
                                Affected people
                                <button type="button" style={{ marginLeft: 10, width: 32 }} onClick={() => dispatch(SortIncidents('AffectedPeople'))}>
                                    <i className="caret down icon"></i>
                                </button>
                            </th>
                            <th>
                                Status
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
        </div>
    );

}

export default IncidentBrowserComponent;