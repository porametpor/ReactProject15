import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Radio = ({name, label, options, ...rest}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return (
                            options.map(option => {
                                return (
                                    <React.Fragment key={option.key}>
                                        <input type="radio" id={option.key} {...field} value={option.value} checked={field.value === option.value}/>
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </React.Fragment>
                                )
                            })
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default Radio;