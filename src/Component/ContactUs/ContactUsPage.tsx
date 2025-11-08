"use client";
import React, { useState } from "react";
import styles from "./contactus.module.scss";
import { Card, Flex } from "antd";
import { BulkOrderContact, CompanyContact, HeplineContact } from "./Cards";
import { useScreenWidth } from "@/helpers/hooks/useGetScreenWidth";
import { DummyHelpContact } from "../constant/ContactUs";
import BulkOrderContactModal from "./Modals/BulkOrderContactModal";
export default function ContactUsPage() {
  const screenWidth = useScreenWidth();
  const [modal, setModal] = useState({ open: false, type: "" });

  const handleModalOpen = (type: string) => {
    setModal({ open: true, type });
  };
  const handleModalClose = () => {
    setModal({ open: false, type: "" });
  };
  const modalRender = () => {
    switch (modal.type) {
      case "bulk_buy":
        return <BulkOrderContactModal open={modal.open} onClose={handleModalClose} screenWidth={screenWidth}/>;
      default:
        return null;
    }
  };
  return (
    <Flex vertical style={{ width: "100%" }}>
      <img
        src="https://catchfoods.com/wp-content/uploads/2021/07/1fbb9423555a6b409b91f6125cda13a3.jpg"
        alt="default"
        width={"100%"}
        height={600}
      />
      <Flex vertical gap={20} align="center" className={styles.container}>
        <Card style={{ width: "80%" }}>
          <CompanyContact screenWidth={screenWidth} />
        </Card>
        <Flex gap={20} wrap style={{ width: "80%" }}>
          <Card style={{ width: "380px" }}>
            <HeplineContact info={DummyHelpContact} />
          </Card>
          <Card style={{ width: "380px" }}>
            <HeplineContact info={DummyHelpContact} />
          </Card>
          <Card style={{ width: "380px" }}>
            <BulkOrderContact handleModalOpen={handleModalOpen}/>
          </Card>
        </Flex>
      </Flex>
      {modal.open && modalRender()}
    </Flex>
  );
}
