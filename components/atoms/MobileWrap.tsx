import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface IPropsMobileWrap {
    children: ReactNode;
}

const MobileWrap = ({ children }: IPropsMobileWrap) => {
    return <StyledMobileWrap>{children}</StyledMobileWrap>;
};

export default MobileWrap;

const StyledMobileWrap = styled('div')`
    position: absolute;
    overflow: hidden;
    z-index: 0;
    background: #ffffff;
    box-shadow: 0 0 22px -2px rgba(0, 0, 0, 0.75);

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    margin: 0 auto;

    @media screen and (min-width: 769px) {
        max-width: 430px;
    }
`;
