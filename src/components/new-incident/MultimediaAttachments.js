import React from 'react';
import { useHistory } from 'react-router';

const MultimediaAttachments = () => {

    const { push } = useHistory();

    return <div>
        <div className="ui raised segment" style={{ width : 500, marginTop: 70,  marginLeft: 130 }}>
            <label htmlFor="file"> Additional files: </label>
            <input type="file" name="file" style={{ marginLeft: 60 }}/>
            <br/>
            <button type="button" className="ui green inverted button" style={{ marginTop: 30 }} onClick={() => push('/dashboard/incidentbrowser')}> Save attachments </button>
        </div>
    </div>
}

export default MultimediaAttachments;