import React, { useState } from 'react';
import WorkRequestMenu from './WorkRequestMenu';

const NewWorkRequest = () => {

    const [currentPage,setCurrentPage] = useState(0);

    const renderedPage = () => {
        switch(currentPage) {
            default: return <div></div>
        }
    }

    return (<div style={{ backgroundColor: 'grey', height: 720 }}> 
    <div style={{marginLeft: 150, height: 550}}>
        <div className="ui container segment" style={{paddingLeft: 20,marginTop: 95, position: 'fixed', width: 1200, right: 1, left: 120, height: 580}} >
            <WorkRequestMenu setCurrentForm={setCurrentPage} currentForm={currentPage} />
            <div style={{float: 'left', position: 'fixed', top: 115,left: 410}}>
                {renderedPage()}
            </div>
        </div>
    </div>
    </div>)
}

export default NewWorkRequest;