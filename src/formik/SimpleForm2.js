import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const initialValues = {
    email: ''
}

const validationSchema = Yup.object({
    email: Yup.string().required('Required!')
})

const onSubmit = (values) => {
    console.log(values);
}

const SimpleForm2 = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => (
                    <Form>
                        <FormikControl control='input' type='email' name='email' label='email'/>
                        <button type='submit'>Summit</button>
                    </Form>
                )
            }
        </Formik>
    );
};

export default SimpleForm2;