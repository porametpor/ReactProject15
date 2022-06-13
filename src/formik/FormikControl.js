import React from 'react';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

const FormikControl = ({ control, ...rest }) => {
    switch (control) {
        case 'input': return <Input {...rest}/>
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest}/>
        case 'radio': return <Radio {...rest}/>
        case 'checkbox': return <Checkbox {...rest}/>
        case 'date':
        default: return null
    } 
};

export default FormikControl;