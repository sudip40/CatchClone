"use client";
import React from "react";
import styles from "./About.module.scss";
import TextStyles from '@/Component/common/Typography.module.scss';
import { Flex } from "antd";
import { theme } from "@/Styles/theme";
import { dummyAbout } from "../constant/AboutEveryday";
export default function AboutUsPage() {
  return (
    <Flex vertical style={{ width: "100%" }}>
      <img
        src="https://catchfoods.com/wp-content/uploads/2023/07/Catch-DS-Spiceco.webp"
        alt="default"
        width={"100%"}
        height={600}
      />
      <Flex
        vertical
        gap={30}
        style={{ boxSizing: "border-box", padding: "150px 20px" }}
      >
        <Flex
          align="center"
          justify="center"
          className={styles.header_text}
          style={{ color: theme.content.highlight_text, marginBottom: "10px" }}
        >
          About Us
        </Flex>
        {
            dummyAbout.map((content:any)=>(
                <Flex key={content.id} vertical gap={20}>
                    <p className={styles.header_text}>{content?.content}</p>
                    <p className={styles.content_text}>{content.description}</p>
                </Flex>
            ))
        }
      </Flex>
    </Flex>
  );
}
