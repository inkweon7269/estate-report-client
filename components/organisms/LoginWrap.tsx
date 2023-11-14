import Field from '@/components/atoms/Field';
import FieldInput from '@/components/atoms/FieldInput';
import FieldErrorMsg from '@/components/atoms/FieldErrorMsg';
import { useFormContext } from 'react-hook-form';

const LoginWrap = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <Field>
                <FieldInput label="이메일" name="email" placeholder="이메일" control={control} />

                {errors?.email && <FieldErrorMsg message={errors.email.message} />}
            </Field>

            <Field mb={25}>
                <FieldInput type="password" label="비밀번호" name="password" placeholder="비밀번호" control={control} />

                {errors?.password && <FieldErrorMsg message={errors.password.message} />}
            </Field>
        </>
    );
};

export default LoginWrap;
