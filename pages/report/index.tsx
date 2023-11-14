import cookies from 'next-cookies';
import { GetServerSideProps } from 'next';
import { useAddLikeMutation, useDeleteLikeMutation, useFetchReportListsQuery } from '@/store/apis/reportApi';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { message, Spin } from 'antd';
import CardApart from '@/components/organisms/CardApart';
import { FormProvider, useForm } from 'react-hook-form';
import ReportFilerWrap from '@/components/organisms/report/ReportFilerWrap';
import PaginationWrap from '@/components/organisms/PaginationWrap';

interface IPropsPage {
    params: {
        page: number;
        limit: number;
    };
}

const Index = ({ params }: IPropsPage) => {
    const form = useForm();

    const { data, isLoading } = useFetchReportListsQuery(params);
    const [addLike] = useAddLikeMutation();
    const [deleteLike] = useDeleteLikeMutation();

    if (isLoading) {
        return <Spin />;
    }

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
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <ReportFilerWrap />

                <div style={{ overflowY: 'auto', height: '100%', padding: '0 15px' }}>
                    <ul>
                        {data.list.map((item: any) => (
                            <li key={item.id} style={{ marginBottom: 25 }}>
                                <Link href={`/report/${item.id}`}>
                                    <CardApart
                                        id={item.id}
                                        apart={item.apart}
                                        totalScore={item.totalScore}
                                        isLike={item.isLike}
                                        onAddLike={onAddLike}
                                        onDeleteLike={onDeleteLike}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <PaginationWrap params={params} totalResult={data.totalResult} />
            </div>
        </FormProvider>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allCookies = cookies(context);
    const token = allCookies.esToken;
    const params = {
        page: context.query.page ? +context.query.page : 1,
        limit: context.query.limit ? +context.query.limit : 30,
        isLike: context.query.isLike ? context.query.isLike : false,
    };

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
            params,
        },
    };
};
