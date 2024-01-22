import { selectCurrentToken, selectCurrentUser } from '@/store/slices/authSlice';
import { useLogOutMutation, useProfileQuery } from '@/store/apis/userApi';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { useAppSelector, useAppStore } from '@/store/hooks';

const Test = () => {
    const user = useAppSelector(selectCurrentUser);
    const token = useAppSelector(selectCurrentToken);
    const store = useAppStore();

    const router = useRouter();
    const [logOut] = useLogOutMutation();

    const onLogOut = async () => {
        try {
            await logOut({});
            await router.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <h1>로그아웃 테스트</h1>
            <Button htmlType="button" onClick={onLogOut}>
                로그아웃
            </Button>
        </div>
    );
};

export default Test;
