import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import { AddNewIncident } from '../../store/actions';

const validationSheme = yup.object().shape({
    AffectedPeople : yup.number().required().min(0,'Must be > 0')
})

const BasicInformation = ({ incidentId, setHeaderPosted }) => {

    const user = useSelector(loggedUserSelector);
    const dispatch = useDispatch();

    const onFormSubmit = (values,{resetForm}) => {
        resetForm();
        const vals = values;
        vals.ID = incidentId;
        vals.Status = 'Active';
        vals.VremeRada = values.ATA;
        dispatch(AddNewIncident(vals))
        setHeaderPosted(true);
    };

    return (<div className="ui green segment">
        <Formik 
            initialValues={{ AffectedPeople: 0, IncidentType: '', ATA: '', Prioritet: 0, ETR: '', Confirmed: false, Pozivi: 0, ETA: '', Voltage: 0, Description: '', IdKorisnika: '' }}
            validationSchema={validationSheme}
            onSubmit={onFormSubmit}>

            {({setFieldValue}) => (
                <Form className="ui form">

                    <table>
                        <thead></thead>
                        <tbody>
                            
                            <tr>
                                <td> <p style={{marginRight: 35}}> Incident ID: </p> </td>
                                <td> <p style={{marginRight: 120}} onChange={(e) => setFieldValue(e.target.value)}> {incidentId} </p>  </td>
                                <td> Affected customers: </td>
                                <td>
                                    <div style={{ float: "left" }}>
                                        <Field type="number" name="AffectedPeople" placeholder="0" style={{ width: 150, marginLeft: 30 }}/>
                                        <ErrorMessage name="AffectedPeople">
                                            {(msg) => <div style={{ color: "red", marginLeft: 40 }}> {msg} </div>}
                                        </ErrorMessage>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td> <p style={{marginTop: 20}}> Type: </p> </td>
                                <td>
                                    <select className="ui dropdown" style={{marginTop: 15, width: 165}} onChange={(e) => setFieldValue("IncidentType",e.target.value)}>
                                        <option value=""> --- </option>
                                        <option value="PLANIRANI_INCIDENT">Planirani incident</option>
                                        <option value="NEPLANIRANI_INCIDENT">Neplanirani incident</option>
                                    </select>
                                </td>
                                <td> <p style={{marginTop: 20}}> ATA (Arrival Time): </p> </td>
                                <td>
                                    <input type="date" name="outagetime" style={{ width: 150, marginLeft: 30, height: 38, marginTop: 15}} onChange={(e) => setFieldValue('ATA',e.target.value)} />
                                </td>
                            </tr>

                            <tr>
                                <td><p style={{marginTop: 20}}>Priority:</p></td>
                                <td>
                                    <select className="ui dropdown" style={{marginTop: 15, width: 165}} onChange={(e) => setFieldValue('Prioritet',parseInt(e.target.value))}>
                                        <option value="0"> --- </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </td>
                                <td><p style={{marginTop: 20}}>ETR:</p></td>
                                <td>
                                    <input id="ETR" type="date" name="ETR" style={{ width: 150, marginLeft: 30, height: 38, marginTop: 18 }} onChange={(e) => setFieldValue('ETR',e.target.value)} />
                                </td>
                            </tr>

                            <tr>
                                <td><p style={{marginTop: 20}}>Confirmed:</p></td>
                                <td>
                                    <div style={{marginTop: 20}}>
                                        <Field type="checkbox" name="public" value="false" style={{marginTop: 4, marginLeft: 14}} onChange={(e) => console.log(e.target)}/>  
                                    </div>
                                </td>
                                <td><p style={{marginTop: 20}}>Calls:</p></td>
                                <td>
                                    <div style={{ float: "left" }}>
                                        <Field type="number"name="calls" placeholder="0" style={{ width: 150, marginLeft: 30, marginTop: 12}} onChange={(e) => setFieldValue('Pozivi',parseInt(e.target.value))}/>
                                        <ErrorMessage name="calls">
                                            {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                        </ErrorMessage>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><p style={{marginTop: 20}}>ETA:</p></td>
                                <td>
                                    <input id="ETA" type="date" name="ETA" style={{ width: 150, height: 38, marginTop: 18 }} onChange={(e) => setFieldValue("ETA",e.target.value)} />
                                </td>
                                <td><p style={{marginTop: 20}}>Dodela resavanja:</p></td>
                                <td>
                                    <select className="ui dropdown" style={{marginTop: 15, width: 165}} onChange={(e) => setFieldValue('IdKorisnika',e.target.value)}>
                                        <option value="0"> --- </option>
                                        <option value={user.Username}>Self assign</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td><p style={{marginTop: 20}}>Voltage [kV]:</p></td>
                                <td>
                                    <input type="number" style={{width: 150, marginTop: 20}} onChange={(e) => setFieldValue('Voltage',parseInt(e.target.value))} />
                                </td>
                                <td><p style={{marginTop: 20}}>Vreme incidenta:</p></td>
                                <td>
                                    <input id="SheduledTime" type="date" name="SheduledTime" style={{ width: 170, height: 38, marginTop: 18, marginLeft: 30 }} 
                                        onChange={(e) => setFieldValue('VremeIncidenta',e.target.value)}/>
                                </td>
                            </tr>

                            <tr>
                                <td><p style={{marginTop: 20}}>Description</p></td>
                                <td colSpan="2">
                                    <div>
                                        <div style={{ float: "left" }}>
                                            <Field type="text" name="Description" placeholder="Description.." style={{ width: 300, marginLeft: 30, marginTop: 12 }}/>
                                            <ErrorMessage name="Description">
                                                {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                </td>
                            </tr>
   
                        </tbody>
                    </table>
                    <button className="ui small primary button" type="submit"> ADD INCIDENT </button>
                </Form>
            )}
        </Formik>
    </div>);
}

export default BasicInformation;