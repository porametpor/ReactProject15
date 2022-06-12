import React from 'react';
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

const Input = ({ label, name, type }) => {
    return (
        <div>
           <label htmlFor={name}>{label}</label>
           <Field name={name} id={name} type={type}/>
           <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default Input;