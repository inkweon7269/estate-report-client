export const createQuery = (obj: any) => {
    return Object.entries(obj)
        .map((e) => e.join('='))
        .join('&');
};

export const generateRandomEmail = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    const domain = '@gmail.com';

    let email = '';

    for (let i = 0; i < length; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    }

    return email + domain;
};
