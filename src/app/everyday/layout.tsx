import React, { ReactNode } from "react";
import TopNavWrapper from "../TopNavWrapper";
export default function Layout({ children }: { children: ReactNode }) {
  return <TopNavWrapper>{children}</TopNavWrapper>;
}
