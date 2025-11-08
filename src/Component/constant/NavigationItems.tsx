import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";

export const NavigationItems = [
  {
    content: "HOME",
    type: "navigation",
    path: "/everyday",
  },
  {
    content: "ABOUT CATCH",
    type: "navigation",
    path: "/everyday/about-us",
  },
  {
    content: "PRODUCT RANGE ⤵",
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
    path: "/everyday/contact-us",
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

export const onlineOderOptions = [
  {
    id: "amazon1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-N8Kr5wYiTLajPVLlcg7PEgfkyd3qEqZqQ&s",
    link: "",
  },
  {
    id: "amazon2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-N8Kr5wYiTLajPVLlcg7PEgfkyd3qEqZqQ&s",
    link: "",
  },
];
export const ProductRageList = [
  {
    id: "kitchen_range",
    range_name: "KITCHEN RANGE",
    range_items:[
      {
        id:'1',
        label:'Single/straight species',
        link:'',
        image:'',
      }
    ]
  },
  {
    id: "table_top_range",
    range_name: "TABLE TOP RANGE",
    range_items:[]
  },
  {
    id: "others",
    range_name: "OTHERS",
    range_items:[]
  },
];
