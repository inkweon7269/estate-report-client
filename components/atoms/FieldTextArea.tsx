import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
const { TextArea } = Input;

export interface IPropsTextArea {
    label: string;
    name: string;
    control: any;
    type?: string;
}

const FieldTextArea = ({ label, name, control }: IPropsTextArea) => {
    return (
        <div>
            <label>{label}</label>
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState }) => {
                    return <TextArea {...field} rows={4} />;
                }}
            />
        </div>
    );
};

export default FieldTextArea;
