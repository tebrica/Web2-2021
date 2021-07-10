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
        dispatch(GetWorkRequests(docType));
    },[docType])

    // Get current incidents..
    const indexOfLastIncident = currentPage * postsPerPage;
    const indexOfFirstIncident = indexOfLastIncident - postsPerPage;
    const currentIncidents = documents.slice(indexOfFirstIncident, indexOfLastIncident); 

    const renderedDocuments = currentIncidents.map(doc => {
        return RenderDocuments(docType,doc)
    })

    return <div style={{marginLeft: 150, height: 550}}>
        <div style={{paddingLeft: 20, position: 'fixed', width: 930, right: 1, left: 200, height: 410}} >
        
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
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Document type
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            Create date
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            { docType === 'Safety documents' ? 'Telefonski broj' : 'Start date'}
                            <i className="caret down icon"></i>
                        </th>
                        <th>
                            End date
                            <i className="caret down icon"></i>
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