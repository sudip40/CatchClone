import { theme } from "@/Styles/theme";
import React, { ReactElement } from "react";
import styled from "styled-components";
interface itemProp {
  key: string | number;
  link: string;
  component: ReactElement;
}
type PropsType = {
  item: itemProp;
  size?: string;
  onClick?:any
};
const RapperDiv = styled.div<{ size?: string }>`
  height: ${(p) => p.size ?? "32px"};
  width: ${(p) => p.size ?? "32px"};
  background: ${theme.background.component_redbg};
  color: ${theme.content.white_text};
  border-radius: 50%;
  box-sizing: border-box;
  padding: 8px;
  cursor: pointer;
`;
export default function MediaIcon({ item, size,onClick }: PropsType) {
  return (
    <RapperDiv size={size} onClick={onClick}>
      {item.component}
    </RapperDiv>
  );
}
