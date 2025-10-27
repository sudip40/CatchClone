import React from "react";
import { Button, ButtonProps, ConfigProvider } from "antd";
import { theme } from "@/Styles/theme";
type customButtonProp = {
  label: string;
  colorStrokeBg?: "red" | "gray"|'yellow_1';
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
            defaultBg:colorStrokeBg=='yellow_1'?theme.background.background_yellow_shade_1:'transparent',
            defaultColor:colorStrokeBg=='yellow_1'?theme.content.white_text: theme.content.highlight_text,
            defaultBorderColor: colorStrokeBg=='yellow_1'?theme.content.yellow_shade_1_text: theme.content.highlight_text,
            defaultHoverColor: theme.content.white_text,
            onlyIconSize:10,
            defaultHoverBg:
              colorStrokeBg == "gray"
                ? theme.background.background_gray
                : theme.background.component_redbg,
            defaultHoverBorderColor:
              colorStrokeBg == "gray"
                ? theme.content.disable_text
                : theme.content.highlight_text,
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
