import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Textarea = ({ label, name, type }) => {
    
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' name={name} id={name} type={type}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default Textarea;