import Field from '@/components/atoms/Field';
import FieldSelect from '@/components/atoms/FieldSelect';
import { useFormContext } from 'react-hook-form';
import { useFetchA1Query, useFetchA2Query, useFetchA3Query, useFetchApartListsQuery } from '@/store/apis/areaApi';
import FieldErrorMsg from '@/components/atoms/FieldErrorMsg';

const ReportAreaWrap = () => {
    const {
        control,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();

    const { data: a1Data } = useFetchA1Query(null);
    const { data: a2Data } = useFetchA2Query(watch('a1'), { skip: !watch('a1') });
    const { data: a3Data } = useFetchA3Query(watch('a2'), { skip: !watch('a2') });
    const { data: apartLists } = useFetchApartListsQuery(watch('a3'), { skip: !watch('a3') });

    const setFormValues = (values: { [key: string]: number | null }) => {
        for (const key in values) {
            setValue(key, values[key]);
        }
    };

    const onChangeA1 = (a1: number) => setFormValues({ a1, a2: null, a3: null, apartId: null });
    const onChangeA2 = (a2: number) => setFormValues({ a2, a3: null, apartId: null });
    const onChangeA3 = (a3: number) => setFormValues({ a3, apartId: null });

    return (
        <>
            <Field>
                <FieldSelect
                    label="시도 선택"
                    control={control}
                    name="a1"
                    options={a1Data?.map((item: any) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    style={{ width: '100%' }}
                    onChange={onChangeA1}
                />
                {errors?.a1 && <FieldErrorMsg message={errors.a1.message} />}
            </Field>

            <Field>
                <FieldSelect
                    label="시군구 선택"
                    control={control}
                    name="a2"
                    options={a2Data?.map((item: any) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    style={{ width: '100%' }}
                    onChange={onChangeA2}
                />
                {errors?.a2 && <FieldErrorMsg message={errors.a2.message} />}
            </Field>

            <Field>
                <FieldSelect
                    label="읍면동 선택"
                    control={control}
                    name="a3"
                    options={a3Data?.map((item: any) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    style={{ width: '100%' }}
                    onChange={onChangeA3}
                />
                {errors?.a3 && <FieldErrorMsg message={errors.a3.message} />}
            </Field>

            <Field>
                <FieldSelect
                    label="아파트선택"
                    control={control}
                    name="apartId"
                    options={apartLists?.map((item: any) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    style={{ width: '100%' }}
                />
                {errors?.apartId && <FieldErrorMsg message={errors.apartId.message} />}
            </Field>
        </>
    );
};

export default ReportAreaWrap;
