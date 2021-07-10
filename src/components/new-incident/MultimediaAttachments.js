import React from 'react';

const MultimediaAttachments = () => {
    return <div>
        <h3> Add additional multimedia attachments </h3>

        <div style={{ marginTop: 50, marginLeft: 30 }}>
            <label htmlFor="file"> Additional files: </label>
            <input type="file" name="file" style={{ marginLeft: 60 }}/>
        </div>
    </div>
}

export default MultimediaAttachments;