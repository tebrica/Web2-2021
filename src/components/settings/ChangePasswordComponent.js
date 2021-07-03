import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import { ChangePassword } from '../../store/actions';


const validationSheme = yup.object().shape({
    OldPassword: yup.string().required('Required'),
    NewPassword: yup.string().required('Required'),
    ConfirmPassword: yup.string().required('Required'),
})

const ChangePasswordComponent = () => {

    const user = useSelector(loggedUserSelector);
    const dispatch = useDispatch();

    const onPasswordChange = (values,{resetForm}) => {
        resetForm();
        if (values.NewPassword !== values.ConfirmPassword) {
            alert('Passwords dont match!')
            return;
        }
        dispatch(ChangePassword(values));
    }

    return <div className="ui green segment" style={{ width: 350 }}>

        <h4> Change password for User: {user.Username} </h4>
        <hr/>

        <Formik 
            onSubmit={onPasswordChange}
            initialValues={{ OldPassword: '', NewPassword: '', ConfirmPassword: '' }}
            validationSchema={validationSheme}>

            <Form>
                <div style={{marginTop: 20, marginLeft: 30}}>
                    <label htmlFor="OldPassword"> Current password: </label>
                    <div className="ui small input focus">
                        <Field type="password" name="OldPassword" placeholder="Old password..." style={{ width: 250 }}/>
                    </div>
                    <ErrorMessage name="OldPassword">
                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                    </ErrorMessage>
                </div>
                <br/>

                <div style={{marginLeft: 30}}>
                    <label htmlFor="NewPassword"> Current password: </label>
                    <div className="ui small input focus">
                        <Field type="password" name="NewPassword" placeholder="New password..." style={{ width: 250 }}/>
                    </div>
                    <ErrorMessage name="NewPassword">
                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                    </ErrorMessage>
                </div>
                <br/>

                <div style={{marginLeft: 30}}>
                    <label htmlFor="ConfirmPassword"> Current password: </label>
                    <div className="ui small input focus">
                        <Field type="password" name="ConfirmPassword" placeholder="Confirm password..." style={{ width: 250 }}/>
                    </div>
                    <ErrorMessage name="ConfirmPassword">
                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                    </ErrorMessage>
                </div>

                <button type="submit" className="ui small primary button" style={{marginLeft: 80, marginTop: 20}}> Apply changes </button>

            </Form>
        </Formik>
    </div>
}

export default ChangePasswordComponent;