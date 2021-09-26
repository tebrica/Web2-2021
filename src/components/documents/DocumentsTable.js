import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { GetWorkRequests } from '../../store/actions';
import { DocumentsSelector } from '../../store/selectors/AuthSelector';
import Paginator from '../Paginator';
import RenderDocuments from './DocumentRender';

const DocumentsTable = ({ docType }) => {

    const dispatch = useDispatch();
    const documents = useSelector(DocumentsSelector)

    const [currentPage,setCurrentPage] = useState(1);   // eslint-disable-next-line
    const [postsPerPage,setPostsPerPage] = useState(5);

    useEffect(() => {
        dispatch(GetWorkRequests({ type: docType, col: 'ID' })); // eslint-disable-next-line
    },[docType])

    // Get current incidents..
    const indexOfLastIncident = currentPage * postsPerPage;
    const indexOfFirstIncident = indexOfLastIncident - postsPerPage;
    const currentIncidents = documents.slice(indexOfFirstIncident, indexOfLastIncident); 

    const renderedDocuments = currentIncidents.map(doc => {// eslint-disable-next-line
        return RenderDocuments(docType,doc)
    })

    return <div style={{marginLeft: 250, height: 550}}>
        <div style={{paddingLeft: 20, position: 'fixed', width: 1050, right: 1, left: 220, height: 410}} >
        
            {/* HEADER TABELE  */}
            <div style={{overflow: 'hidden'}}>
                <Link to="/dashboard/new-work-request" className="ui primary button" style={{float: 'left', marginLeft: 20, marginTop: 15}}> + New </Link>
                <button className="ui black button" style={{marginLeft: 700, marginTop: 15}}> Filter </button>
            </div>

            {/* TABELA */}
            <table className="ui green table" style={{marginTop: 30}}>
                <thead>
                    <tr>
                        <th>
                            Id
                            <button style={{ marginLeft: 15 }} onClick={() => dispatch(GetWorkRequests({ type: docType, col: 'ID' }))}>
                                <i className="caret down icon"></i>
                            </button>
                        </th>
                        <th>
                            Document type
                            <button style={{ marginLeft: 15 }} onClick={() => dispatch(GetWorkRequests({ type: docType, col: 'Tip' }))}>    
                                <i className="caret down icon"></i>
                            </button>
                           
                        </th>
                        <th>
                            Create date
                            <button style={{ marginLeft: 15 }} onClick={() => dispatch(GetWorkRequests({ type: docType, col: 'CreatedTime' }))}>
                                <i className="caret down icon"></i>
                            </button>
                        </th>
                        <th>    
                            {docType === 'Safety documents' ? 'Telefonski broj' : 'Start date'}
                            
                            {docType === 'Safety documents' 
                                ? <button style={{ marginLeft: 15 }} onClick={() => dispatch(GetWorkRequests({ type: docType, col: 'PhoneNumber' }))}>
                                    <i className="caret down icon"></i>
                                </button>
                                : <button style={{ marginLeft: 15 }} onClick={() => dispatch(GetWorkRequests({ type: docType, col: 'StartDate' }))}>
                                    <i className="caret down icon"></i>
                                </button>
                            }
                        </th>
                        <th>
                            End date
                            <button style={{ marginLeft: 15 }} onClick={() => dispatch(GetWorkRequests({ type: docType, col: 'ID' }))}>
                                <i className="caret down icon"></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderedDocuments}
                </tbody>
            </table>

            <div style={{ marginTop: 30 }}>
                <Paginator incidentsPerPage={postsPerPage} totalIncidents={documents.length} changePage={(num) => setCurrentPage(num)} />
            </div>
            
        </div>
    </div>
}

export default DocumentsTable;