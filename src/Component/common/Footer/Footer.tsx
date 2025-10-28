"use client";
import { Flex } from "antd";
import React from "react";
import Styles from "./Footer.module.scss";
import TextStyles from "@/Component/common/Typography.module.scss";
import { FooterItems, TasbarItems } from "@/Component/constant/FooterItems";
import { theme } from "@/Styles/theme";
import { HorizontalDivider, VerticalDivider } from "../Customized/Devider";
import { TextFieldWithButton } from "../Customized/TextField/TextFiledWithButton";
import { socialMediaItems } from "@/Component/constant/NavigationItems";
import MediaIcon from "../Customized/MediaIcon";

function TasbarComponent() {
  return (
    <Flex
      justify="flex-end"
      align="center"
      gap={10}
      className={Styles.task_bar}
    >
      {TasbarItems.map((content: any, ind: number) => (
        <Flex key={content.id} align="center" gap={10}>
          <p
            style={{ cursor: "pointer", color: theme.content.white_text }}
            className={TextStyles.content_txt}
          >
            {content.item}
          </p>
          {ind !== TasbarItems.length - 1 && (
            <VerticalDivider color={theme.content.white_text} />
          )}
        </Flex>
      ))}
    </Flex>
  );
}
function FooterSection({ content }: { content: any }) {
  return (
    <Flex vertical gap={12}>
      <p className={Styles.item_header}>{content?.content_header}</p>
      <HorizontalDivider width="200px" />
      {content.items.length &&
        content?.items?.map((item: any) => {
          return (
            <Flex key={item.id} vertical gap={8}>
              <p
                className={`${TextStyles.bold_txt} ${Styles.item_text}`}
                style={{ fontWeight: "400" }}
              >
                {item?.label}
              </p>
              {item?.sub_items?.length &&
                item?.sub_items?.map((sub_item: any) => {
                  return (
                    <p
                      key={sub_item.id}
                      className={`${TextStyles.content_txt} ${Styles.item_text}`}
                    >
                      &nbsp;&bull;&nbsp;{sub_item?.label}
                    </p>
                  );
                })}
            </Flex>
          );
        })}
    </Flex>
  );
}
function GetUpdateSection() {
  return (
    <Flex vertical gap={10} style={{width:'300px'}}>
      <p style={{ fontSize: "18px" }}>Get exclusive updates.</p>
      <TextFieldWithButton
        placeHolder="email id"
        buttonTxt="Subscribe"
        buttonBg={theme.background.component_redbg}
        onClick={() => {}}
        borderRadius={200}
      />
      <Flex align="center" gap={8}>
        {socialMediaItems.map((item: any) => {
          return <MediaIcon key={item.key} item={item}/>;
        })}
      </Flex>
    </Flex>
  );
}
export default function FooterContainer() {
  return (
    <Flex vertical style={{ width: "100%",bottom:'0px'}}>
      <Flex
        gap={80}
        align="flex-start"
        justify="center"
        className={Styles.footer_container}
        wrap
      >
        {FooterItems.map((content: any, ind: number) => {
          return (
            <Flex key={content.content_id} vertical gap={20}>
              <FooterSection content={content} />
              {ind === FooterItems.length - 1 && <GetUpdateSection />}
            </Flex>
          );
        })}
      </Flex>
      <TasbarComponent />
    </Flex>
  );
}
