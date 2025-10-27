import { ConfigProvider, ModalProps } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { ReactNode } from "react";
type customModalProp = {
  headerLabel?: string|ReactNode;
  children:ReactNode
};
type combinedModalProp = customModalProp & ModalProps;
export default function CustomModal({headerLabel="",children, ...rest}: combinedModalProp) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadiusLG: 4,
        },
      }}
    >
      <Modal title={headerLabel} centered {...rest}>{children}</Modal>
    </ConfigProvider>
  );
}
