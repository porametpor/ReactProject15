import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const LoginForm = () => {
    const initialvalues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required!'),
        password: Yup.string().required('Required!')
    })
    const onSubmit = (values) => {
        console.log(values);
    }
    return (
        <Formik
            initialValues={initialvalues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
                {
                    formik => {
                        console.log(formik.isValid)
                        return (
                            <Form>
                                <FormikControl control='input' type='email' label='Email' name='email'/>
                                <FormikControl control='input' type='password' label='Password' name='password'/>
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                            </Form>
                        );
                    }
                }
        </Formik>
    );
};

export default LoginForm;