import { Flex } from "antd";
import Styles from "./contactus.module.scss";
import { VerticalDivider } from "../common/Customized/Devider";
import ButtonOutlined from "../common/Customized/CustomButton/Outlined";
import { RightOutlined } from "@ant-design/icons";

export function CompanyContact({ screenWidth }: { screenWidth: number }) {
  return (
    <Flex gap={30} wrap>
      <Flex vertical gap={24}>
        <Flex vertical gap={10}>
          <span className={Styles.bold_header}>DS SPICECO PVT. LTD.</span>
          <span className={Styles.content}>
            DS Headquarters, C, 6–10, Dharampal Satyapal (DS) Road, Sector - 67,
            Noida – 201309
          </span>
        </Flex>
        <Flex vertical>
          <span className={Styles.content_header}>Office</span>
          <span className={Styles.content}>1234567890</span>
        </Flex>
        <Flex vertical>
          <span className={Styles.content_header}>Email</span>
          <span className={Styles.content}>vfch vjmhkh.k.</span>
        </Flex>
      </Flex>
      {screenWidth > 1200 && <VerticalDivider height="250px" />}
      <Flex vertical gap={30}>
        <Flex vertical>
          <span className={Styles.content_header}>
            Consumer Care Helpline No.
          </span>
          <span className={Styles.content}>12345678</span>
        </Flex>
        <Flex vertical>
          <span className={Styles.content_header}>Google map</span>
          <span className={Styles.content}>Click Here</span>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function HeplineContact({ info }: { info: any }) {
  return (
    <Flex vertical gap={20} style={{ width: "100%" }}>
      <span className={Styles.bold_header}>{info.header}</span>
      <Flex vertical>
        <span className={Styles.content_header}>Helpline No.</span>
        <span className={Styles.content}>{info.contact_no}</span>
      </Flex>
      <Flex vertical>
        <span className={Styles.content_header}>Email</span>
        <span className={Styles.content}>{info.email}</span>
      </Flex>
    </Flex>
  );
}

export function BulkOrderContact({
  handleModalOpen,
}: {
  handleModalOpen: any;
}) {
  return (
    <Flex vertical gap={20} style={{ width: "100%" }}>
      <span>
        <ButtonOutlined
          label="BULK BUY"
          colorStrokeBg="gray"
          size="large"
          icon={<RightOutlined />}
          onClick={() => handleModalOpen("bulk_buy")}
        />
      </span>
      <span className={Styles.content}>
        *bulk order is equal to 10kg or more
      </span>
    </Flex>
  );
}
