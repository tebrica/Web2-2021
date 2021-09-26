import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import DashBoardHomeItem from './DashboardHomeItem';
import Chart from "react-google-charts";

const DashBoardHome = () => {

    const user = useSelector(loggedUserSelector);
    const { push } = useHistory()

    let incidentsNum = 5;
    let workPlansNum = 10;
    let safetyDocsNum = 11;
    
    if (user === null || user === undefined) {
        push('/')
    }

    useEffect(() => {
        if (user === null || user === undefined) {
            push('/')
        }  // eslint-disable-next-line
    },[])

    return (<div style={{marginLeft: 150, height: 550}}>
        
        <table style={{marginLeft: 100, marginTop: 120, position: 'fixed'}}>
            <thead></thead>
            <tbody>
                <tr>
                    <td>
                        <DashBoardHomeItem name="My Incidents" num={incidentsNum}/>
                    </td>

                    <td><div style={{ width: 50 }}></div></td>
                    
                    <td>
                        <div style={{marginLeft: 50}}>
                            <DashBoardHomeItem name="My Work plans" num={workPlansNum}/>
                        </div>
                    </td>

                    <td><div style={{ width: 50 }}></div></td>

                    <td>
                        <div style={{marginLeft: 50}}>
                            <DashBoardHomeItem name="My Safety docs" num={safetyDocsNum}/>
                        </div>
                    </td>

                </tr>

                <tr>
                    <td colSpan="1">
                        <div className="ui raised container segment" style={{height: 200, width: 260, overflow: 'hidden', marginTop: 40}}>
                            <h3 style={{float: 'left', marginRight: 30}}> INCIDENTS </h3>
                            <button className="ui mini secondary button" style={{marginLeft: 50}}> 
                                <i className="cog icon" style={{paddingLeft : 5}}/>
                            </button>
                            <hr/>
                        </div>
                    </td>

                    <td><div style={{ width: 50 }}></div></td>

                    <td>
                        <div style={{ paddingLeft: 60 }}>
                    <Chart width={'300'} height={'200'} chartType="PieChart" loader={<div>Loading Chart</div>}
                        data={[
                            ['Dokumenti', 'Broj'],
                            ['Incidenti', incidentsNum],
                            ['Planovi Rada', workPlansNum],
                            ['Bezbedni Dokumenti', safetyDocsNum],
                        ]}
                        options={{
                            title: 'Daily Activities',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                        </div>
                    </td>

                    <td><div style={{ width: 50 }}></div></td>

                    <td>
                        <div className="ui raised container segment" style={{height: 200, width: 260, overflow: 'hidden', marginTop: 40, marginLeft: 230}}>
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