import React from 'react';
import { Form, Field } from 'react-final-form'
import styles from "./user-css-modules.module.css";
const validate = values => {
  
  const errors = {};
  
  if(!values.Name){
    errors.Name = 'Required';
  }

  return errors;
}

const onSubmit = values => {
    
    window.alert(JSON.stringify(values, 0, 2))
}

const UserForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className={styles.user}>
          <div className={styles.subcontent_img}>   
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className={styles.avatar} alt="" />
          </div>
          <div className={styles.subcontent}>
              <div className="_label">Name</div>
              <div>
                <Field name="Name" >
                  {({ input, meta }) => (
                    <>
                      <input type="text"
                       className={meta.touched && meta.error ? '_error_input' : '' }
                       {...input}
                      />
                      {meta.touched && meta.error && <span className="_error">{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
          </div >
          <div className={styles.subcontent}>
              <div className="_label">Address</div>
              <Field name="Adress" component="input"  />
          </div>
          <div className={styles.subcontent}>
              <div className="_label">Phone Number</div>
              <Field name="PhoneNumber" component="input"  />
          </div>
          <div className={styles.subcontent}>
              <div className="_label">Email</div>
              <div><Field name="Email" component="input" /></div>
          </div>
          <div className={styles.subcontent}>
              
              <div className={styles.btnAction}>
                <a href="#">Save</a>
                <a href="#">Remove</a>
              </div>
          </div>
        </div>
        {/*<h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>

        <h2>An Arbitrary Reusable Input Component</h2>
        <div>
          <label>Interests</label>
          <Field name="interests" component="input" />
        </div>

        <h2>Render Function</h2>
        <Field
          name="bio"
          render={({ input, meta }) => (
            <div>
              <label>Bio</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <h2>Render Function as Children</h2>
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>Phone</label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

          <button type="submit">Submit</button>*/}
      </form>
    )}
  />
)


export default UserForm;