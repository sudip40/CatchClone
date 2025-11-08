import React from "react";
import styles from "./TopNavBar.module.scss";
import { Flex } from "antd";
import { ProductRageList } from "@/Component/constant/NavigationItems";

function Porduct({ product }: { product: any }) {
  return (
    <Flex
      vertical
      gap={10}
      align="center"
      className={styles.product_div}
    >
        <p>{product.label}</p>
    </Flex>
  );
}
export default function ProductRangeTooltip() {
  return (
    <Flex
      vertical
      justify="center"
      gap={20}
      style={{ width: "90vw", maxHeight: "80vh" }}
    >
      {ProductRageList.map((range: any) => (
        <Flex key={range.id} vertical align="center" gap={10}>
          <p>{range.range_name}</p>
          <Flex align="center" gap={20} wrap>
            {range.range_items.map((item: any) => (
              <Porduct key={item.id} product={item} />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
