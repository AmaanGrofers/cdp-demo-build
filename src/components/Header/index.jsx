import { Avatar, Dropdown } from "antd";
import { UserOutlined, HomeTwoTone, LogoutOutlined } from "@ant-design/icons";

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
  return (
    <div
      className="fixed h-10 p-3 w-full bg-white z-10 shadow-sm"
      style={{ border: "1px solid #EBECF2" }}
    >
      <div className="flex justify-between items-center px-4">
        <h3>cdp</h3>
        <div className="pr-4">
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <a onClick={(e) => e.preventDefault()}>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
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
