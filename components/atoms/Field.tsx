import React, { ReactNode } from 'react';

export interface FieldWrapProps {
    mb?: number;
    children: ReactNode,
}

const Field = ({
                       mb = 15,
                       children,
                   }: FieldWrapProps) => {
    return (
        <div style={{ marginBottom: mb }}>
            {children}
        </div>
    );
};

export default Field;