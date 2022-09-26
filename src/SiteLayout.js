import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  IdcardOutlined,
  LoginOutlined,
  SolutionOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const SiteLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
      path: "/"
    },
    {
      key: "2",
      icon: <SolutionOutlined />,
      label: "About",
      path: "/about"
    },
    {
      key: "3",
      icon: <IdcardOutlined />,
      label: "Contact",
      path: "/contact"
    },
    {
      key: "4",
      icon: <LoginOutlined />,
      label: "Login",
      path: "/login"
    },
    {
      key: "5",
      icon: <LogoutOutlined />,
      label: "logout",
      path: "/logout"
    },
    {
      key: "6",
      icon: <ContactsOutlined />,
      label: "My Account",
      path: "/account"
    }
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {items.map((item) => {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed)
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default SiteLayout;
