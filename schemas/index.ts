import * as yup from 'yup';

export const USER_SCHEMA = {
    email: yup.string().trim().required('필수 항목입니다.').email('올바른 이메일을 입력하세요.'),
    password: yup
        .string()
        .test('len', '6자리 이상, 18자리 이하의 비밀번호를 입력해주세요.', (val) => {
            if (val === undefined) {
                return true;
            }
            return val.length === 0 || (val.length >= 6 && val.length <= 18);
        })
        .required('필수 항목입니다.'),
    passwordChk: yup
        .string()
        .oneOf([yup.ref('password'), undefined], '비밀번호와 일치하지 않습니다.')
        .test('len', '6자리 이상, 18자리 이하의 비밀번호를 입력해주세요.', (val) => {
            if (val === undefined) {
                return true;
            }
            return val.length === 0 || (val.length >= 6 && val.length <= 18);
        })
        .required('필수 항목입니다.'),
};

export const REPORT_SCHEMA = {
    area: yup.number().required('필수 항목입니다.'),
    score: yup.number().required('필수 항목입니다.'),
};
