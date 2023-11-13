import cookies from 'next-cookies';
import { GetServerSideProps } from 'next';
import { useAddLikeMutation, useDeleteLikeMutation, useFetchReportListsQuery } from '@/store/apis/reportApi';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, message, Pagination, Spin } from 'antd';
import CardApart from '@/components/organisms/CardApart';
import { createQuery } from '@/utils/common';
import Field from '@/components/atoms/Field';
import FieldSelect from '@/components/atoms/FieldSelect';
import { useForm } from 'react-hook-form';

interface IPropsPage {
    params: {
        page: number;
        limit: number;
    };
}

const Index = ({ params }: IPropsPage) => {
    const router = useRouter();
    const form = useForm();

    const { data, isLoading } = useFetchReportListsQuery(params);
    const [addLike] = useAddLikeMutation();
    const [deleteLike] = useDeleteLikeMutation();

    if (isLoading) {
        return <Spin />;
    }

    const onFilter = (isLike: boolean) => {
        router.push(`${router.pathname}?` + createQuery({ page: 1, limit: 30, isLike }));
    };

    const onPaginationChange = (page = 1, limit = 30) => {
        router.push(`${router.pathname}?` + createQuery({ ...params, page, limit }));
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
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FieldSelect
                    label=""
                    control={form.control}
                    name="isLike"
                    options={[
                        { label: '전체', value: null },
                        { label: '즐겨찾기만 보기', value: true },
                    ]}
                    onChange={onFilter}
                    style={{ width: 140 }}
                />

                <Button type="primary" onClick={() => router.push('/report/add')}>
                    신규 보고서 생성
                </Button>
            </div>

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

            <Pagination
                defaultCurrent={params.page}
                defaultPageSize={params.limit}
                current={params.page}
                total={data.totalResult}
                onChange={onPaginationChange}
            />
        </div>
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
