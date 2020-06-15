import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

export const UserForm = () => {

    const initialValues = {
        name : '',
        email : '',
        password: '',
        confirmPassword:''
    }

    const onSubmit = values => {
        console.log(values);
    }

    const validationSchema = yup.object({
        name : yup.string().required('Name is Required').strict().trim().min(4, 'Minimum 4 characters required').max(15, 'Maximum 15 characters are only allowed'),
        email : yup.string().email('Incorrect Email Format').required('Email is Required'),
        password : yup.string().required('Password is Required').strict().trim().min(6, 'Minimum 6 characters is Required'),
        confirmPassword : yup.string().oneOf([yup.ref('password'), null], 'Password must be same').required('Confirm Password is Required')
    })

    return (
      <div className="container m-3">
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                className="form-control w-50"
              />
              <ErrorMessage name="name">
                    {
                        ErrorMessage => <div className="text-danger">{ErrorMessage}</div>
                    }
               </ErrorMessage>   
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    className="form-control w-50"
                />
                <ErrorMessage name="email">
                    {
                        ErrorMessage => <div className="text-danger">{ErrorMessage}</div>
                    }
                 </ErrorMessage>   
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    className="form-control w-50"
                />
                <ErrorMessage name="password">
                    {
                        ErrorMessage => <div className="text-danger">{ErrorMessage}</div>
                    }
                </ErrorMessage>   
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field 
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter Confirm Password"
                    className="form-control w-50"
                />
                <ErrorMessage name="confirmPassword">
                    {
                        ErrorMessage => <div className="text-danger">{ErrorMessage}</div>
                    }
                </ErrorMessage>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </Form>
        </Formik>
      </div>
    );
}

