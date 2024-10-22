import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import styles from "./styles.module.css";
import { appRoutes, routeIcons } from "../../constants/appRoutes";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Header";
import startCase from "lodash.startcase";

const { Sider } = Layout;

const NAV_BAR_WIDTH = "200px";

const items = Object.keys(appRoutes).map((routeKey, index) => ({
  key: String(index),
  icon: React.createElement(routeIcons[routeKey]),
  label: startCase(routeKey),
}));

// eslint-disable-next-line react/prop-types
function CoreLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenuKey, setActiveMenuKey] = useState("");

  const handleMenuClick = ({ key }) => {
    // find an optimal way later....
    const selectedTab = Object.keys(appRoutes)?.[key];
    const route = appRoutes[selectedTab];

    if (route) {
      navigate(route);
      setActiveMenuKey(key);
    }
  };

  useEffect(() => {
    const path = "/" + location?.pathname?.split("/")?.[1];
    const selectedTab = Object.values(appRoutes)?.findIndex(
      (route) => route === path
    );

    if (selectedTab !== null && selectedTab !== undefined) {
      setActiveMenuKey(selectedTab.toString());
    }
  }, [location?.pathname]);

  return (
    <div className="bg-slate-500">
      <Header />

      <Layout hasSider>
        <Sider
          //? added top w.r.t. height of the header...
          className={`${styles.sider} top-16 pt-2 bg-black`}
          style={{ "--nav-bar-width": NAV_BAR_WIDTH, background: "#001529" }}
        >
          <Menu
            mode="inline"
            selectedKeys={[activeMenuKey]}
            onClick={handleMenuClick}
            items={items}
            theme="dark"
          />
        </Sider>
        <div
          className={`${styles.layout_content} top-16`}
          style={{ "--nav-bar-width": NAV_BAR_WIDTH }}
        >
          {children}
        </div>
      </Layout>
    </div>
  );
}
export default CoreLayout;
