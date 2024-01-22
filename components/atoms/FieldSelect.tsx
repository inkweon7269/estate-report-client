import { CSSProperties, ReactNode } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Select } from 'antd';

export interface IPropsSelect {
    label?: string;
    name: string;
    control: Control | Control<any>;
    placeholder?: string;
    options: { value: string | number | boolean | null; label: string | ReactNode; disabled?: boolean }[];
    style?: CSSProperties;
    onChange?: (data: any) => void;
}

const FieldSelect = ({ label, control, name, options, placeholder, style, onChange }: IPropsSelect) => {
    return (
        <div>
            {label ? <label>{label}</label> : null}
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState }) => {
                    return (
                        <Select
                            {...field}
                            options={options}
                            placeholder={placeholder}
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
