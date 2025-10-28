import React from "react";
import TextStyles from "@/Component/common/Typography.module.scss";
import Styles from "../TopNavBar.module.scss";
import CustomModal from "../../Customized/CustomModal/CustomModal";
import { Flex } from "antd";
import {TextFieldWithButton} from "../../Customized/TextField/TextFiledWithButton";
export default function EnterPincodeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
 
  return (
    <CustomModal
      headerLabel=""
      open={open}
      onCancel={onClose}
      footer={null}
      width={"350px"}
    >
      <Flex vertical align="center" gap={15}>
        <p
          className={Styles.search_icon}
          style={{ cursor: "default", fontWeight: "500" }}
        >
          Choose your location
        </p>
        <p className={TextStyles.content_txt} style={{ textAlign: "center" }}>
          Select a delivery location to see product availability
        </p>
        <TextFieldWithButton
          placeHolder="enter your pin code"
          buttonTxt='Apply'
          onClick={() => {}}
        />
      </Flex>
    </CustomModal>
  );
}
