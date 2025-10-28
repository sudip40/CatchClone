import { Drawer, DrawerProps } from "antd";
import React, { ReactNode } from "react";
type customProp = {
  children: ReactNode;
};
type combinedDrawerProp = customProp & DrawerProps;
export default function DrawerWithoutHeader({
  children,
  ...rest
}: combinedDrawerProp) {
  return (
    <Drawer
      zIndex={1000}
      height="auto"
      closeIcon={null}
      mask // keeps background visible, optional
      styles={{
        header: { display: "none" },
      }}
      {...rest}
    >
      {children}
    </Drawer>
  );
}
