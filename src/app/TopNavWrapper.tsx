import TopNavigationBar from "@/Component/common/TopNavbar/TopNavBar";
import { Flex } from "antd";
import React, { ReactNode } from "react";
export default function TopNavWrapper({children}:{children:ReactNode}){
    return (
        <Flex vertical style={{width:'100%'}}>
            <TopNavigationBar/>
            {children}
        </Flex>
    )
}