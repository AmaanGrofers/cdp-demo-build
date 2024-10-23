import { FloatButton } from "antd";
import { RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

ConnectDataSource.propTypes = {
  onChangeStep: PropTypes.func,
};

function ConnectDataSource({ onChangeStep }) {
  return (
    <div className="h-full">
      <div className="h-14">ConnectDataSource</div>

      <FloatButton
        icon={<RightOutlined />}
        type="primary"
        tooltip={<div>Next</div>}
        onClick={() => onChangeStep(1)}
      />
    </div>
  );
}

export default ConnectDataSource;
