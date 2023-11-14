import React, { ReactNode } from 'react';

export interface IPropsField {
    mb?: number;
    children: ReactNode;
}

const Field = ({ mb = 15, children }: IPropsField) => {
    return <div style={{ marginBottom: mb }}>{children}</div>;
};

export default Field;
