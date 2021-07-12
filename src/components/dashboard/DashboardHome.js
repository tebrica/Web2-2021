import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LogoutUser } from '../../store/actions';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import DashBoardHomeItem from './DashboardHomeItem';
import Chart from "react-google-charts";

const DashBoardHome = () => {

    const user = useSelector(loggedUserSelector);
    const { push } = useHistory()
    var React = require('react');
    var Component = React.Component;

    let incidentsNum = 5;
    let workPlansNum = 10;
    let safetyDocsNum = 11;
    
    if (user === null || user === undefined) {
        push('/')
    }
    
    const { push } = useHistory();

    useEffect(() => {
        if (user === null || user === undefined) {
            push('/')
        }
    },[])

    return (<div style={{marginLeft: 150, height: 550}}>
        
        <table style={{marginLeft: 120, marginTop: 100, position: 'fixed'}}>
            <thead></thead>
            <tbody>
                <tr>
                    <td>
                        <DashBoardHomeItem name="My Incidents" num={incidentsNum}/>
                    </td>
                    
                    <td>
                        <div style={{marginLeft: 50}}>
                            <DashBoardHomeItem name="My Work plans" num={workPlansNum}/>
                        </div>
                    </td>

                    <td>
                        <div style={{marginLeft: 50}}>
                            <DashBoardHomeItem name="My Safety docs" num={safetyDocsNum}/>
                        </div>
                    </td>

                </tr>

                <tr>
                    <td colSpan="1">
                        <div className="ui raised container segment" style={{height: 190, width: 220, overflow: 'hidden', marginTop: 40}}>
                            <h3 style={{float: 'left', marginRight: 30}}> INCIDENTS </h3>
                            <button className="ui tiny secondary button" style={{marginLeft: 275}}> 
                                <i className="cog icon" style={{paddingLeft : 5}}/>
                            </button>
                            <hr style={{marginTop: 10}}/>
                        </div>
                    </td>

                    <td>
                    <Chart
                    width={'300'}
                    height={'200'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Dokumenti', 'Broj'],
                        ['Incidenti', incidentsNum],
                        ['Planovi Rada', workPlansNum],
                        ['Bezbedni Dokumenti', safetyDocsNum],
                    ]}
                    options={{
                        title: 'My Daily Activities',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                    />
                    </td>
                    <td>
                        <div className="ui raised container segment" style={{height: 190, width: 220, overflow: 'hidden', marginTop: 40, marginLeft: 160}}>
                            <h3 style={{float: 'left', marginRight: 30}}> DOCUMENTS </h3>
                            <hr style={{marginTop: 30}}/>
                        </div>
                        
                    </td>
                
                </tr>
                
            </tbody>
        </table>

    </div>)
}

export default DashBoardHome;