import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup';
import './SimpleForm1.css'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    phoneNumber: ['']
}

const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().required('Required!').email('Invalid email format'),
    channel: Yup.string().required('Required!'),
    comment: Yup.string().required('Required!'),
    // const { name, email, channel } = values
    // let error = {}
    // if(!name) error.name = 'Required'
    // if(!email) {
    //     error.email = 'Required'
    // } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     error.email = 'Invalid email format'
    // }
    // if(!channel) error.channel = 'Required'
    // return error
})

const SimpleForm1 = () => {
    console.log('render');
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className='container'>
                <Form className='formControl'>
                    <label htmlFor="name" className='label'>Name</label>
                    <Field id='neme' name='name' className='input' />
                    <ErrorMessage name='name'/>

                    <label htmlFor="email" className='label'>Email</label>
                    <Field id='email' name='email' className='input' />
                    <ErrorMessage name='email'/>

                    <label htmlFor="channel" className='label'>Channel</label>
                    <Field id='channel' name='channel' className='input' />
                    <ErrorMessage name='channel'/>

                    <label htmlFor="comment" className='label'>Comment</label>
                    <Field as='textarea' id='comment' name='comment' className='input' />
                    <ErrorMessage name='comment'/>
                    
                    <label htmlFor="phone" className='label'>Phone Number</label>
                    <FieldArray name='phoneNumber'>
                        {
                            (fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { phoneNumber } = form.values;
                                return (
                                    phoneNumber.map((_, index) => (
                                        <div key={index}>
                                            <Field name={`phoneNumber[${index}]`} className='input' id='phone'/>
                                            {
                                                index > 0 && (
                                                    <button type='button' onClick={()=>remove(index)}>-</button>
                                                )
                                            }
                                            <button type='button' onClick={()=>push(index)}>+</button>
                                        </div>
                                    ))
                                );
                            }
                        }
                    </FieldArray>
                    
                    <button className='button' type='reset'>Reset</button>
                    <button className='button' type='submit'>Submit</button>
                </Form>
            </div>
        </Formik>
    );
};

export default SimpleForm1;