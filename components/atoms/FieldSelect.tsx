import React from 'react';
import { Controller } from 'react-hook-form';
import { Select } from 'antd';

export interface IPropsSelect {
    label: string;
    control: any;
    name: string;
    placeholder?: string;
    options: { value: string | number; label: string | React.ReactNode; disabled?: boolean }[];
    style?: any;
    onChange?: (data: any) => void;
}

const FieldSelect = ({ label, control, name, options, style, onChange }: IPropsSelect) => {
    return (
        <div>
            <label>{label}</label>
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState }) => {
                    return (
                        <Select
                            {...field}
                            options={options}
                            style={style}
                            onChange={(e) => {
                                if (onChange) {
                                    onChange(e);
                                }
                                field.onChange(e);
                            }}
                            // className={fieldState.invalid ? 'custom-input error' : 'custom-input'}
                        />
                    );
                }}
            />
        </div>
    );
};

export default FieldSelect;
