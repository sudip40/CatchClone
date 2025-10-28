import { Flex, Tooltip } from "antd";
import TextStyles from "@/Component/common/Typography.module.scss";
import styles from "./LandingPage.module.scss";
import ButtonOutlined from "../common/Customized/CustomButton/Outlined";
import { RightOutlined } from "@ant-design/icons";
import { onlineOderOptions } from "../constant/NavigationItems";
import { useScreenWidth } from "@/helpers/hooks/useGetScreenWidth";
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

function OrderOnlineTooltip() {
  return (
    <Flex
      gap={20}
      align="center"
      style={{ boxSizing: "border-box", padding: "10px 20px" }}
    >
      {onlineOderOptions.map((item: any) => (
        <div
          key={item.id}
          style={{ border: "1px solid black", cursor: "pointer" }}
        >
          <img src={item.image} alt={item.id} width={70} height={60} />
        </div>
      ))}
    </Flex>
  );
}

export function SpicesInfo({ spice,screenWidth }: { spice: SpiceInfoProp,screenWidth:number }) {
  return (
    <Flex align="center" gap={24} className={styles.item_details} wrap>
      <Flex vertical gap={27} align="flex-start" >
        <p className={styles.details_heading}>{spice.spice}</p>
        <p className={TextStyles.content_txt}>{spice.details}</p>
        <Flex align="center" gap={10} wrap>
          <Tooltip
            title={<OrderOnlineTooltip />}
            trigger={["hover"]}
            placement="bottom"
            color="#ffff"
          >
            <span>
              <ButtonOutlined
                label="ORDER ONLINE"
                colorStrokeBg="yellow_1"
                size="large"
                icon={<RightOutlined />}
              />
            </span>
          </Tooltip>
          <ButtonOutlined
            label="VIEW DETAILS"
            colorStrokeBg="gray"
            size="large"
            icon={<RightOutlined />}
          />
        </Flex>
      </Flex>
      <img src={spice.image} alt={"default_spice"} width={screenWidth<580?screenWidth-100 : 450} height={screenWidth<580?screenWidth-100 : 300} />
    </Flex>
  );
}
