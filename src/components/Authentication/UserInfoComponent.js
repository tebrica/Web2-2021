import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';
import pictureMapper from '../../constants/PictureHandler';
import { UpdateUser } from '../../store/actions';
import { useHistory } from 'react-router';

const UserInfoComponent = () => {

    const dispatch = useDispatch();
    const user = useSelector(loggedUserSelector);
    let initialValues = { email: '', DatumRodjenja: '', Ime: '', Prezime: '', UserType: '' }

    const { push } = useHistory();
    
    if (user === undefined || user === null) {
        push('/Unauthorized')
    }
    else {
        initialValues = { email: user.Username, DatumRodjenja: user.DatumRodjenja, Ime: user.Ime, Prezime: user.Prezime, UserType: user.VrsteKorisnika }
    }

    const onFormSubmit = (values, {resetForm}) => {
        resetForm();
        let vals = { Id: user.Id, Username: user.Username, DatumRodjenja: values.DatumRodjenja, Ime: values.Ime, Prezime: values.Prezime, NazivProfilneSlike: values.file.name, UserType: values.UserType }
        dispatch(UpdateUser(vals));
    }

    return (<div style={{ backgroundColor: 'grey', height: 720 }}> 
        <div className="ui raised padded container segment" style={{ position: 'fixed', top: 95, left: 200, width: 1250, height: 580 }} >
        <h3 className="ui top attached ui center aligned header header" style={{ background: 'lightgreen' }}> User account information </h3>

        <Formik onSubmit={onFormSubmit}
                initialValues={initialValues}>

            {({setFieldValue}) => (

            <Form>
                <table className="ui table" style={{ marginTop: 30, padding: 10 }}>
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
                            <td> Account type (User role): </td>
                            <td>
                                <select className="ui dropdown" style={{ width: 180 }} onChange={(e) => setFieldValue("UserType",e.target.value)}>
                                    <option value="CLANEKIPE"> Clan ekipe </option>
                                    <option value="DISPECER"> Dispecer </option>
                                    <option value="RADNIK"> Radnik </option>
                                    <option value="POTROSAC"> Potrosac </option>
                                    <option value="ADMINISTRATOR"> Administrator </option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div style={{ marginTop: 22, marginLeft: 20 }}>
                                    <img src={pictureMapper(user.NazivProfilneSlike)} alt="Nema slike" style={{ height: 180, width: 180, marginTop: 10 }}/>
                                </div>
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

    </div>
    </div>)
}

export default UserInfoComponent;