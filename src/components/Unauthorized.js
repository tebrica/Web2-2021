import React from 'react';
import { useHistory } from 'react-router';

const Unauthorized = () => {

    const { push } = useHistory()

    return <div className="ui raised container segment" style={{ width: 700,  position: 'fixed', top: 100, left: 280 }}>
        <h1> Are you lost? </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className="ui inverted green button" onClick={() => push('/')}> Return to login page </button>
    </div>
}

export default Unauthorized;