"use client";
import React, { useEffect, useState } from "react";
import styles from "./TopNavBar.module.scss";
import TextStyle from "@/Component/common/Typography.module.scss";
import { ConfigProvider, Flex, Progress, Tooltip } from "antd";
import {
  DownOutlined,
  EnvironmentOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  NavigationItems,
  socialMediaItems,
} from "@/Component/constant/NavigationItems";
import { VerticalDivider } from "../Customized/Devider";
import { theme } from "@/Styles/theme";
import MediaIcon from "../Customized/MediaIcon";
import ButtonOutlined from "../Customized/CustomButton/Outlined";
import EnterPincodeModal from "./Modals/EnterPincodeModal";
import OrderOnlineDrawer from "./Drawers/OrderOnlineDrawer";
import { useRouter } from "next/navigation";
import { useScreenWidth } from "@/helpers/hooks/useGetScreenWidth";
import NavigationActionDrawer from "./Drawers/NavigationActionDrawer";
import ProductRangeTooltip from "./ProductRangeTooltip";
export default function TopNavigationBar({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const router = useRouter();
  const screenWidth = useScreenWidth();
  const [modal, setModal] = useState({ open: false, type: "" });
  const [drawer, setDrawer] = useState({ open: false, type: "" });

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  const handleModalOpen = (type: string) => {
    setModal({ open: true, type });
  };
  const handleModalClose = () => {
    setModal({ open: false, type: "" });
  };
  const modalRender = () => {
    switch (modal.type) {
      case "pincode_modal":
        return (
          <EnterPincodeModal open={modal.open} onClose={handleModalClose} />
        );
      default:
        return null;
    }
  };

  const handleDrawerOpen = (type: string) => {
    setDrawer({ open: true, type });
  };
  const handleDrawerClose = () => {
    setDrawer({ open: false, type: "" });
  };
  const drawerRender = () => {
    switch (drawer.type) {
      case "order_online":
        return (
          <OrderOnlineDrawer open={drawer.open} onClose={handleDrawerClose} />
        );
      case "navigation_action":
        return (
          <NavigationActionDrawer
            open={drawer.open}
            onClose={handleDrawerClose}
            handleNavigation={handleNavigation}
            screenWidth={screenWidth}
            handleModalOpen={handleModalOpen}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Flex vertical className={styles.container}>
      <Flex
        align="center"
        justify="space-between"
        gap={20}
        className={styles.nav_container}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
          alt="default logo"
          width={100}
          height={70}
        />
        {screenWidth <= 988 ? (
          <ButtonOutlined
            label=""
            onClick={() => handleDrawerOpen("navigation_action")}
            icon={<MenuOutlined style={{ fontSize: "24px" }} />}
          />
        ) : (
          <Flex vertical gap={10} style={{ width: "70%" }}>
            <Flex align="center" justify="flex-end" gap={10}>
              <Flex
                align="center"
                gap={4}
                className={`${TextStyle.content_txt} ${styles.nav_container__pincode}`}
                onClick={() => handleModalOpen("pincode_modal")}
              >
                <span style={{ fontSize: "14px" }}>
                  <EnvironmentOutlined />
                </span>
                <p>Hello, Enter Your Pincode</p>
              </Flex>
              <VerticalDivider />
              <Flex align="center" gap={8}>
                {socialMediaItems.map((item: any) => {
                  return <MediaIcon key={item.key} item={item} />;
                })}
              </Flex>
              <ButtonOutlined
                rounded
                label="ORDER ONLINE"
                icon={<DownOutlined />}
                onClick={() => handleDrawerOpen("order_online")}
              />
              <span className={styles.search_icon}>
                <SearchOutlined />
              </span>
            </Flex>
            <Flex align="center" justify="flex-end" gap={20}>
              {NavigationItems.map((item: any, ind: number) => {
                return item?.type === "drawer" ? (
                  <Tooltip
                    title={<ProductRangeTooltip />}
                    placement="bottom"
                    trigger={["hover"]}
                    color="#ffff"
                  >
                    <p key={ind} className={TextStyle.nav_bold_txt}>
                      {item.content}
                    </p>
                  </Tooltip>
                ) : (
                  <p
                    key={ind}
                    className={TextStyle.nav_bold_txt}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.content}
                  </p>
                );
              })}
            </Flex>
          </Flex>
        )}
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Progress: {
              /* here is your component tokens */
              defaultColor: theme.content.highlight_text,
              lineBorderRadius: 0,
            },
          },
        }}
      >
        <Progress showInfo={false} percent={scrollProgress} strokeWidth={5} />
      </ConfigProvider>
      {modal.open && modalRender()}
      {drawer.open && drawerRender()}
    </Flex>
  );
}
