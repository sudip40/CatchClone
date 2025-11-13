'use client';
import { Flex } from "antd";
import styles from "./LandingPage.module.scss";
import TextStyles from "@/Component/common/Typography.module.scss";
import { defaultItemsInfo, KeyFeaturesItems } from "../constant/LandingPageItems";
import { KeyFeature, SpicesInfo } from "./LandingElements";
import { useScreenWidth } from "@/helpers/hooks/useGetScreenWidth";

export default function LandingPage() {
  const screenWidth = useScreenWidth();
  return (
    <Flex vertical style={{ width: "100%" }}>
      <img
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
        alt="default"
        width={"100%"}
        height={600}
      />
      <Flex vertical align="center" className={styles.key_points} gap={40}>
        <h1 className={styles.key_points__heading}>
          Discover the world of Exotic and Authentic Spices from Everyday- Kyunki
          Khana Sirf Khana Nahi Hota
        </h1>
        <Flex
          align="center"
          justify="center"
          gap={20}
          className={styles.key_points__items_container}
          wrap
        >
          {KeyFeaturesItems.map((item: any) => {
            return <KeyFeature key={item.id} item={item} />;
          })}
        </Flex>
      </Flex>
      <Flex justify="center" className={styles.item_details_container}>
        <SpicesInfo screenWidth={screenWidth} spice={defaultItemsInfo[0]}/>
      </Flex>
    </Flex>
  );
}
