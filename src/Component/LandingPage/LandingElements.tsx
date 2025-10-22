import { Flex } from "antd";
import TextStyles from "@/Component/common/Typography.module.scss";
import styles from "./LandingPage.module.scss";
import ButtonOutlined from "../common/Customized/CustomButton/Outlined";
interface keyFeatureProp {
  id: string | number;
  point: string;
  description: string;
  image: string;
}
interface OderLInkProp {
  platform: string;
  redirectLink: string;
}
interface SpiceInfoProp {
  key: string | number;
  spice: string;
  details: string;
  image: string;
  orderLinks?: OderLInkProp[];
}

export function KeyFeature({ item }: { item: keyFeatureProp }) {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap={8}
      key={item.id}
      style={{ maxWidth: "320px" }}
    >
      <img src={item.image} alt="feature_image" width={80} height={80} />
      <Flex vertical align="center" justify="center" gap={15}>
        <p className={TextStyles.bold_txt}>{item.point}</p>
        <p className={TextStyles.content_txt}>{item.description}</p>
      </Flex>
    </Flex>
  );
}

export function SpicesInfo({ spice }: { spice: SpiceInfoProp }) {
  return (
    <Flex align="center" gap={24} className={styles.item_details}>
      <Flex vertical gap={27} align="flex-start">
        <p
          className={styles.details_heading}
        >
          {spice.spice}
        </p>
        <p className={TextStyles.content_txt}>{spice.details}</p>
        <Flex align="center" gap={10}>
            <ButtonOutlined label="ORDER ONLINE" colorStrokeBg='gray'/>
            <ButtonOutlined label="VIEW DETAILS" colorStrokeBg='gray'/>
        </Flex>
      </Flex>
      <img src={spice.image} alt={"default_spice"} width={450} height={400} />
    </Flex>
  );
}
