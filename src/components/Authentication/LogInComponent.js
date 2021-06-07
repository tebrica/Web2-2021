import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup'

const validationSheme = yup.object().shape({
    email: yup.string().required("Username is required!"),
    pass: yup.string().required("Password is required!"),
});

const LogInComponent = () => {

    const onFormSubmit = (values,{resetForm}) => {
        resetForm();
    };

    return (
        <div>
            <h3 style={{marginTop: 20}}> Login to an existing account </h3>
            <Formik onSubmit={onFormSubmit} 
                    validationSchema={validationSheme}
                    initialValues={{ email: '', pass: '' }}>
                <Form className="ui form">

                    <div className="field" style={{ overflow: "hidden",marginTop: 40 }}>
                        <label htmlFor="email"> Username: </label>
                        <div style={{ float: "left" }}>
                            <Field type="text"name="email" placeholder="Email address.." style={{ width: 260, marginLeft: 60 }}/>
                        </div>

                        <div style={{ float: "left", marginLeft: 35 }}>
                            <ErrorMessage name="email">
                                {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div className="field" style={{ overflow: "hidden" }}>
                        <label htmlFor="pass"> Password: </label>
                        <div style={{ float: "left" }}>
                            <Field type="password" name="pass" placeholder="Password.." style={{ width: 260, marginLeft: 60 }}/>
                        </div>
            
                        <div style={{ float: "left", marginLeft: 35 }}>
                            <ErrorMessage name="pass">
                                {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="ui small blue button"> {" "} Log In {" "} </button>
                </Form>
            </Formik>
        </div>
    );
}

export default LogInComponent;