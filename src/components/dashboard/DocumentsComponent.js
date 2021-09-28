import React, { useState } from 'react';
import DocumentsTable from '../documents/DocumentsTable';

const DocumentsComponent = () => {

    const [selected,setSelected] = useState(0);

    const renderDocumentTable = () => {
        switch(selected) {
            case 0 : return <DocumentsTable docType="Work requests"/>
            case 1 : return <DocumentsTable docType="Work plans"/>
            case 2 : return <DocumentsTable docType="Safety documents"/>
            default : return <DocumentsTable docType="Work requests"/>
        }
    }

    return (<div style={{ backgroundColor: 'grey', height: 720 }}> 
        <div style={{marginLeft: 150, height: 550}}>
            <div className="ui raised segment" style={{paddingLeft: 20,marginTop: 100, position: 'fixed', width: 1250, right: 1, left: 200, height: 580}} >
                <div className="ui fluid three item menu">  
                    <a className={`item ${selected === 0 ? 'active' : ''}`} onClick={() => setSelected(0)}> Work requests </a> 
                    <a className={`item ${selected === 1 ? 'active' : ''}`} onClick={() => setSelected(1)}> Work plans </a>  
                    <a className={`item ${selected === 2 ? 'active' : ''}`} onClick={() => setSelected(2)}> Safety documents </a> 
                </div>

                <div style={{ marginTop: 10 }}>
                    {renderDocumentTable()}
                </div>
            </div>
        </div>
    </div>)
}

export default DocumentsComponent;