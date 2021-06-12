import React, { useEffect, useState } from 'react';
import DashBoardHomeItem from './DashboardHomeItem';

const DashBoardHome = () => {

    return (<div style={{marginLeft: 150, height: 550}}>
        
        <table style={{marginLeft: 120, marginTop: 100, position: 'fixed'}}>
            <thead></thead>
            <tbody>
                <tr>
                    <td>
                        <DashBoardHomeItem name="My Incidents" num='0'/>
                    </td>
                    
                    <td>
                        <div style={{marginLeft: 50}}>
                            <DashBoardHomeItem name="My Work plans" num='10'/>
                        </div>
                    </td>

                    <td>
                        <div style={{marginLeft: 50}}>
                            <DashBoardHomeItem name="My Safety docs" num='11'/>
                        </div>
                    </td>

                </tr>

                <tr>
                    <td colSpan="2">
                        <div className="ui raised container segment" style={{height: 190, width: 490, overflow: 'hidden', marginTop: 40}}>
                            <h3 style={{float: 'left', marginRight: 30}}> INCIDENTS </h3>
                            <button className="ui tiny secondary button" style={{marginLeft: 275}}> 
                                <i className="cog icon" style={{paddingLeft : 5}}/>
                            </button>
                            <hr style={{marginTop: 10}}/>
                        </div>
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