import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { useDeleteReportMutation, useFetchReportQuery, useUpdateReportMutation } from '@/store/apis/reportApi';
import { useRouter } from 'next/router';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Button, Form, message, Spin } from 'antd';
import ReportScoreWrap from '@/components/organisms/ReportScoreWrap';
import { ReportScoreType } from '@/types';
import * as yup from 'yup';
import { REPORT_SCHEMA } from '@/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import CardApart from '@/components/organisms/CardApart';

const schema = yup.object().shape({
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

const Detail = ({ id }: { id: string }) => {
    const { data, isLoading } = useFetchReportQuery(id);
    const router = useRouter();
    const form = useForm<ReportScoreType>({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (!isLoading) {
            console.log(data);
            form.reset(data);
        }
    }, [isLoading]);

    const [editReport] = useUpdateReportMutation();
    const [deleteReport] = useDeleteReportMutation();

    const onSubmit: SubmitHandler<ReportScoreType> = async (body: any) => {
        try {
            await editReport({ id, body }).unwrap();
            await message.success('보고서를 수정했습니다.');
            await router.push('/report');
        } catch (e: any) {
            message.warning(e.data.message);
        }
    };

    const onClickDelete = async () => {
        try {
            await deleteReport(id).unwrap();
            await router.push('/report');
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) {
        return <Spin />;
    }

    return (
        <FormProvider {...form}>
            <Form onFinish={form.handleSubmit(onSubmit)}>
                <div style={{ marginBottom: 25 }}>
                    <CardApart apart={data.apart} score={data.totalScore} />
                </div>
                <ReportScoreWrap />
                <Button type="primary" htmlType="submit" block>
                    수정
                </Button>
                <Button type="primary" danger={true} htmlType="button" block onClick={onClickDelete}>
                    삭제
                </Button>
            </Form>
        </FormProvider>
    );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allCookies = cookies(context);
    const token = allCookies.esToken;
    const id = context.params?.id;

    if (!token) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        };
    }

    return {
        props: {
            id,
        },
    };
};
