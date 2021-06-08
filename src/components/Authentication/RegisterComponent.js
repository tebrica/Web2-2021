import React from 'react';
import { Form, Formik, ErrorMessage,Field } from 'formik';
import * as yup from 'yup'

const validationSheme = yup.object().shape({
    email: yup.string().required("Required!"),
    date: yup.string().required('Required!'),
    ime: yup.string().required('Required!'),
    prz: yup.string().required('Required!'),
    pass: yup.string().required("Required!"),
    pass2: yup.string().required("Required!"),
});

const RegisterComponent = () => {

    const onRegisterSubmit = (values,{resetForm}) => {
        resetForm();
        values.date = document.getElementById('date').value
        if (values.date === '') { return }
        if (values.pass !== values.pass2) { alert('Passwords dont match!'); return; }
        console.log(values)
    }

    return (<div>
        <h3 style={{marginTop: 25}}> Register new account </h3>

        <Formik 
            onSubmit={onRegisterSubmit}
            initialValues={{email : '', date: Date.now(), ime: '', prz: '', pass: '', pass2: ''}}
            validationSchema={validationSheme}>
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
                                        {(msg) => <div style={{ color: "red", marginLeft: 30 }}> {msg} </div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div style={{marginLeft: 0, marginTop: 8}}>
                                <label htmlFor="date"> Datum rodjenja </label>
                                <input id="date" type="date" name="date" style={{ width: 150, marginLeft: 0, height: 38 }} />
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
                                        {(msg) => <div style={{ color: "red", marginLeft: 0 }}> {msg} </div>}
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
                                        {(msg) => <div style={{ color: "red", marginLeft: 0 }}> {msg} </div>}
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
                                        {(msg) => <div style={{ color: "red", marginLeft: 0 }}> {msg} </div>}
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
                                        {(msg) => <div style={{ color: "red", marginLeft: 0 }}> {msg} </div>}
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