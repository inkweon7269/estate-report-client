import Field from '@/components/atoms/Field';
import FieldRadio from '@/components/atoms/FieldRadio';
import { useFormContext } from 'react-hook-form';
import FieldErrorMsg from '@/components/atoms/FieldErrorMsg';
import FieldTextArea from '@/components/atoms/FieldTextArea';

const ReportScoreWrap = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <Field>
                <FieldRadio
                    label="주차 대수"
                    control={control}
                    name="space"
                    options={[
                        { label: '1대 이상', value: 10 },
                        { label: '0.7대 이상', value: 7 },
                        { label: '0.5대 이상', value: 5 },
                        { label: '0.5대 미만', value: 3 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.space && <FieldErrorMsg message={errors.space.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="중학교"
                    control={control}
                    name="middle"
                    options={[
                        { label: '95점 이상', value: 10 },
                        { label: '90점 이상', value: 7 },
                        { label: '85점 이상', value: 5 },
                        { label: '85점 미만', value: 3 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.middle && <FieldErrorMsg message={errors.middle.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="초등학교"
                    control={control}
                    name="elementary"
                    options={[
                        { label: '초품아', value: 10 },
                        { label: '초등학교 인접', value: 5 },
                        { label: '주변에 없음', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.elementary && <FieldErrorMsg message={errors.elementary.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="유치원/어린이집"
                    control={control}
                    name="kindergarten"
                    options={[
                        { label: '단지 내', value: 2 },
                        { label: '없음', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.kindergarten && <FieldErrorMsg message={errors.kindergarten.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="입구 차단기"
                    control={control}
                    name="barrier"
                    options={[
                        { label: '있음', value: 1 },
                        { label: '없음', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.barrier && <FieldErrorMsg message={errors.barrier.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="언덕 여부"
                    control={control}
                    name="hill"
                    options={[
                        { label: '평지', value: 2 },
                        { label: '약간 언덕', value: 1 },
                        { label: '가파름', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.hill && <FieldErrorMsg message={errors.hill.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="동별 배치"
                    control={control}
                    name="layout"
                    options={[
                        { label: '우수', value: 2 },
                        { label: '보통', value: 1 },
                        { label: '복잡', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.layout && <FieldErrorMsg message={errors.layout.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="동간 거리"
                    control={control}
                    name="distance"
                    options={[
                        { label: '우수', value: 2 },
                        { label: '보통', value: 1 },
                        { label: '복잡', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.distance && <FieldErrorMsg message={errors.distance.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="소음 여부"
                    control={control}
                    name="sound"
                    options={[
                        { label: '없음', value: 1 },
                        { label: '있음', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.sound && <FieldErrorMsg message={errors.sound.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="지하주차장 여부"
                    control={control}
                    name="underground"
                    options={[
                        { label: '있음', value: 1 },
                        { label: '없음', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.underground && <FieldErrorMsg message={errors.underground.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="주차 상태"
                    control={control}
                    name="parking"
                    options={[
                        { label: '우수', value: 2 },
                        { label: '보통', value: 1 },
                        { label: '복잡', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.parking && <FieldErrorMsg message={errors.parking.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="단지 청결도"
                    control={control}
                    name="clean"
                    options={[
                        { label: '우수', value: 2 },
                        { label: '보통', value: 1 },
                        { label: '지저분', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.clean && <FieldErrorMsg message={errors.clean.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="놀이터 상태"
                    control={control}
                    name="playground"
                    options={[
                        { label: '우수', value: 2 },
                        { label: '보통', value: 1 },
                        { label: '지저분', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.playground && <FieldErrorMsg message={errors.playground.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="상가"
                    control={control}
                    name="store"
                    options={[
                        { label: '관리 우수', value: 2 },
                        { label: '보통', value: 1 },
                        { label: '공실 많음', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.store && <FieldErrorMsg message={errors.store.message} />}
            </Field>

            <Field>
                <FieldRadio
                    label="atm"
                    control={control}
                    name="atm"
                    options={[
                        { label: '있음', value: 1 },
                        { label: '없음', value: 0 },
                    ]}
                    style={{ width: '100%' }}
                />
                {errors?.atm && <FieldErrorMsg message={errors.atm.message} />}
            </Field>

            <Field>
                <FieldTextArea label="단지 특징 (선택)" name="memo" control={control} />
            </Field>
        </>
    );
};

export default ReportScoreWrap;
