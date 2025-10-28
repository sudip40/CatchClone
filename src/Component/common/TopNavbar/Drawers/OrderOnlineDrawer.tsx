import { Drawer, Flex } from "antd";
import React from "react";
import DrawerStyles from "../TopNavBar.module.scss";
import TextStyles from "@/Component/common/Typography.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { onlineOderOptions } from "@/Component/constant/NavigationItems";
import DrawerWithoutHeader from "@/Component/common/Customized/Drawer/DrawerWithoutHeader";

export default function OrderOnlineDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <DrawerWithoutHeader
      placement="top"
      open={open}
      onClose={onClose}
      className={DrawerStyles.top_drawer_style}
    >
      <Flex vertical gap={20}>
        <Flex justify="flex-end" style={{ width: "100%", fontSize: "20px" }}>
          <CloseOutlined onClick={onClose} />
        </Flex>
        <Flex
          justify="space-between"
          align="flex-start"
          gap={20}
          style={{ padding: "10px 30px" }}
        >
          <p className={TextStyles.hilight_Red_header}>Oder Online</p>
          <Flex align="center" gap={24}>
            {onlineOderOptions.map((item: any) => (
              <div
                key={item.id}
                style={{ border: "1px solid black", cursor: "pointer" }}
              >
                <img src={item.image} alt={item.id} width={80} height={80} />
              </div>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </DrawerWithoutHeader>
  );
}
