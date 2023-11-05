import React from 'react';
import LoginWrap from '@/components/organisms/LoginWrap';
import FieldInput from '@/components/atoms/FieldInput';
import FieldErrorMsg from '@/components/atoms/FieldErrorMsg';
import Field from '@/components/atoms/Field';
import { useFormContext } from 'react-hook-form';

const JoinWrap = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <LoginWrap />

            <Field mb={25}>
                <FieldInput type="password" label="비밀번호 확인" name="passwordChk" control={control} />

                {errors?.passwordChk && <FieldErrorMsg message={errors.passwordChk.message} />}
            </Field>
        </>
    );
};

export default JoinWrap;
