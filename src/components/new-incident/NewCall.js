import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import { AddCall } from '../../store/actions';

const validationSheme = yup.object().shape({
    Razlog : yup.string().min(5,'Too short').max(22,'Too long').required('Required'),
    Komentar : yup.string().min(5,'Too short').max(22,'Too long').required('Required'),
    Kvar : yup.string().min(5,'Too short').max(22,'Too long').required('Required'),
})

const NewCall = ({ setCurrentPage, incidentId, headerPosted }) => {

    const dispatch = useDispatch();
    const user = useSelector(loggedUserSelector);

    const onFormSubmit = (values,{resetForm}) => {
        resetForm();
        if (!headerPosted) {
            alert('You have to enter basic information first!');
            setCurrentPage(0);
        }
        const vals = values;
        vals.IncidentId = incidentId;
        vals.UsernameKor = user.Username;
        dispatch(AddCall(vals))
        setCurrentPage(3)
    };

    console.log(headerPosted)

    return <div className="ui green segment"> 
        <Formik
            onSubmit={onFormSubmit}
            initialValues={{Razlog: '', Komentar: '', Kvar: ''}}
            validationSchema={validationSheme}>
            
            <Form className="ui form">
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td> Reason: </td>
                            <td>
                                <div style={{ float: "left" }}>
                                    <Field type="text" name="Razlog" placeholder="Reason..." style={{ width: 450, marginLeft: 30 }}/>
                                    <ErrorMessage name="Razlog">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td> <p style={{marginTop: 20}}>Comment:</p></td>
                            <td>
                                <div style={{ float: "left", marginTop: 20 }}>
                                    <Field type="text" name="Komentar" placeholder="Comment..." style={{ width: 450, marginLeft: 30 }}/>
                                    <ErrorMessage name="Komentar">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td> <p style={{marginTop: 20}}>Hazard:</p></td>
                            <td>
                                <div style={{ float: "left", marginTop: 20 }}>
                                    <Field type="text" name="Kvar" placeholder="Hazard..." style={{ width: 450, marginLeft: 30 }}/>
                                    <ErrorMessage name="Kvar">
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