import React from "react";
import styled from "styled-components";
import { theme } from "@/Styles/theme";
import { Color } from "antd/es/color-picker";

type VerticalProps = {
  height?: string;
  className?: string;
  color?: string;
};
type HorizontalProps = {
  width?: string;
  className?: string;
  color?: string;
};

const VerticalDividerStyle = styled.div<{ height?: string; color?: string }>`
  width: 1px;
  background-color: ${(p) => p.color ?? theme.content.disable_text};
  height: ${(p) => p.height ?? "24px"};
  display: inline-block;
`;
const HorizontalDividerStyle = styled.div<{ width?: string; color?: string }>`
  width: ${(p) => p.width ?? "24px"};
  background-color: ${(p) => p.color ?? theme.content.disable_text};
  height: 1px;
  display: inline-block;
`;

export function VerticalDivider({
  height = "24px",
  className,
  color,
}: VerticalProps) {
  return (
    <VerticalDividerStyle height={height} className={className} color={color} />
  );
}

export function HorizontalDivider({
  width,
  className,
  color,
}: HorizontalProps) {
  return (
    <HorizontalDividerStyle width={width} className={className} color={color} />
  );
}
