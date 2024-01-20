import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, message, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useJoinMutation } from '@/store/apis/userApi';
import * as yup from 'yup';
import cookies from 'next-cookies';
import { USER_SCHEMA } from '@/schemas';
import { JoinType } from '@/types';
import { GetServerSideProps } from 'next';
import JoinWrap from '@/components/organisms/JoinWrap';
import Link from 'next/link';

const { Title } = Typography;

const schema = yup.object().shape({
    email: USER_SCHEMA.email,
    password: USER_SCHEMA.password,
    passwordChk: USER_SCHEMA.passwordChk,
});

const Join = () => {
    const router = useRouter();

    const form = useForm<JoinType>({
        resolver: yupResolver(schema),
    });
    const { handleSubmit } = form;

    const [join] = useJoinMutation();
    const onSubmit: SubmitHandler<JoinType> = async (body) => {
        try {
            await join(body).unwrap();
            await message.success('회원가입되었습니다.');
            await router.push('/');
        } catch (e: any) {
            message.warning(e.data.message);
        }
    };

    return (
        <FormProvider {...form}>
            <div style={{ padding: '80px 15px 0 15px' }}>
                <Form onFinish={handleSubmit(onSubmit)}>
                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        <Title level={3}>회원가입</Title>
                    </div>

                    <JoinWrap />

                    <Button type="primary" htmlType="submit" block>
                        회원가입
                    </Button>
                </Form>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 15 }}>
                    <Link href="/">로그인</Link>
                </div>
            </div>
        </FormProvider>
    );
};

export default Join;

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
