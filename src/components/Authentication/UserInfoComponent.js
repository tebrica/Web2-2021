import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import pictureMapper from '../../constants/PictureHandler';
import { UpdateUser } from '../../store/actions';

const UserInfoComponent = () => {

    const dispatch = useDispatch();
    const user = useSelector(loggedUserSelector);

    console.log(user)

    const onFormSubmit = (values, {resetForm}) => {
        resetForm();
        let vals = { Id: user.Id, Username: user.Username, DatumRodjenja: values.DatumRodjenja, Ime: values.Ime, Prezime: values.Prezime, NazivProfilneSlike: values.file.name }
        dispatch(UpdateUser(vals));
    }

    return (<div className="ui container segment" style={{ position: 'fixed', top: 70, left: 180, width: 1000 }} >
        <h3 className="ui top attached header"> User account information </h3>

        <Formik onSubmit={onFormSubmit}
                initialValues={{ email: user.Username, DatumRodjenja: '', Ime: '', Prezime: '' }}>

            {({setFieldValue}) => (

            <Form>
                <table className="ui table" style={{ marginTop: 30 }}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td> Username: </td>
                            <td>
                                <div className="ui disabled input">
                                    <input type="text" defaultValue={user.Username}/>
                                </div> 
                            </td>
                            <td> Datum rođenja: </td>
                            <td> 
                                <div className="ui small input focus">
                                    <Field type="date" name="DatumRodjenja" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td> Ime: </td>
                            <td>
                                <div className="ui small input focus">
                                    <Field type="text" name="Ime" placeholder="Ime..."/>
                                </div>
                            </td>
                            <td> Prezime: </td>
                            <td>
                                <div className="ui small input focus">
                                    <Field type="text" name="Prezime" placeholder="Prezime..."/>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                               <img src={pictureMapper(user.NazivProfilneSlike)} alt="Nema slike" style={{ height: 180, width: 180 }}/>
                            </td>
                            <td>
                                <div className="ui raised container segment" style={{ width: 220, backgroundColor: 'lightgreen' }}>
                                    <h5> Change profile picture </h5>
                                    <hr/>
                                    <input className="ui image" name="file" type="file" style={{width: 210, marginTop: 15}} onChange={(e) => {setFieldValue("file",e.currentTarget.files[0])}} />
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <button className="ui primary button" type="submit"> 
                                    <i className="save icon"></i>
                                    Save changes 
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </Form>
            )}
        </Formik>

    </div>)
}

export default UserInfoComponent;