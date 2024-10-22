import { Form, Skeleton } from "antd";
import getElementController from "../../utils/getElementController";
import { getDataSourceControls } from "../../configurations/getDataSourceControls";
import isEmpty from "lodash.isempty";
import PropTypes from "prop-types";

SourceControls.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
};

function SourceControls({ isLoading = false, data = {} }) {
  if (isLoading) {
    return <Skeleton />;
  }

  if (isEmpty(data)) return;

  //* name is always required...
  const sourceControlKeys = { ...(data?.data?.result || {}), name: true };

  const dataSourceControls = (getDataSourceControls() || []).filter(
    (controlItem) => sourceControlKeys[controlItem?.name]
  );

  return (
    <>
      {dataSourceControls?.map((controlItem) => {
        const { key, type, style, ...rest } = controlItem || {};

        const Element = getElementController(type);

        if (!Element) return;

        return (
          <div key={key} className={style}>
            <Form.Item {...rest}>
              <Element {...rest} />
            </Form.Item>
          </div>
        );
      })}
    </>
  );
}

export default SourceControls;
