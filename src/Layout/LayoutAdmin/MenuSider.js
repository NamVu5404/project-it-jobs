import {
  DashboardOutlined,
  UserOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: 1,
    icon: <DashboardOutlined />,
    label: <Link to="/dashboard">Tổng quan</Link>,
  },
  {
    key: 2,
    icon: <UserOutlined />,
    label: <Link to="info-company">Thông tin công ty</Link>,
  },
  {
    key: 3,
    icon: <UnorderedListOutlined />,
    label: <Link to="job-manage">Quản lý việc làm</Link>,
  },
  {
    key: 4,
    icon: <FileDoneOutlined />,
    label: <Link to="cv-manage">Quản lý CV</Link>,
  },
];

function MenuSider() {
  return (
    <>
      <Menu
        mode="inline"
        defaultOpenKeys={"1"}
        items={items}
      />
    </>
  );
}

export default MenuSider;
