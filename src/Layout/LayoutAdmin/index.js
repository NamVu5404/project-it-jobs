import HeaderAdmin from "./HeaderAdmin";
import Footer from "../DefaultLayout/Footer";
import { Layout } from "antd";
import { useState } from "react";
import MenuSider from "./MenuSider";
import { Outlet } from "react-router-dom";
const { Sider, Content } = Layout;

function LayoutAdmin() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
        <HeaderAdmin collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <Sider collapsed={collapsed} theme="light" width={250}>
            <MenuSider />
          </Sider>
          <Content className="content-admin">
            <Outlet />
          </Content>
        </Layout>
        <Footer />
    </>
  );
}

export default LayoutAdmin;
