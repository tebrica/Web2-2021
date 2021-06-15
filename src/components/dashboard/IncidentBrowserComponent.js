import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { RefreshToken } from '../../store/actions';

const IncidentBrowserComponent = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(RefreshToken());
    })

    return (
        <div style={{marginLeft: 150, height: 550}}>
            <div className="ui container segment" style={{paddingLeft: 20,marginTop: 100, position: 'fixed', width: 920, right: 1, left: 70, height: 490}} >
                
                {/* HEADER TABELE  */}
                <div style={{overflow: 'hidden'}}>
                    <Link to="/dashboard/new-incident" className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}}> + New </Link>
                    <div className="ui buttons" style={{marginTop : 15, marginLeft: 70}}>
                        <button className="ui button">All incidents</button>
                        <div className="or"></div>
                        <button className="ui positive button">My Incidents</button>
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
                        <tr>
                        <td>Apples</td>
                        <td>200</td>
                        <td>0g</td>
                        <td>POTVRDJENA</td>
                        <td> Gogoljeva 82 </td>
                        </tr>
                        <tr>
                        <td>Orange</td>
                        <td>310</td>
                        <td>0g</td>
                        <td>NEPOTVRDJENA</td>
                        <td> Gogoljeva 82 </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    );

}

export default IncidentBrowserComponent;