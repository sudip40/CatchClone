import React, { ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
export default function Registry({ children }: { children: ReactNode }) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
