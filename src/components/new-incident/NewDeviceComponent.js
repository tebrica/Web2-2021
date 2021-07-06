import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import makeid from '../../constants/RandomGenerator';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewDevice } from '../../store/actions';
import { editIncidentSelector } from '../../store/selectors/AuthSelector';

const validationSheme = yup.object().shape({
    Name: yup.string().required('Required'),
    OpremaType: yup.string().required('Required'),
    Address: yup.string().required('Required'),
    Number: yup.number().required('Required').min(1,'Must be > 1')
})

const NewDeviceComponent = ({ setCurrentPage, incidentId, headerPosted }) => {

    const dispatch = useDispatch();
    const editIncident = useSelector(editIncidentSelector);
    
    const onFormSubmit = (values,{resetForm}) => {
        resetForm();
        if (editIncident === null) {
            if (!headerPosted) {
                alert('You need to post basic incident information first!')
                return;
            }
        }
        const vals = values;
        vals.IncidentId = editIncident === null ? incidentId : editIncident.ID;
        vals.IdOprema = 'OPR_' + makeid(5)
        dispatch(AddNewDevice(vals));
        setCurrentPage(1)
    }
    
    console.log(headerPosted)

    return (<div className="ui raised container segment" style={{ width: 600 }}>

        <h2 style={{ marginLeft: 180, marginBottom: 50 }}> Dodavanje opreme: </h2>

        <Formik
        onSubmit={onFormSubmit}
        initialValues={{ Name: '', OpremaType: '', Address: '', Number: 0 }}
        validationSchema={validationSheme}>

            <Form style={{ marginLeft: 60 }}>

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

                <div style={{ overflow: 'hidden' }}>
                    <div style={{ float: 'left' }}>
                        <label htmlFor="Address" style={{ marginRight: 10 }}> {'Address & Number:'} </label>
                        <div className="ui input">
                            <Field type="text" name="Address" placeholder="Address.." />
                        </div>
                        <ErrorMessage name="Address">
                            {(msg) => <div style={{ color: "red", marginLeft: 120 }}> {msg} </div>}
                        </ErrorMessage>
                    </div>

                    <div style={{ float: 'left', marginLeft: 20 }}>
                        <div className="ui input" style={{width: 80}}>
                            <Field type="number" name="Number" placeholder="Num."/>
                        </div>
                        <ErrorMessage name="Number">
                            {(msg) => <div style={{ color: "red", marginLeft: 10 }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                </div>

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