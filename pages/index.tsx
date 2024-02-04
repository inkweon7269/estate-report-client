import { Button, Form, message, Typography } from 'antd';
import * as yup from 'yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '@/store/apis/userApi';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { USER_SCHEMA } from '@/schemas';
import { LoginType } from '@/types';
import LoginWrap from '@/components/organisms/LoginWrap';
import Link from 'next/link';

const { Title } = Typography;

const schema = yup.object().shape({
    email: USER_SCHEMA.email,
    password: USER_SCHEMA.password,
});

const Index = () => {
    const router = useRouter();

    const form = useForm<LoginType>({
        resolver: yupResolver(schema),
    });
    const { handleSubmit } = form;

    const [login] = useLoginMutation();

    const onSubmit: SubmitHandler<LoginType> = async (body) => {
        try {
            await login(body).unwrap();
            await router.push('/report');
            await message.success('로그인되었습니다.');
        } catch (e: any) {
            message.warning(e.data.message);
        }
    };

    return (
        <FormProvider {...form}>
            <div style={{ padding: '80px 15px 0 15px' }}>
                <Form onFinish={handleSubmit(onSubmit)}>
                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        <Title level={3}>로그인</Title>
                    </div>

                    <LoginWrap />

                    <Button type="primary" htmlType="submit" block>
                        로그인
                    </Button>
                </Form>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 15 }}>
                    <Link href="/join">회원가입</Link>
                </div>
            </div>
        </FormProvider>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const allCookies = cookies(context);
    const token = allCookies.accessToken;

    if (token) {
        return {
            redirect: {
                permanent: true,
                destination: '/report',
            },
        };
    }

    return {
        props: {},
    };
};
