import cookies from 'next-cookies';
import { GetServerSideProps } from 'next';
import { useFetchReportListsQuery } from '@/store/apis/reportApi';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'antd';
import CardApart from '@/components/organisms/CardApart';

const Index = () => {
    const router = useRouter();
    const { data, isLoading } = useFetchReportListsQuery({ page: 1, limit: 30 });

    return (
        <div>
            <Button block type="primary" onClick={() => router.push('/report/add')}>
                신규 보고서 생성
            </Button>

            <ul>
                {data?.list?.map((item: any) => (
                    <li key={item.id} style={{ marginBottom: 25 }}>
                        <Link href={`/report/${item.id}`}>
                            <CardApart apart={item.apart} score={item.totalScore} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;

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
