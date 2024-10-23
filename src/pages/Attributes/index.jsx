import { Button, Tooltip } from "antd";
import Title from "antd/es/typography/Title";
import CreateAttribute from "../../components/CreateAttribute";
import { CloseOutlined } from "@ant-design/icons";
import useAttributeStore from "../../stores/attributeStore";

function Attributes() {
  const { creatingAttribute, setCreation } = useAttributeStore(
    (state) => state
  );

  const handleChange = () => setCreation();

  return (
    <div className="p-4 ml-4">
      <div className="flex items-center justify-between">
        <Title level={2}>
          {creatingAttribute ? "Create a user Attribute" : "Attributes"}
        </Title>

        {creatingAttribute ? (
          <Tooltip title="Go back" placement="topLeft">
            <Button
              type="text"
              shape="circle"
              icon={<CloseOutlined />}
              onClick={handleChange}
            />
          </Tooltip>
        ) : (
          <Button type="primary" onClick={handleChange}>
            + Create a user attribute
          </Button>
        )}
      </div>

      <div className="mt-4">
        {creatingAttribute ? (
          <CreateAttribute />
        ) : (
          <div>List Attributes...</div>
        )}
      </div>
    </div>
  );
}

export default Attributes;
