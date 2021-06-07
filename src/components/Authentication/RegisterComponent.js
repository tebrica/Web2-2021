import { Form, Formik, ErrorMessage,Field } from 'formik';
import React from 'react';

const RegisterComponent = () => {

    const onRegisterSubmit = (values,{resetForm}) => {
        resetForm();
    }

    return (<div>
        <h3 style={{marginTop: 25}}> Register new account </h3>

        <Formik onSubmit={onRegisterSubmit}>
            <Form className="ui form">
                <table>
                    <tr>
                        <td>
                            <div className="field" style={{ overflow: "hidden",marginTop: 10 }}>
                                <label htmlFor="email"> Username: </label>
                                <div style={{ float: "left" }}>
                                    <Field type="text"name="email" placeholder="Email address.." style={{ width: 150, marginLeft: 20 }}/>
                                </div>

                                <div style={{ float: "left" }}>
                                    <ErrorMessage name="email">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div>
                                {/* <Field name="date" as={DatePicker} /> */}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field" style={{ overflow: "hidden" }}>
                                <label htmlFor="ime"> Ime: </label>
                                <div style={{ float: "left" }}>
                                    <Field type="text"name="ime" placeholder="Ime.." style={{ width: 150, marginLeft: 20 }}/>
                                </div>

                                <div style={{ float: "left", marginLeft: 35 }}>
                                    <ErrorMessage name="ime">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className="field" style={{ overflow: "hidden" }}>
                                <label htmlFor="prz"> Prezime: </label>
                                <div style={{ float: "left" }}>
                                    <Field type="text"name="prz" placeholder="Prezime.." style={{ width: 150, marginLeft: 0 }}/>
                                </div>

                                <div style={{ float: "left", marginLeft: 35 }}>
                                    <ErrorMessage name="prz">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="field" style={{ overflow: "hidden" }}>
                                <label htmlFor="pass"> Password: </label>
                                <div style={{ float: "left" }}>
                                    <Field type="password" name="pass" placeholder="Password.." style={{ width: 150, marginLeft: 20 }}/>
                                </div>
            
                                <div style={{ float: "left", marginLeft: 35 }}>
                                    <ErrorMessage name="pass">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className="field" style={{ overflow: "hidden" }}>
                                <label htmlFor="pass2"> Repeat Password: </label>
                                <div style={{ float: "left" }}>
                                    <Field type="password" name="pass2" placeholder="Password.." style={{ width: 150, marginLeft: 0 }}/>
                                </div>
                
                                <div style={{ float: "left", marginLeft: 35 }}>
                                    <ErrorMessage name="pass2">
                                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                
                <br/>
                <button type="submit" className="ui small blue button"> {" "} Log In {" "} </button>

            </Form>
        </Formik>

    </div>);
}

export default RegisterComponent;