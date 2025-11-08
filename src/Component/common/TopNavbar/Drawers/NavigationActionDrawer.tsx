import TextStyle from "@/Component/common/Typography.module.scss";
import { Drawer, Flex } from "antd";
import React, { ReactNode } from "react";
import ButtonOutlined from "../../Customized/CustomButton/Outlined";
import {
  NavigationItems,
  socialMediaItems,
} from "@/Component/constant/NavigationItems";
import { HorizontalDivider } from "../../Customized/Devider";
import MediaIcon from "../../Customized/MediaIcon";
import { theme } from "@/Styles/theme";
import { EnvironmentOutlined } from "@ant-design/icons";
export default function NavigationActionDrawer({
  open,
  screenWidth,
  onClose,
  handleNavigation,
  handleModalOpen,
}: {
  open: boolean;
  screenWidth: number;
  onClose: any;
  handleNavigation: any;
  handleModalOpen: any;
}) {

  const Footer: ReactNode = (
    <Flex justify="flex-end">
      <ButtonOutlined label="Close" onClick={onClose} />
    </Flex>
  );
  return (
    <Drawer
      title="Navigation Action"
      open
      onClose={onClose}
      closable
      width={screenWidth < 500 ? screenWidth - 100 : 400}
      footer={Footer}
    >
      <Flex vertical gap={20}>
        <img
          src="/images/Logo_1.png"
          alt="Red-logo of everyday website"
          width={100}
          height={70}
        />
        <Flex vertical gap={10}>
          {NavigationItems.map((item: any, ind: number) => {
            return (
              <Flex key={ind} vertical gap={10}>
                <p
                  className={TextStyle.nav_bold_txt}
                  onClick={item?.type==='navigation'? () => {
                    handleNavigation(item.path);
                    onClose();
                }:() => {
                  handleModalOpen('product_range');
                }}
                >
                  {item.content}
                </p>
                <HorizontalDivider
                  width="100%"
                  color={theme.content.disable_text}
                />
              </Flex>
            );
          })}
        </Flex>
        <Flex align="center" justify="center" gap={10}>
          {socialMediaItems.map((item: any) => {
            return <MediaIcon key={item.key} item={item} />;
          })}
        </Flex>
        <ButtonOutlined
          label="Hello, Enter Your Pincode"
          icon={<EnvironmentOutlined />}
          iconPosition="start"
          rounded
          onClick={() => handleModalOpen("pincode_modal")}
        />
      </Flex>
    </Drawer>
  );
}
