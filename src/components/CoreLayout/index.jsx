import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import styles from "./styles.module.css";
import { appRoutes } from "../../constants/appRoutes";
// import Logo from "../Assets/Logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const NAV_BAR_WIDTH = "200px";

const items = Object.keys(appRoutes).map((routeKey, index) => ({
  key: String(index),
  // icon: React.createElement(icon),
  label: routeKey.toUpperCase(),
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
    const path = location?.pathname;
    const selectedTab = Object.values(appRoutes)?.findIndex(
      (route) => route === path
    );

    if (selectedTab !== null && selectedTab !== undefined) {
      setActiveMenuKey(selectedTab.toString());
    }
  }, []);

  return (
    <Layout hasSider>
      <Sider
        className={`${styles.sider} bg-gray-50`}
        style={{ "--nav-bar-width": NAV_BAR_WIDTH }}
      >
        {/* <img
          style={{
            alignSelf: "center",
            objectFit: "contain",
            marginTop: "10px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
          src={Logo}
          alt="logo"
        /> */}
        <Menu
          mode="inline"
          selectedKeys={[activeMenuKey]}
          onClick={handleMenuClick}
          items={items}
          className="bg-gray-50"
        />
      </Sider>
      <div
        className={styles.layout_content}
        style={{ "--nav-bar-width": NAV_BAR_WIDTH }}
      >
        {children}
      </div>
    </Layout>
  );
}
export default CoreLayout;
