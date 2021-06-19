import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import makeid from '../../constants/RandomGenerator';

const validationSheme = yup.object().shape({
    reason : yup.string().min(5,'Too short').max(22,'Too long').required('Required'),
    comment : yup.string().min(5,'Too short').max(22,'Too long').required('Required'),
    hazard : yup.string().min(5,'Too short').max(22,'Too long').required('Required'),
})

const NewCall = () => {

    const onFormSubmit = (values,{resetForm}) => {
        resetForm();
        console.log(makeid(8))
    };

    return <div className="ui green segment"> 
        <Formik
            onSubmit={onFormSubmit}
            initialValues={{reason: '', comment: '', hazard: ''}}
            validationSchema={validationSheme}>
            
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
                
                <div style={{marginLeft: 340, marginTop: 20}}>
                    <button className="ui primary button" type="submit"> Add Call </button>
                    <button className="ui secondary button" type="reset" style={{marginLeft: 10}}> Cancel </button>
                </div>
                
            </Form>
        </Formik>
    </div>
}

export default NewCall;