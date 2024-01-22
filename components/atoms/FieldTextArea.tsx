import React, { CSSProperties } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from 'antd';
const { TextArea } = Input;

export interface IPropsTextArea {
    label?: string;
    name: string;
    control: Control | Control<any>;
    placeholder?: string;
    style?: CSSProperties;
}

const FieldTextArea = ({ label, name, control, placeholder, style }: IPropsTextArea) => {
    return (
        <div>
            {label ? <label>{label}</label> : null}
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState }) => {
                    return <TextArea {...field} rows={4} placeholder={placeholder} style={style} />;
                }}
            />
        </div>
    );
};

export default FieldTextArea;
