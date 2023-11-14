import FieldSelect from '@/components/atoms/FieldSelect';
import { Button } from 'antd';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/router';
import { createQuery } from '@/utils/common';

const ReportFilerWrap = () => {
    const { control } = useFormContext();
    const router = useRouter();

    const onFilter = (isLike: boolean) => {
        router.push(`${router.pathname}?` + createQuery({ page: 1, limit: 30, isLike }));
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#ffffff',
                padding: '10px 15px',
            }}
        >
            <FieldSelect
                label=""
                control={control}
                name="isLike"
                options={[
                    { label: '전체', value: null },
                    { label: '즐겨찾기만 보기', value: true },
                ]}
                placeholder="필터"
                onChange={onFilter}
                style={{ width: 200 }}
            />

            <Button block type="primary" onClick={() => router.push('/report/add')} style={{ width: 108 }}>
                보고서 생성
            </Button>
        </div>
    );
};

export default ReportFilerWrap;
