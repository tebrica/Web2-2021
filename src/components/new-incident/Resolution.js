import React from 'react';

const Resolution = () => {
    
    return <div className="ui green segment" style={{marginLeft: 50, width: 500, paddingLeft: 70}}>
        <label htmlFor="cause"> Cause: </label>
        <select className="ui dropdown" name="cause" style={{width: 160, marginLeft: 114}}>
            <option value=""> None </option>
            <option value="Weather"> Weather </option>
            <option value="Human factor"> Human factor </option>
            <option value="Failure"> Failure </option>
        </select>
        <br/>
        <label htmlFor="subcause"> Subcause: </label>
        <select className="ui dropdown" name="subcause" style={{width: 160, marginTop: 30, marginLeft: 94}}>
            <option value=""> None </option>
            <option value="Thunder"> Thunder </option>
            <option value="Hurricane"> Hurricane </option>
            <option value="Lightning"> Lightning </option>
            <option value="Snow"> Snow </option>
        </select>
        <br/>
        <label htmlFor="consType"> Construction Type: </label>
        <select className="ui dropdown" name="consType" style={{width: 160, marginTop: 30, marginLeft: 40}}>
            <option value="">None</option>
            <option value="1">Underground</option>
            <option value="0">Above ground</option>
        </select>
        <br/>
        <label htmlFor="material"> Material: </label>
        <select className="ui dropdown" name="material" style={{width: 160, marginTop: 30, marginLeft: 100}}>
            <option value="">None</option>
            <option value="Metal">Metal</option>
            <option value="Plastic">Plastic</option>
            <option value="Wood">Wood</option>
        </select>
    </div>
}

export default Resolution;