import React, { CSSProperties, ReactNode } from 'react';
import { Radio } from 'antd';
import { Control, Controller } from 'react-hook-form';

export interface IPropsRadio {
    label?: string;
    name: string;
    control: Control | Control<any>;
    options: { value: string | number; label: string | ReactNode; disabled?: boolean }[];
    style?: CSSProperties;
}

const FieldRadio = ({ label, options, style, ...rest }: IPropsRadio) => {
    return (
        <div>
            {label ? <label>{label}</label> : null}
            <Controller
                control={rest.control}
                name={rest.name}
                render={({ field, fieldState }) => {
                    return (
                        <Radio.Group
                            {...field}
                            options={options}
                            style={style}
                            // className={fieldState.invalid ? 'custom-input error' : 'custom-input'}
                        />
                    );
                }}
            />
        </div>
    );
};

export default FieldRadio;
