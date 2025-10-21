import React from "react";
import styled from "styled-components";
import { theme } from '@/Styles/theme';

type Props = {
    height?: string;
    className?: string;
};

const Divider = styled.div<{ height?: string }>`
    width: 1px;
    background-color: ${theme.content.disable_text};
    height: ${p => p.height ?? '24px'};
    display: inline-block;
`;

export default function VerticalDivider({ height = '24px', className }: Props) {
    return <Divider height={height} className={className} />;
}