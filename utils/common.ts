export const createQuery = (obj: any) => {
    return Object.entries(obj)
        .map((e) => e.join('='))
        .join('&');
};
