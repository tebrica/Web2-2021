import React from 'react';

const MultimediaAttachments = () => {
    return <div>
        <h3> Add additional multimedia attachments </h3>

        <div className="ui raised container segment" style={{ width : 500, marginTop: 90,  marginLeft: 30 }}>
            <label htmlFor="file"> Additional files: </label>
            <input type="file" name="file" style={{ marginLeft: 60 }}/>
            <br/>
            <button type="button" className="ui green inverted button" style={{ marginTop: 30 }}> Save attachments </button>
        </div>
    </div>
}

export default MultimediaAttachments;