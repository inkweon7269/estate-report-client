export type JoinType = {
    email: string;
    password: string;
    passwordChk: string;
};

export type LoginType = Omit<JoinType, 'passwordChk'>;

export type ReportAreaType = {
    a1: number;
    a2: number;
    a3: number;
    apartId: number;
};

export type ReportScoreType = {
    space: number;
    middle: number;
    elementary: number;
    kindergarten: number;
    barrier: number;
    hill: number;
    layout: number;
    distance: number;
    sound: number;
    underground: number;
    parking: number;
    clean: number;
    playground: number;
    store: number;
    atm: number;
    memo?: string;
};
