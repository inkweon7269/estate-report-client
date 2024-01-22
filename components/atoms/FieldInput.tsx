import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from 'antd';

export interface IPropsInput {
    label?: string;
    name: string;
    control: Control | Control<any>;
    type?: string;
    placeholder?: string;
}

const FieldInput = ({ label, name, control, type = 'text', placeholder, ...rest }: IPropsInput) => {
    return (
        <div>
            {label ? <label>{label}</label> : null}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState }) => {
                    return type === 'text' ? (
                        <Input
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            // className={fieldState.invalid ? 'custom-input error' : 'custom-input'}
                        />
                    ) : (
                        <Input.Password
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            // className={fieldState.invalid ? 'custom-input error' : 'custom-input'}
                        />
                    );
                }}
            />
        </div>
    );
};

export default FieldInput;
