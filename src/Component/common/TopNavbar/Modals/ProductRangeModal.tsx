import React from "react";
import TextStyles from "@/Component/common/Typography.module.scss";
import Styles from "../TopNavBar.module.scss";
import CustomModal from "../../Customized/CustomModal/CustomModal";
import { Flex } from "antd";
import {TextFieldWithButton} from "../../Customized/TextField/TextFiledWithButton";
import ProductRangeTooltip from "../ProductRangeTooltip";
export default function ProductRangeModal({
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
      width={'90%'}
      zIndex={1012}
    >
      <ProductRangeTooltip onClose={onClose}/>
    </CustomModal>
  );
}
