import React from 'react';
import { Link } from 'react-router-dom';

const Devices = () => {
    return (
        <div>
            {/* HEADER TABELE  */}
            <div style={{overflow: 'hidden'}}>
                    <Link to="/dashboard/new-incident" className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}}> + New </Link>
                    <button className="ui black button" style={{marginLeft: 460, marginTop: 18}}> Filter </button>
            </div>

            {/* TABELA */}
            <table className="ui green table" style={{marginTop: 30, width: 660}}>
                <thead>
                    <tr>
                        <th>
                            Id
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Name
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Type
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Coordinates
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Address
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> 2849183 </td>
                        <td> BRE_000382 </td>
                        <td> Breaker </td>
                        <td> 45* 14` 58` N 19* 29` 28` </td>
                        <td> Puskinova 18 </td>
                    </tr>
                    <tr>
                        <td> 4323272 </td>
                        <td> BRE_020317 </td>
                        <td> Disconnector </td>
                        <td> 45* 14` 58` N 19* 29` 28` </td>
                        <td> Gogoljeva 34 </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Devices;