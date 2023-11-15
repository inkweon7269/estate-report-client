import { Button, Flex, Form, message } from 'antd';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useAddReportMutation } from '@/store/apis/reportApi';
import { useRouter } from 'next/router';
import ReportAreaWrap from '@/components/organisms/report/ReportAreaWrap';
import ReportScoreWrap from '@/components/organisms/report/ReportScoreWrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReportAreaType, ReportScoreType } from '@/types';
import { REPORT_SCHEMA } from '@/schemas';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';

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
            <Form onFinish={form.handleSubmit(onSubmit)} style={{ height: '100%' }}>
                <Flex vertical={true} justify="space-between" style={{ height: '100%' }}>
                    <div style={{ padding: 15 }}>
                        <Link href="/report" style={{ fontSize: 15 }}>
                            <ArrowLeftOutlined />
                        </Link>
                    </div>

                    <div style={{ overflowY: 'scroll', padding: '0 15px' }}>
                        <ReportAreaWrap />
                        <ReportScoreWrap />
                    </div>

                    <Button type="primary" htmlType="submit" block>
                        저장
                    </Button>
                </Flex>
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
