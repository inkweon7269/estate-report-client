import React from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/variables';

export interface IPropsError {
    message: any;
}

const FieldErrorMsg = ({ message }: IPropsError) => {
    return <StyledErrorMsg className="error-message">{message}</StyledErrorMsg>;
};

export default FieldErrorMsg;

const StyledErrorMsg = styled('p')`
    margin-top: 2px;
    color: ${colors.red};
`;
