import React, { ReactNode } from "react";
import { Input, InputProps, InputNumberProps, ConfigProvider } from "antd";
import { theme } from "@/Styles/theme";

type customProp = {
  lableText?: string;
  placeHolder?: string;
  buttonTxt?: string;
  onClick: any;
};
type combinedTextFieldProp = customProp & InputProps & InputNumberProps;
export function TextFieldWithButton({
  lableText = "",
  placeHolder = "",
  buttonTxt = "",
  onClick,
  ...rest
}: combinedTextFieldProp) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
        },
        components: {
          Input: {
            addonBg: theme.background.background_yellow_shade_1,
          },
        },
      }}
    >
      <Input
        placeholder={placeHolder}
        allowClear
        addonAfter={
          <div
            style={{
              color: theme.content.white_text,
              cursor: "pointer",
              letterSpacing: "2px",
              padding:'4px 8px' 
            }}
            onClick={onClick}
          >
            {buttonTxt}
          </div>
        }
        size="large"
        width={"100%"}
        {...rest}
      />
    </ConfigProvider>
  );
}
