import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCalls } from '../../store/actions';
import { callSelector } from '../../store/selectors/AuthSelector';

const Calls = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const allCalls = useSelector(callSelector)

    useEffect(() => {
        dispatch(GetCalls()) // eslint-disable-next-line
    },[])

    console.log(allCalls)

    return <div>
        {/* HEADER TABELE  */}
        <div style={{overflow: 'hidden'}}>
            <button className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}} onClick={() => setCurrentPage(7)}> + New </button>
            <button className="ui black button" style={{marginLeft: 460, marginTop: 18}}> Filter </button>
        </div>

        {/* TABLE */}
        <table className="ui green table" style={{marginTop: 30, width: 660}}>
            <thead>
                <tr>
                    <th>
                        Call Id
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                        Reason
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                        Hazard
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                        Comment
                        <i className="caret down icon"></i>
                    </th>
                    <th>
                            
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td> 2849183 </td>
                    <td> No electricity </td>
                    <td> Strong wind </td>
                    <td> Hurry up! </td>
                </tr>
                <tr>
                    <td> 4323272 </td>
                    <td> No electricity </td>
                    <td> Lightning </td>
                    <td>  </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Calls;