import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import makeid from '../../constants/RandomGenerator';
import { useDispatch } from 'react-redux';
import { AddNewDevice } from '../../store/actions';

const validationSheme = yup.object().shape({
    Name: yup.string().required('Required'),
    OpremaType: yup.string().required('Required'),
    Coordinates: yup.string().required('Required'),
    Address: yup.string().required('Required')
})

const NewDeviceComponent = ({ setCurrentPage, incidentId, headerPosted }) => {

    const dispatch = useDispatch();
    
    const onFormSubmit = (values,{resetForm}) => {
        resetForm();
        if (!headerPosted) {
            alert('You need to post basic incident information first!')
            return;
        }
        const vals = values;
        vals.IncidentId = incidentId;
        vals.IdOprema = 'OPR_' + makeid(5)
        dispatch(AddNewDevice(vals));
        setCurrentPage(1)
    }
    
    return (<div className="ui raised container segment" style={{ width: 600 }}>

        <h2 style={{ marginLeft: 180, marginBottom: 50 }}> Dodavanje opreme: </h2>

        <Formik
        onSubmit={onFormSubmit}
        initialValues={{ Name: '', OpremaType: '', Coordinates: '', Address: '' }}
        validationSchema={validationSheme}>

            <Form style={{ marginLeft: 120 }}>

                <label htmlFor="Name" style={{ marginRight: 40 }}> Device name: </label>
                <div className="ui input">
                    <Field type="text" name="Name" placeholder="Name.." />
                </div>
                <ErrorMessage name="Name">
                    {(msg) => <div style={{ color: "red", marginLeft: 120 }}> {msg} </div>}
                </ErrorMessage>

                <br/>
                <br/>

                <label htmlFor="OpremaType" style={{ marginRight: 20 }}> Equipment type: </label>
                <div className="ui input">
                    <Field type="text" name="OpremaType" placeholder="Equipment type.." />
                </div>
                <ErrorMessage name="OpremaType">
                    {(msg) => <div style={{ color: "red", marginLeft: 120 }}> {msg} </div>}
                </ErrorMessage>

                <br/>
                <br/>

                <label htmlFor="Coordinates" style={{ marginRight: 40 }}> Coordinates: </label>
                <div className="ui input">
                    <Field type="text" name="Coordinates" placeholder="Coordinates.." />
                </div>
                <ErrorMessage name="Coordinates">
                    {(msg) => <div style={{ color: "red", marginLeft: 120 }}> {msg} </div>}
                </ErrorMessage>

                <br/>
                <br/>

                <label htmlFor="Address" style={{ marginRight: 65 }}> Address: </label>
                <div className="ui input">
                    <Field type="text" name="Address" placeholder="Address.." />
                </div>
                <ErrorMessage name="Address">
                    {(msg) => <div style={{ color: "red", marginLeft: 120 }}> {msg} </div>}
                </ErrorMessage>

                <br/>
                <button className="ui tiny primary button" type="submit" style={{ marginTop: 40, marginLeft: 120 }}> 
                    <i className="save icon"></i>
                    Add device 
                </button>

            </Form>
        </Formik>
    </div>);
}

export default NewDeviceComponent;