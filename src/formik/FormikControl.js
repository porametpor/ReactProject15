import React from 'react';
import Input from './Input';

const FormikControl = ({ control, ...rest }) => {
    switch (control) {
        case 'input': return <Input {...rest}/>
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkpoint':
        case 'date':
        default: return null
    } 
};

export default FormikControl;