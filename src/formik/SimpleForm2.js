import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radio: '',
    checkbox: []
}

const dropdownOptions = [
    { key: 'Select an option', value: ''},
    { key: 'Option 1', value: 'Option 1'},
    { key: 'Option 2', value: 'Option 2'},
    { key: 'Option 3', value: 'Option 3'},
]

const radio = [
    { key: 'Option 1', value: 'Option 1'},
    { key: 'Option 2', value: 'Option 2'},
    { key: 'Option 3', value: 'Option 3'},
]

const checkBox = [
    { key: 'Option 1', value: 'cOption 1'},
    { key: 'Option 2', value: 'cOption 2'},
    { key: 'Option 3', value: 'cOption 3'},
]

const validationSchema = Yup.object({
    email: Yup.string().required('Required!'),
    description: Yup.string().required('Required!'),
    selectOption: Yup.string().required('Required!'),
    radio: Yup.string().required('Required!'),
    checkbox: Yup.array().required('Required!')
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
                        <FormikControl control='input' type='email' name='email' label='Email'/>
                        <FormikControl control='textarea' type='text' name='description' label='Description'/>
                        <FormikControl control='select' type='select' name='selectOption' label='Select a topic'  options={dropdownOptions}/>
                        <FormikControl control= 'radio' label='Radio Topic' name='radio' options={radio}/>
                        <FormikControl control= 'checkbox' label='Checkbox Topic' name='checkbox' options={checkBox}/>
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    );
};

export default SimpleForm2;