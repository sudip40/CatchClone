import React from "react";
import Styles from "../contactus.module.scss";
import CustomModal from "@/Component/common/Customized/CustomModal/CustomModal";
import { Flex, Input } from "antd";
import { RightOutlined } from "@ant-design/icons";
import ButtonOutlined from "@/Component/common/Customized/CustomButton/Outlined";
export default function BulkOrderContactModal({
  open,
  onClose,
  screenWidth,
}: {
  open: boolean;
  onClose: any;
  screenWidth: number;
}) {
  return (
    <CustomModal
      headerLabel="BULK BUY"
      open={open}
      onCancel={onClose}
      footer={null}
      width={screenWidth > 600 ? "560px" : "90%"}
      zIndex={1012}
    >
      <Flex vertical align="center" gap={20} style={{ width: "100%" }}>
        <Flex vertical style={{ width: "100%" }}>
          <span className={Styles.content}>Your Name</span>
          <Input placeholder="Name" />
        </Flex>
        <Flex vertical style={{ width: "100%" }}>
          <span className={Styles.content}>Name Of Hotel Or Restaurant</span>
          <Input placeholder="Hotel Name" />
        </Flex>
        <Flex vertical style={{ width: "100%" }}>
          <span className={Styles.content}>Your Email</span>
          <Input placeholder="Email" />
        </Flex>
        <Flex vertical style={{ width: "100%" }}>
          <span className={Styles.content}>Your Contact No.</span>
          <Input placeholder="Phone" />
        </Flex>
        <ButtonOutlined
          label="SUBMIT NOW"
          size="large"
          icon={<RightOutlined />}
        />
      </Flex>
    </CustomModal>
  );
}
