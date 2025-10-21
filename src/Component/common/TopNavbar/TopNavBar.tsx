"use client";
import React from "react";
import styles from "./TopNavBar.module.scss";
import TextStyle from "@/Component/common/Typography.module.scss";
import { ConfigProvider, Flex, Progress } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { NavigationItems } from "@/Component/constant/NavigationItems";
import VerticalDivider from "../Customized/VerticalDevider";
import { theme } from "@/Styles/theme";
export default function TopNavigationBar() {
  return (
    <Flex vertical className={styles.container}>
      <Flex
        align="center"
        justify="space-between"
        gap={20}
        className={styles.nav_container}
      >
        <img
          src="https://share.google/images/sKApRCTivfHl3c8R7"
          alt="default logo"
          width={100}
          height={70}
        />
        <Flex vertical gap={10} style={{ width: "70%" }}>
          <Flex align="center" justify="flex-end" gap={10}>
            <Flex
              align="center"
              gap={4}
              className={`${TextStyle.content_txt} ${styles.nav_container__pincode}`}
            >
              <span style={{ fontSize: "14px" }}>
                <EnvironmentOutlined />
              </span>
              <p>Hello, Enter Your Pincode</p>
            </Flex>
            <VerticalDivider />
          </Flex>
          <Flex align="center" justify="flex-end" gap={20}>
            {NavigationItems.map((item: any, ind: number) => {
              return (
                <p key={ind} className={TextStyle.nav_bold_txt}>
                  {item.content}
                </p>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Progress: {
              /* here is your component tokens */
              defaultColor:theme.content.highlight_text,
              lineBorderRadius:0
            },
          },
        }}
      >
        <Progress showInfo={false} percent={10}/>
      </ConfigProvider>
    </Flex>
  );
}
