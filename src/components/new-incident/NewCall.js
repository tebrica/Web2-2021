import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

const NewCall = () => {
    return <div className="ui green segment"> 
        <Formik
            initialValues={{reason: ''}}>
            <Form className="ui form">
                <table>
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td> Reason: </td>
                            <td>
                                <div style={{ float: "left" }}>
                                    <Field type="text" name="reason" placeholder="Reason..." style={{ width: 450, marginLeft: 30 }}/>
                                    <ErrorMessage name="reason">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td> <p style={{marginTop: 20}}>Comment:</p></td>
                            <td>
                                <div style={{ float: "left", marginTop: 20 }}>
                                    <Field type="text" name="comment" placeholder="Comment..." style={{ width: 450, marginLeft: 30 }}/>
                                    <ErrorMessage name="comment">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td> <p style={{marginTop: 20}}>Hazard:</p></td>
                            <td>
                                <div style={{ float: "left", marginTop: 20 }}>
                                    <Field type="text" name="hazard" placeholder="Hazard..." style={{ width: 450, marginLeft: 30 }}/>
                                    <ErrorMessage name="hazard">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </Form>
        </Formik>
    </div>
}

export default NewCall;