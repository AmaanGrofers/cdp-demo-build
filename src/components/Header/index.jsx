import { Avatar, Dropdown } from "antd";
import { UserOutlined, HomeTwoTone, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/appRoutes";

const USER = "Amaan";

const items = [
  {
    key: "1",
    label: "My Account",
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Profile",
    icon: <HomeTwoTone className="pr-2" />,
    // extra: "⌘P",
  },
  {
    key: "5",
    label: "Log Out",
    icon: <LogoutOutlined className="pr-2" />,
    // extra: "⌘S",
  },
];

function Header() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation(appRoutes.attributes);
  };

  return (
    <div className="fixed h-10 p-3 w-full bg-slate-50 z-10 shadow-md">
      <div className="flex justify-between items-center px-4">
        <h3 onClick={handleClick} className="cursor-pointer">
          cdp
        </h3>

        <div className="pr-4">
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <a onClick={(e) => e.preventDefault()}>
              <Avatar
                style={{ backgroundColor: "#1677FF" }}
                icon={<UserOutlined />}
              />
              <span className="pl-2 text-sm">{USER}</span>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
