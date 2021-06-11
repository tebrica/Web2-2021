import React from 'react'

const DashBoardHomeItem = ({name,num}) => {
    return (<div className="ui raised container segment" style={{height: 190, width: 220, overflow: 'hidden'}}>
        
        <h3 style={{float: 'left', marginRight: 30}}> {name} </h3>
        {name === "My Incidents" ? <i className="bolt icon"></i> : <i className="file image icon"></i>}
        <p style={{float: 'left'}}> {num} </p>

        <hr/>
        
        <div>
            <p style={{marginRight: 120}}> 0 Drafts </p>
            <p> 0 Cancelled </p>
            <p> 2 Executing </p>
            <p> 3 Completed </p>
        </div>
       
    </div>);
}

export default DashBoardHomeItem;