import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import {
    useAddLikeMutation,
    useDeleteLikeMutation,
    useDeleteReportMutation,
    useFetchReportQuery,
    useUpdateReportMutation,
} from '@/store/apis/reportApi';
import { useRouter } from 'next/router';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Button, Flex, Form, message, Modal, Spin } from 'antd';
import ReportScoreWrap from '@/components/organisms/report/ReportScoreWrap';
import { ReportScoreType } from '@/types';
import * as yup from 'yup';
import { REPORT_SCHEMA } from '@/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import CardApart from '@/components/organisms/CardApart';
import Link from 'next/link';
import { ArrowLeftOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { colors } from '@/styles/variables';

const { confirm } = Modal;

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
    const [addLike] = useAddLikeMutation();
    const [deleteLike] = useDeleteLikeMutation();

    if (isLoading) {
        return <Spin />;
    }

    const onSubmit: SubmitHandler<ReportScoreType> = async (body: any) => {
        try {
            await editReport({ id, body }).unwrap();
            await message.success('보고서를 수정했습니다.');
            await router.push('/report');
        } catch (e: any) {
            message.warning(e.data.message);
        }
    };

    const onDeleteReport = async () => {
        confirm({
            title: '보고서 삭제',
            icon: <ExclamationCircleFilled />,
            content: '정말 삭제하겠습니까?',
            okText: '네',
            okType: 'danger',
            cancelText: '아니오',
            async onOk() {
                try {
                    await deleteReport(id).unwrap();
                    await message.success('보고서를 삭제했습니다.');
                    await router.push('/report');
                } catch (error) {
                    console.log(error);
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const onAddLike = async (reportId: number) => {
        const body = { reportId };
        try {
            await addLike(body).unwrap();
            await message.success('즐겨찾기에 추가했습니다.');
        } catch (e: any) {
            message.warning(e.data.message);
        }
    };

    const onDeleteLike = async (reportId: number) => {
        const body = { reportId };
        try {
            await deleteLike(body).unwrap();
            await message.success('즐겨찾기에 삭제했습니다.');
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
                        <div style={{ marginBottom: 25 }}>
                            <CardApart
                                id={Number(id)}
                                apart={data.apart}
                                totalScore={data.totalScore}
                                isLike={data.isLike}
                                onAddLike={onAddLike}
                                onDeleteLike={onDeleteLike}
                            />
                        </div>
                        <ReportScoreWrap />
                    </div>

                    <Flex justify="space-between" style={{ background: colors.white }}>
                        <Button
                            type="primary"
                            danger={true}
                            htmlType="button"
                            block
                            onClick={onDeleteReport}
                            style={{ borderRadius: 0 }}
                        >
                            삭제
                        </Button>

                        <Button type="primary" htmlType="submit" block style={{ borderRadius: 0 }}>
                            수정
                        </Button>
                    </Flex>
                </Flex>
            </Form>
        </FormProvider>
    );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allCookies = cookies(context);
    const token = allCookies.accessToken;
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
