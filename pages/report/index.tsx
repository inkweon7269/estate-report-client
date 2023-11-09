import cookies from 'next-cookies';
import { GetServerSideProps } from 'next';
import { useFetchReportListsQuery } from '@/store/apis/reportApi';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Pagination, Spin } from 'antd';
import CardApart from '@/components/organisms/CardApart';
import { createQuery } from '@/utils/common';

interface IPropsPage {
    params: {
        page: number;
        limit: number;
    };
}

const Index = ({ params }: IPropsPage) => {
    const router = useRouter();
    const { data, isLoading } = useFetchReportListsQuery(params);

    if (isLoading) {
        return <Spin />;
    }

    const onPaginationChange = (page = 1, limit = 30) => {
        router.push(`${router.pathname}?` + createQuery({ ...params, page, limit }));
    };

    return (
        <div>
            <Button block type="primary" onClick={() => router.push('/report/add')}>
                신규 보고서 생성
            </Button>

            <ul>
                {data.list.map((item: any) => (
                    <li key={item.id} style={{ marginBottom: 25 }}>
                        <Link href={`/report/${item.id}`}>
                            <CardApart apart={item.apart} score={item.totalScore} />
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
