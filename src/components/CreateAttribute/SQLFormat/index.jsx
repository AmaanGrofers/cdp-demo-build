import { FloatButton } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

SQLFormat.propTypes = {
  onChangeStep: PropTypes.func,
};

function SQLFormat({ onChangeStep }) {
  return (
    <div className="h-full">
      <div className="h-14">SQLFormat</div>

      <>
        <FloatButton
          icon={<RightOutlined />}
          type="primary"
          style={{ insetInlineEnd: 24 }}
          onClick={() => onChangeStep(2)}
        />
        <FloatButton
          icon={<LeftOutlined />}
          type="default"
          style={{ insetInlineEnd: 94 }}
          onClick={() => onChangeStep(0)}
        />
      </>
    </div>
  );
}

export default SQLFormat;
