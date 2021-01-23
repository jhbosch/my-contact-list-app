import React, { useState, useContext } from "react";
import { fetchContacts, contactDelete, contactUpdate } from "../../services/contactService";
import Context from "../common/Context";
import { Form, Field } from 'react-final-form'
import styles from "./contact-css-modules.module.css";


  

const Contact = (props) => {


    const [isSubmitting, setSubmitting] = useState (false);
    const [isEditting, setEditting] = useState (false);

    const {dispatch, filters} = useContext(Context);

    const onSubmit = async (values) => {
       
        setSubmitting(true);
        setEditting(!isEditting);
        const data = await contactUpdate(props.id,values);
        if(data && data.error === undefined){
            const data = await fetchContacts(filters);
            await dispatch({ type: 'FETCH_CONTACTS', payload: data })
        }else{
            alert(data.error)
        }
        setSubmitting(false);
        
    }

    const validate = values => {
  
        const errors = {};
        
        if(!values.name ){
          errors.name = 'Required';
        }

        if(!values.address ){
            errors.address = 'Required';
        }

        if(!values.phone_number ){
            errors.phone_number = 'Required';
        }

        if(!values.email ){
            errors.email = 'Required';
        }
      
        return errors;
    }
    

    const deleteContact = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const data = await contactDelete(props.id);
        
        if(data && data.error === undefined){
            const data = await fetchContacts(filters);
            await dispatch({ type: 'FETCH_CONTACTS', payload: data })
        }else{
            alert(data.error)
        }
        setSubmitting(false);
    } 

    const editContact = (e) => {
        e.preventDefault();
        setEditting(!isEditting)
    } 


    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={{name:props.username, address: props.address,phone_number:props.phone,email:props.email}}
            render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div key={props.id} className={styles.contact}>
                    <div className={styles.subcontent_img}>   
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className={styles.avatar} alt="" />
                    </div>
                    <div className={styles.subcontent}>
                        <div className="_label">Name</div>
                        <div>{!isEditting ? props.username : 
                                <Field name="name" >
                                    {({ input, meta }) => (
                                    <>
                                        <input type="text" 
                                        className={meta.touched && meta.error ? '_error_input' : '' }
                                        {...input}
                                        />
                                        {meta.touched && meta.error && <span className="_error">{meta.error}</span>}
                                    </>
                                    )}
                                </Field>}
                        </div>
                    </div >
                    <div className={styles.subcontent}>
                        <div className="_label">Address</div>
                        <div>{!isEditting ? props.address : 
                                <Field name="address" >
                                    {({ input, meta }) => (
                                    <>
                                        <textarea 
                                        className={meta.touched && meta.error ? '_error_input' : '' }
                                        {...input}
                                        ></textarea>
                                        {meta.touched && meta.error && <span className="_error">{meta.error}</span>}
                                    </>
                                    )}
                                </Field>}
                        </div>
                    </div>
                    <div className={styles.subcontent}>
                        <div className="_label">Phone Number</div>
                        <div>{!isEditting ? props.phone: 
                                <Field name="phone_number" >
                                    {({ input, meta }) => (
                                    <>
                                        <input type="text" 
                                        className={meta.touched && meta.error ? '_error_input' : '' }
                                        {...input}
                                        />
                                        {meta.touched && meta.error && <span className="_error">{meta.error}</span>}
                                    </>
                                    )}
                                </Field>}</div>
                    </div>
                    <div className={styles.subcontent}>
                        <div className="_label">Email</div>
                        <div>{!isEditting ? props.email: 
                                <Field name="email" >
                                    {({ input, meta }) => (
                                    <>
                                        <input type="email" 
                                        className={meta.touched && meta.error ? '_error_input' : '' }
                                        {...input}
                                        />
                                        {meta.touched && meta.error && <span className="_error">{meta.error}</span>}
                                    </>
                                    )}
                                </Field>}</div>
                    </div>
                    <div className={styles.subcontent}>
                        <div className={styles.btnAction}>
                            {!isEditting ? <a href="#" disabled={isSubmitting} onClick={editContact}>Editar</a>
                             : <button className={styles.saveLink} type="submit" onSubmit={onSubmit}>Save</button>}
                            <a href="#" disabled={isSubmitting} onClick={deleteContact}>Remove</a>
                            
                            
                        </div>
                    </div>
                </div>
            </form>
            )}
        />
    );
}


export default Contact;