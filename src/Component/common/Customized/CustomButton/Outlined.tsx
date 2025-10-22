import React from "react";
import { Button, ButtonProps, ConfigProvider } from "antd";
import { theme } from "@/Styles/theme";
type customButtonProp = {
  label: string;
  colorStrokeBg?: "red" | "gray";
  rounded?: boolean;
};
type combinedProp = ButtonProps & customButtonProp;
export default function ButtonOutlined({
  label,
  colorStrokeBg = "red",
  rounded = false,
  ...rest
}: combinedProp) {
  return (
    <ConfigProvider
      theme={{
        token: {
          /* here is your global tokens */
          borderRadius: rounded ? 100 : 6,
        },
        components: {
          Button: {
            /* here is your component tokens */
            defaultBg:'transparent',
            defaultColor: theme.content.highlight_text,
            defaultBorderColor: theme.content.highlight_text,
            defaultHoverColor: theme.content.white_text,
            onlyIconSize:10,
            defaultHoverBg:
              colorStrokeBg == "red"
                ? theme.background.component_redbg
                : theme.background.background_gray,
            defaultHoverBorderColor:
              colorStrokeBg == "red"
                ? theme.content.highlight_text
                : theme.content.disable_text,
          },
        },
      }}
    >
      <Button iconPosition={"end"} {...rest}>
        {label}
      </Button>
    </ConfigProvider>
  );
}
