import { Flex, Pagination } from 'antd';
import { useRouter } from 'next/router';
import { createQuery } from '@/utils/common';
import { colors } from '@/styles/variables';

interface IPropsPagination {
    params: any;
    totalResult: number;
}

const PaginationWrap = ({ params, totalResult }: IPropsPagination) => {
    const router = useRouter();
    const onPaginationChange = (page = 1, limit = 30) => {
        router.push(`${router.pathname}?` + createQuery({ ...params, page, limit }));
    };

    return (
        <Flex justify="center" style={{ padding: 15, background: colors.white }}>
            <Pagination
                defaultCurrent={params.page}
                defaultPageSize={params.limit}
                current={params.page}
                total={totalResult}
                onChange={onPaginationChange}
            />
        </Flex>
    );
};

export default PaginationWrap;
