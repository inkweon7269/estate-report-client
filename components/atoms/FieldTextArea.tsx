import { CSSProperties } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
const { TextArea } = Input;

export interface IPropsTextArea {
    label: string;
    name: string;
    control: any;
    style?: CSSProperties;
}

const FieldTextArea = ({ label, name, control, style }: IPropsTextArea) => {
    return (
        <div>
            <label>{label}</label>
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState }) => {
                    return <TextArea {...field} rows={4} style={style} />;
                }}
            />
        </div>
    );
};

export default FieldTextArea;
