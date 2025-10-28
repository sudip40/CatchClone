import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";

export const NavigationItems = [
  {
    content: "HOME",
    type: "navigation",
    path: "/",
  },
  {
    content: "ABOUT CATCH",
    type: "navigation",
    path: "/about-us",
  },
  {
    content: "PRODUCT RANGE",
    type: "drawer",
    path: "",
  },
  {
    content: "CATCH KITCHEN",
    type: "navigation",
    path: "",
  },
  {
    content: "CONTACT US",
    type: "navigation",
    path: "/contact-us",
  },
];
export const socialMediaItems = [
  {
    key: "facebook",
    link: "",
    component: <FacebookOutlined />,
  },
  {
    key: "instagram",
    link: "",
    component: <InstagramOutlined />,
  },
  {
    key: "x.com",
    link: "",
    component: <XOutlined />,
  },
];

export const onlineOderOptions=[
  {
    id:'amazon1',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-N8Kr5wYiTLajPVLlcg7PEgfkyd3qEqZqQ&s',
    link:''
  },
  {
    id:'amazon2',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-N8Kr5wYiTLajPVLlcg7PEgfkyd3qEqZqQ&s',
    link:''
  },
]
