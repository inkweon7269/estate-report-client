import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

export interface IPropsInput {
    type?: string;
    label: string;
    name: string;
    placeholder?: string;
    control: any;
}

const FieldInput = ({ label, type = 'text', placeholder, ...rest }: IPropsInput) => {
    return (
        <div>
            <label>{label}</label>
            <Controller
                name={rest.name}
                control={rest.control}
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
