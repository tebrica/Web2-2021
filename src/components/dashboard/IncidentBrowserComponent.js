import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetIncidents, RefreshToken } from '../../store/actions';
import { incidentSelector } from '../../store/selectors/AuthSelector';

const IncidentBrowserComponent = () => {

    const dispatch = useDispatch();
    const incidents = useSelector(incidentSelector);
    
    useEffect(() => {
        dispatch(GetIncidents('all'))
        dispatch(RefreshToken());   // eslint-disable-next-line
    },[])

    const renderedIncidents = incidents.map((incident) => {
        return <tr key={incident.ID}>
            <td> {incident.ID} </td>
            <td> {incident.VremeRada} </td>
            <td> {incident.Pozivi} </td>
            <td> {incident.Status} </td>
            <td> {incident.Voltage} </td>
        </tr>
    });

    return (
        <div style={{marginLeft: 150, height: 550}}>
            <div className="ui container segment" style={{paddingLeft: 20,marginTop: 100, position: 'fixed', width: 920, right: 1, left: 70, height: 490}} >
                
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
                                Address
                                <i className="caret down icon"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedIncidents}
                    </tbody>
                </table>


            </div>
        </div>
    );

}

export default IncidentBrowserComponent;