import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetWorkRequests } from '../../store/actions';
import { Link } from 'react-router-dom'
import { workRequestSelector } from '../../store/selectors/AuthSelector';

const WorkRequests = () => {

    const dispatch = useDispatch()
    const workRequests = useSelector(workRequestSelector)

    useEffect(() => {
        dispatch(GetWorkRequests())
    },[])

    console.log(workRequests)

    const renderedWorkRequests =workRequests.map((workRequest) => {
        return <tr key={workRequest.IdPlana}>
            <td> {workRequest.IdPlana} </td>
            <td> {workRequest.PocetakRada} </td>
            <td> {workRequest.TelefonskiBroj} </td>
            <td> {workRequest.Status} </td>
            <td> {workRequest.Ulica} </td>
        </tr>
    })

    return <div style={{marginLeft: 150, height: 550}}>
        <div className="ui container segment" style={{paddingLeft: 20,marginTop: 80, position: 'fixed', width: 980, right: 1, left: 120, height: 500}} >
        
            {/* HEADER TABELE  */}
            <div style={{overflow: 'hidden'}}>
                <Link to="/dashboard/new-incident" className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}}> + New </Link>
                <div className="ui buttons" style={{marginTop : 15, marginLeft: 70}}>
                    <button className="ui button">All work requests</button>
                    <div className="or"></div>
                    <button className="ui positive button">My work requests</button>
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
                    {renderedWorkRequests}
                </tbody>
            </table>
            
        </div>
    </div>
}

export default WorkRequests;