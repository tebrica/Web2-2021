import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
//import * as yup from 'yup'

const BasicInformation = () => {

    //const [incidentInformation, setIncidentInformation] = useState({});

    return (<div className="ui green segment">
        <Formik>
            <Form className="ui form">

                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td> <p style={{marginRight: 35}}> Incident ID: </p> </td>
                            <td> <p style={{marginRight: 120}}> INC000015 </p>  </td>
                            <td> Affected customers: </td>
                            <td>
                                <div style={{ float: "left" }}>
                                    <Field type="number" name="affectedCustomers" placeholder="0" style={{ width: 150, marginLeft: 30 }}/>
                                    <ErrorMessage name="email">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td> <p style={{marginTop: 20}}> Type: </p> </td>
                            <td>
                                <select class="ui dropdown" style={{marginTop: 15, width: 165}}>
                                    <option value=""> --- </option>
                                    <option value="PLANIRANI_INCIDENT">Planirani incident</option>
                                    <option value="NEPLANIRANI_INCIDENT">Neplanirani incident</option>
                                </select>
                            </td>
                            <td> <p style={{marginTop: 20}}> Outage time: </p>  </td>
                            <td>
                                <input id="outagetime" type="date" name="outagetime" style={{ width: 150, marginLeft: 30, height: 38, marginTop: 15}} />
                            </td>
                        </tr>

                        <tr>
                            <td><p style={{marginTop: 20}}>Priority:</p></td>
                            <td>
                                <select class="ui dropdown" style={{marginTop: 15, width: 165}}>
                                    <option value=""> --- </option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </td>
                            <td><p style={{marginTop: 20}}>ETR:</p></td>
                            <td>
                                <input id="ETR" type="date" name="ETR" style={{ width: 150, marginLeft: 30, height: 38, marginTop: 18 }} />
                            </td>
                        </tr>

                        <tr>
                            <td><p style={{marginTop: 20}}>Confirmed:</p></td>
                            <td>
                                <div style={{marginTop: 20}}>
                                    <input type="checkbox" name="public" value="false" style={{marginTop: 4, marginLeft: 14}}/>  
                                </div>
                            </td>
                            <td><p style={{marginTop: 20}}>Calls:</p></td>
                            <td>
                                <div style={{ float: "left" }}>
                                    <Field type="number"name="calls" placeholder="0" style={{ width: 150, marginLeft: 30, marginTop: 12 }}/>
                                    <ErrorMessage name="calls">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><p style={{marginTop: 20}}>ETA:</p></td>
                            <td>
                                <input id="ETA" type="date" name="ETA" style={{ width: 150, height: 38, marginTop: 18 }} />
                            </td>
                            <td><p style={{marginTop: 20}}>ATA:</p></td>
                            <td>
                                <input id="ATA" type="date" name="ATA" style={{ width: 150, marginLeft: 30, height: 38, marginTop: 18 }} />
                            </td>
                        </tr>

                        <tr>
                            <td><p style={{marginTop: 20}}>Voltage [kV]:</p></td>
                            <td>
                                <input type="number" step="0.01" style={{width: 150}}/>
                            </td>
                            <td><p style={{marginTop: 20}}>Sheduled time:</p></td>
                            <td>
                                <input id="SheduledTime" type="date" name="SheduledTime" style={{ width: 150, height: 38, marginTop: 18, marginLeft: 30 }} />
                            </td>
                        </tr>

                        <tr>
                            
                            <td><p style={{marginTop: 20}}>Status:</p></td>
                            <td> 
                                <div style={{marginTop: 10}}>
                                    Status - Dispatched 
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td><p style={{marginTop: 20}}>Description</p></td>
                            <td colSpan="2">
                                <div>
                                    <div style={{ float: "left" }}>
                                        <Field type="text"name="description" placeholder="Description.." style={{ width: 300, marginLeft: 30, marginTop: 12 }}/>
                                        <ErrorMessage name="description">
                                            {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                        </ErrorMessage>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </Form>
        </Formik>
    </div>);
}

export default BasicInformation;