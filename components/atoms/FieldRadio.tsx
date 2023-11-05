import React from 'react';
import { Radio } from 'antd';
import { Controller } from 'react-hook-form';

export interface IPropsRadio {
    label: string;
    control: any;
    name: string;
    options: { value: string | number; label: string | React.ReactNode; disabled?: boolean }[];
}

const FieldRadio = ({ label, options, ...rest }: IPropsRadio) => {
    return (
        <div>
            <label>{label}</label>
            <Controller
                control={rest.control}
                name={rest.name}
                render={({ field, fieldState }) => {
                    return (
                        <Radio.Group
                            {...field}
                            options={options}
                            // className={fieldState.invalid ? 'custom-input error' : 'custom-input'}
                        />
                    );
                }}
            />
        </div>
    );
};

export default FieldRadio;
