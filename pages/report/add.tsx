import { Button, Form, message } from 'antd';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useAddReportMutation } from '@/store/apis/reportApi';
import { useRouter } from 'next/router';
import ReportAreaWrap from '@/components/organisms/ReportAreaWrap';
import ReportScoreWrap from '@/components/organisms/ReportScoreWrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReportAreaType, ReportScoreType } from '@/types';
import { REPORT_SCHEMA } from '@/schemas';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';

type Inputs = ReportAreaType & ReportScoreType;

const schema = yup.object().shape({
    a1: REPORT_SCHEMA.area,
    a2: REPORT_SCHEMA.area,
    a3: REPORT_SCHEMA.area,
    apartId: REPORT_SCHEMA.area,

    space: REPORT_SCHEMA.score,
    middle: REPORT_SCHEMA.score,
    elementary: REPORT_SCHEMA.score,
    kindergarten: REPORT_SCHEMA.score,
    barrier: REPORT_SCHEMA.score,
    hill: REPORT_SCHEMA.score,
    layout: REPORT_SCHEMA.score,
    distance: REPORT_SCHEMA.score,
    sound: REPORT_SCHEMA.score,
    underground: REPORT_SCHEMA.score,
    parking: REPORT_SCHEMA.score,
    clean: REPORT_SCHEMA.score,
    playground: REPORT_SCHEMA.score,
    store: REPORT_SCHEMA.score,
    atm: REPORT_SCHEMA.score,
});

const Add = () => {
    const router = useRouter();
    const form = useForm<Inputs>({
        resolver: yupResolver(schema),
    });
    const [addReport] = useAddReportMutation();

    const onSubmit: SubmitHandler<Inputs> = async (body: any) => {
        console.log(body);

        try {
            await addReport(body).unwrap();
            await message.success('보고서를 생성합니다.');
            await router.push('/report');
        } catch (e: any) {
            message.warning(e.data.message);
        }
    };

    return (
        <FormProvider {...form}>
            <Form onFinish={form.handleSubmit(onSubmit)}>
                <ReportAreaWrap />
                <ReportScoreWrap />

                <Button type="primary" htmlType="submit" block>
                    저장
                </Button>
            </Form>
        </FormProvider>
    );
};

export default Add;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allCookies = cookies(context);
    const token = allCookies.esToken;

    if (!token) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        };
    }

    return {
        props: {},
    };
};
