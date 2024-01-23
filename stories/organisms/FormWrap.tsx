import Field from '@/components/atoms/Field';
import FieldInput from '@/components/atoms/FieldInput';
import FieldErrorMsg from '@/components/atoms/FieldErrorMsg';
import { useForm } from 'react-hook-form';
import FieldSelect from '@/components/atoms/FieldSelect';
import { Form } from 'antd';
import FieldRadio from '@/components/atoms/FieldRadio';
import FieldTextArea from '@/components/atoms/FieldTextArea';

const FormWrap = () => {
    const {
        control,
        formState: { errors },
    } = useForm();

    return (
        <Form layout="vertical">
            <Field>
                <FieldInput label="이메일" name="email" placeholder="이메일" control={control} />
                {errors?.email && <FieldErrorMsg message={errors.email.message} />}
            </Field>

            <Field>
                <FieldInput type="password" label="비밀번호" name="password" placeholder="비밀번호" control={control} />
                {errors?.password && <FieldErrorMsg message={errors.password.message} />}
            </Field>

            <Field>
                <FieldSelect
                    label="성별"
                    name="gender"
                    placeholder="성별"
                    control={control}
                    options={[
                        { label: '남', value: 'male' },
                        { label: '여', value: 'female' },
                    ]}
                />
            </Field>
            <Field>
                <FieldRadio
                    label="성별"
                    name="gender"
                    control={control}
                    options={[
                        { label: '남', value: 'male' },
                        { label: '여', value: 'female' },
                    ]}
                />
            </Field>

            <Field>
                <FieldTextArea
                    label="자기소개"
                    name="intro"
                    placeholder="50자 이내로 작성해 주세요."
                    control={control}
                />
            </Field>
        </Form>
    );
};

export default FormWrap;
