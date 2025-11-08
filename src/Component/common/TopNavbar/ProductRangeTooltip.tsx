import React from "react";
import styles from "./TopNavBar.module.scss";
import { Flex } from "antd";
import TextStyle from "@/Component/common/Typography.module.scss";
import { ProductRageList } from "@/Component/constant/NavigationItems";
import { HorizontalDivider } from "../Customized/Devider";

function Porduct({ product }: { product: any }) {
  return (
    <Flex
      vertical
      gap={10}
      align="center"
      className={styles.product_div}
    >
      <img src={product?.image} alt="item_image" width={100} height={100} />
      <p>{product.label}</p>
    </Flex>
  );
}
export default function ProductRangeTooltip({ onClose }: { onClose: any }) {
  return (
    <Flex
      vertical
      justify="center"
      gap={20}
      style={{ width: "100%", maxHeight: "80vh" }}
      onMouseLeave={onClose}
    >
      {ProductRageList?.map((range: any, ind: number) => (
        <Flex key={range?.id} vertical align="center" gap={10}>
          <p className={TextStyle.nav_bold_txt} style={{ fontSize: '18px' }}>{range?.range_name}</p>
          <Flex align="center" gap={20} wrap>
            {range?.range_items?.map((item: any) => (
              <Porduct key={item.id} product={item} />
            ))}
          </Flex>
          {ind !== ProductRageList.length - 1 &&
            <HorizontalDivider width={'90%'} />
          }
        </Flex>
      ))}
    </Flex>
  );
}
