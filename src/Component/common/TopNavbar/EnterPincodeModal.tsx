import React from "react";
import CustomModal from "../Customized/CustomModal/CustomModal";
import { Flex } from "antd";
export default function EnterPincodeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  return (
    <CustomModal headerLabel="" open={open} onCancel={onClose}>
      <Flex vertical align="center">
        <p>Choose your location</p>
      </Flex>
    </CustomModal>
  );
}
